const botao = document.querySelector("#btnMostrar")
const titulo = document.querySelector("h1")
const resultado = document.querySelector("#resultado")


 botao.addEventListener("click", function(){
  resultado.textContent = titulo.textContent
 })
