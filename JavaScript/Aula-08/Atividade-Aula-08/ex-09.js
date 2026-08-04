const produtos = [
  { nome: "Camiseta", preco: 45 },
  { nome: "Calça Jeans", preco: 120 },
  { nome: "Tênis Esportivo", preco: 85 },
  { nome: "Meias", preco: 15 },
  { nome: "Jaqueta", preco: 200 }
];

const produtosAcimaDe60 = produtos.filter(produto => produto.preco > 60)


console.log(produtosAcimaDe60)