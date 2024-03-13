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

// é tipo uma lista expasiva.

// Accordion list

document.querySelectorAll(".accordion-content").forEach((item) => {
  item.style.maxHeight = 0;
});

document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});

// CSS dessa lista

// .container {
//   max-width: 500px;
//   margin: 0 auto;

//   padding: 40px;
// }

// .border {
//   border: 1px solid red;
// }

// .accordion-button {
//   display: block;
//   width: 100%;

//   cursor: pointer;
//   background-color: transparent;

//   padding: 8px 16px;
//   margin-top: 16px;
// }

// .accordion-content {
//   overflow: hidden;
// }

// HTML dessa lista
// <body>
//<section class="container border">
//<div class="accordion">
//<button type="button" class="accordion-button border">
//<h4>Primeiro item</h4>
//</button>
//<div class="accordion-content border">
// <p>
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint modi
//laborum aliquid ducimus mollitia aut fugiat quae exercitationem
//tempora sed? Eaque,tempore porro aspernatur tempora quod aperiam
//reprehenderit optio facilis.
// </p>
//</div>

// <button type="button" class="accordion-button border">
//  <h4>Segundo item</h4>
// </button>
//  <div class="accordion-content border">
//  <p>
//    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint modi
//    laborum aliquid ducimus mollitia aut fugiat quae exercitationem
//   tempora sed? Eaque,tempore porro aspernatur tempora quod aperiam
//   reprehenderit optio facilis.
// </p>
//  </div>

//  <button type="button" class="accordion-button border">
//   <h4>Terceiro item</h4>
// </button>
//  <div class="accordion-content border">
//     <p>
//   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint modi
//   laborum aliquid ducimus mollitia aut fugiat quae exercitationem
//   tempora sed? Eaque,tempore porro aspernatur tempora quod aperiam
//   reprehenderit optio facilis.
// </p>
//  </div>
// </div>
// </section>

// <script src="Js/app.js"></script>
//</body>;

// modal

const button = document.querySelector("button");
const modal = document.getElementById("mymodal");
const close = document.querySelector(".close");

button.addEventListener("click", () => {
  modal.classList.add("modal-active");
});

close.addEventListener("click", () => {
  modal.classList.remove("modal-active");
});

// JSON

JSON.parse(); // transforma o texto JSON em objeto
JSON.stringify(); // Transoforma o objeto em arquivo JSON

// JSON

const json = JSON.parse(
  '{"id": 1, "nome": "Notebook Dell","modelo": "Gamer", "quantidade": 5}'
);

const caneta = {
  cor: "azul",
  formato: "triangular",
  tipo: "desenho",
};

const stringjson = JSON.stringify(caneta);
console.log(stringjson);

// Ajax

var xhr = new XMLHttpRequest(); // Instanciando uma classe

xhr.open("GET", "https://api.github.com/users/hitalouzan");
xhr.send(null);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};

// Promises

var minhasPromise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/hitalouzan");
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro!");
        }
      }
    };
  });
};

minhasPromise()
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// Axios

axios
  .get("https://api.github.com/users/hitalouzan")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

//  desestrururação

document.documentElement.addEventListener("mousemove", MouseMove);

function MouseMove({ clientX, clientY }) {
  console.log(clientX, clientY);
}

const carros = ["volks", "fiat", "bmw", "audi"];

const [marca1, marca2, marca3, marca4] = carros;

const funcao = function () {};

console.log(marca);
