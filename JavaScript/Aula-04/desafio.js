let produtos = [
  { nome: "tv", preco: 1999, categoria: "eletro" },
  { nome: "geladeira", preco: 3900, categoria: "branca" },
  { nome: "ps5", preco: 3500, categoria: "videoGame" },
  { nome: "varol", preco: 300, categoria: "casa" },
  { nome: "forno", preco: 590, categoria: "branco" },
];

produtos.forEach(function (produto) {
  console.log(`nome: ${produto.nome} - preço: ${produto.preco}`);

  let total = 0;

  total = total + produto.preco;
});
console.log(`valor total é  ${total}`);
