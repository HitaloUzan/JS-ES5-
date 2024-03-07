// Criando um link apenas com JavaScript, essa é a estrutura montada, também adicionamos uma div com Id no html
// Para fazer a comunicação entre eles (HTML E JS)

let link = document.createElement("a");
link.setAttribute("href", "https://frontpush.com.br");

let conteudo = document.createTextNode("Acessar o FrontPush");

link.appendChild(conteudo);

let container = document.querySelector("#app");

container.appendChild(link);
