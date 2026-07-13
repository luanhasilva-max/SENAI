let compras = [];

compras.push('arroz', 'feijão', 'macarrão', 'leite', 'café');

console.log("--- Lista de Compras Inicial ---");
compras.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

console.log("\n--- Verificação de Item ---");
if (compras.includes('arroz')) {
    console.log("O item 'arroz' está na lista de compras!");
} else {
    console.log("O item 'arroz' não foi encontrado.");
}

console.log("\n--- Remoção de Item ---");
let itemRemovido = compras.pop();
console.log(`O item removido da lista foi: ${itemRemovido}`);

console.log("\n--- Lista de Compras Atualizada ---");
compras.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});
console.log(`Total de itens restantes: ${compras.length}`);



