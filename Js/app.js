//  Pratica

const nomes = ["joao", "maria", "pedro", "carol"];

const text = document.querySelector(".text");
const botao = document.querySelector("button");
const titulo = document.querySelector("h2");

botao.addEventListener("click", () => {
  if (nomes.includes(text.value)) {
    titulo.innerHTML = "Existe";
  } else {
    titulo.innerHTML = "Não existe";
  }
});
