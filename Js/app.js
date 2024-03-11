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
