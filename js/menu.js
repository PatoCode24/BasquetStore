const open_menu = document.querySelector("#open-menu");
const close_menu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

open_menu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

close_menu.addEventListener("click", () =>{
    aside.classList.remove("aside-visible");
})

botones_categorias.forEach(boton => boton.addEventListener("click", () =>{
    aside.classList.remove("aside-visible");
}))