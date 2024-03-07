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
