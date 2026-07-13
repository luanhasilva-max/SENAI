let pessoa = { nome: 'Ana', idade: 25, cidade: 'SP' };

for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}