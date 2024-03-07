// 1) passo seletores de elementos

const titulo = document.getElementById("titulo");
console.log(titulo);

const subtitle = document.getElementsByClassName("subtitle");
console.log(subtitle);

const ul = document.getElementsByTagName("ul");
console.log(ul);

const menu = document.querySelector(".menu .menu-item");
console.log(menu);

const items = document.querySelectorAll(".menu .menu-item");
console.log(items);

items.forEach((item) => {
  item.classList.add("item-classe");
});
