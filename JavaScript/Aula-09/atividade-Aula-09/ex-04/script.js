const botao = document.querySelector("#listarFrases");
const paragrafos = document.querySelectorAll("p");
const lista = document.querySelector("#listaFrases");

botao.addEventListener("click", function () {
  paragrafos.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item.textContent;
    lista.appendChild(li);
  });
});
