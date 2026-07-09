console.log("5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");

console.log("0 == false:", 0 == false);
console.log("0 === false:", 0 === false);

console.log("null == undefined:", null == undefined);
console.log("null === undefined:", null === undefined);

// a diferença entre == e === é que o primeiro compara apenas o valor, enquanto o segundo compara tanto o valor quanto o tipo de dado. Por exemplo, 5 == "5" 
// retorna true porque os valores são iguais, mas 5 === "5" retorna false porque os tipos de dados são diferentes (number e string).