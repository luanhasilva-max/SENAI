let produtos = [
    
     {id:1, nome: "mouse", preco: 50, },
    {id:2, nome: "teclado", preco:120, },
     {id:3, nome: "monitor", preco:800, }
]

let nomes = produtos.map(function(item){
    return item.nome

})
console.log(nomes)