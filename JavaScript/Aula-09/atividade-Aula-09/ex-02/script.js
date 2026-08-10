

const botao = document.querySelector("#btnDestacar")
const divDestaque = document.querySelector("#destaque")


botao.addEventListener("click", () => {


  const paragrafoImportante = document.querySelector(".importante")


  divDestaque.textContent = paragrafoImportante.textContent
})

