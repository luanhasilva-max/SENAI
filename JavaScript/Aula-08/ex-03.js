let contatos = [
  { id: 1, nome: "Igor" },
  { id: 2, nome: "Bruno" },
];
let encontrado = contados.find(function (item) {
  return item.id === 2;
});
console.log(encontrado);
