class MenuController {
  constructor(iconSelector, itemsSelector) {
    this.icon = document.querySelector(iconSelector);
    this.itens = document.querySelector(itemsSelector);
    
    // Inicializa o menu
    this.initialize();
  }

  // Inicializa o evento de clique e o redimensionamento da janela
  initialize() {
    this.icon.addEventListener('click', () => this.toggleMenu());
    window.addEventListener('resize', () => this.handleResize());
    this.setInitialState();
  }

  // Alterna a classe "open" e atualiza o ícone
  toggleMenu() {
    this.itens.classList.toggle('open');
    this.updateIcon();
  }

  // Atualiza o ícone com base no estado do menu
  updateIcon() {
    this.icon.innerHTML = this.itens.classList.contains('open') ? 'close' : 'menu';
  }

  // Manipula o redimensionamento da janela
  handleResize() {
    if (window.innerWidth > 768) {
      this.showMenu();
    } else {
      this.hideMenu();
      this.updateIcon();
    }
  }

  // Exibe o menu em telas grandes
  showMenu() {
    this.itens.classList.remove('open');
    this.icon.style.display = 'none';
    this.itens.style.maxHeight = 'none'; 
  }

  // Oculta o menu em telas pequenas
  hideMenu() {
    this.icon.style.display = 'inline-block';
    if (!this.itens.classList.contains('open')) {
      this.itens.style.maxHeight = '0'; 
    }
  }

  // Define o estado inicial do menu e ícone
  setInitialState() {
    if (window.innerWidth > 768) {
      this.showMenu();
    } else {
      this.hideMenu();
      this.updateIcon();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new MenuController("#menu-icon", "#itens");
});
