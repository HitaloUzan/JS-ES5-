let nome = "Hitalo"; // String
let sobrenome = "Uzan";
let string = `o ${nome} tem o sobrenome ${sobrenome}`;
let idade = 25; // Number
let feliz = true; //Boolean
let nada; //undefined
let simbolo = Symbol();
let object = {}; // objeto

var soma = 200 + 200;

console.log(string);
console.log(soma);

let condicao1 = 0;
let condicao2 = 100;
let condicao3 = 4;
let condicao4 = 20;

if ((condicao1 && condicao2) || (condicao3 && condicao4)) {
  console.log("A primeira condição foi satisfeita!");
} else if (condicao2) {
  console.log("A segunda condição acima foi satisfeita!");
} else if (condicao3) {
  console.log("A terceira condição acima foi satisfeita!");
} else {
  console.log("Nenhuma condição acima foi satisfeita!");
}

switch (nome) {
  case "Uzan":
    console.log("Esse é o sobrenome");
    break;
  case "Hitalo":
    console.log("Esse é o nome");
    break;
  case "Fernandes":
    console.log("Esse é o terceiro nome");
    break;

  default:
    console.log("Essa é a exceção");
}
