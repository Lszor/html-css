function showItens() {
  let icon = document.querySelector("span#menu-icon")
  let itens = document.querySelector("menu#itens")
  if (itens.style.display == 'block') {
    itens.style.display = 'none'
     icon.innerHTML = 'menu'
  }
  else {
    itens.style.display = 'block'
    icon.innerHTML = 'close'
  }
}

