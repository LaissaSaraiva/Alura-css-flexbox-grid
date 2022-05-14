var botaoMenu = document.querySelector(".cabecalho__menu");
var menu = document.querySelector(".menu__lateral");

botaoMenu.addEventListener("click", () => {

    menu.classList.toggle("menu-lateral--ativo");
});