// Pratica

let listElement = document.querySelector(".list");
let textElement = document.querySelector("input");
let buttonElement = document.querySelector("button");

let arr = [
  "Fazer um chá",
  "Ver aulas do FrontPush de JS",
  "Tentar executar sozinho",
];

function renderTodo() {
  listElement.innerHTML = "";

  arr.forEach((item, index) => {
    var liElement = document.createElement("li");
    var liText = document.createTextNode(item);

    var linkLi = document.createElement("a");
    var TextLink = document.createTextNode("Excluir");

    linkLi.setAttribute("hred", "#");
    linkLi.setAttribute("onclick", "deleteItem('+ index +')");

    linkLi.appendChild(TextLink);

    liElement.appendChild(liText);
    liElement.appendChild(linkLi);
    listElement.appendChild(liElement);
  });
}

renderTodo();

buttonElement.addEventListener("click", addItem);

function addItem() {
  var itemTexto = textElement.value;
  arr.push(itemTexto);
  renderTodo();
}

function deleteItem(pos) {
  arr.splice(pos, 1);

  renderTodo();
}
