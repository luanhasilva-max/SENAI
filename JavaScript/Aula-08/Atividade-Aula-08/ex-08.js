let palavras = ['sol', 'montanha', 'lua', 'estrela', 'mar']

let palavrasLetras = palavras.filter(function(item){
    return item.length > 3

})
console.log(palavrasLetras)