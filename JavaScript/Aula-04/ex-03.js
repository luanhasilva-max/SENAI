let celular = { 
    Marca: "Motorola",
    Modelo: "tijorola",
    Ano: 2024,
    Cor: "amarelo",

}

for(let chave in celular){
    console.log(`${chave} = ${celular[chave]}`)
}