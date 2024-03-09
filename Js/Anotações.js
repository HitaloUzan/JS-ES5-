// 2) Adicionando Classes e atributos

// Class

const menu = document.querySelector(".menu");
const img = document.querySelector("img");

console.log(menu.className); // String com as classes da tag
console.log(menu.classList); // Lista um 'Array' com as classe vinculadas a essa tag

menu.classList.add("teste", "lista"); // adiciona novas classes
menu.classList.remove("lista"); // remove a classe escolhida
menu.classList.toggle("active"); // verifica se existe ou não a classe se sim ela remove se não ela coloca.
menu.classList.contains("active"); // faz a verificação se contem a classe dentro da tag
console.log(menu.classList.contains("active")); // retorna o boolena (true or false)
menu.classList.replace("teste", "test"); // substitui a classe

// Atributos

console.log(img.getAttribute("alt")); // seleciona o conteúdo de um atributo

img.setAttribute("data-source", "Aqui vai uma mensagem nova"); // Cria atributos e altera o conteúdo de um atributo

console.log(img.getAttribute("alt"));

img.removeAttribute("data-source"); // Remove um atributo.

// Criando um link apenas com JavaScript, essa é a estrutura montada, também adicionamos uma div com Id no html
// Para fazer a comunicação entre eles (HTML E JS)

let link = document.createElement("a");
link.setAttribute("href", "https://frontpush.com.br");

let conteudo = document.createTextNode("Acessar o FrontPush");

link.appendChild(conteudo);

let container = document.querySelector("#app");

container.appendChild(link);

// renderizando o CSS no javascript

link.style.textDecoration = "none";
link.style.color = "#fff";

let box = document.querySelector(".box");
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "#fff";

// Descrobrindo tamanhos de um objeto com js

let box = document.querySelector(".box");
console.log(box.clientWidth); // Me retorna a largura do objeto selecionado.
console.log(box.clientHeight); // Me retorna a altura do objeto selecionado.
console.log(box.offsetTop); // Me retorna a distancia entre o objeto e o topo da pagina
console.log(box.offsetLeft); // Me retorna a distancia entre o objeto e a esquerda da pagina
console.log(window.innerWidth); // Me retorna o tamanho da janela (Pagina web) apenas a area do site as areas de configurações não.
console.log(window.outerWidth); // Me retorna o tamanho da janela (Pagina web) tela inteira.
console.log(window.pageYOffset); // Me retorna a distancia percorrida no scroll da janela.

// Criando Responsividade

const media = window.matchMedia("(max-width: 540px)");
console.log(media);

if (media.matches) {
  console.log("Tela é mobile");
} else {
  console.log("Tela é Descktop");
}

//  Eventos Js.

let box = document.querySelector(".box");

function callback(event) {
  console.log(event.composedPath());
}

box.addEventListener("click", callback);

// Eventos

let box = document.querySelector(".box");

function callback(event) {
  console.log(event);
}

window.addEventListener("keydown", callback);

// Eventos

let box = document.querySelector(".box");

function callback(event) {
  if (event.key == "r") {
    box.classList.toggle("red");
  } else if (event.key == "b") {
    box.classList.toggle("blue");
  } else {
    box.classList.toggle("green");
  }
}

window.addEventListener("keydown", callback);
