import NotasArmazenadas from "./notas-armazenadas.js";

const notasArmazenadas = new NotasArmazenadas(".nota-item p");

function excluirNota(event) {
  event.target.closest("div").remove();

  notasArmazenadas.salvarNoLocalStorage();
}

function botaoExcluir() {
  const excluir = document.querySelectorAll(".excluir-nota");

  excluir.forEach((item) => {
    item.addEventListener("click", (event) => excluirNota(event));
  });
}

export function criarNota(notaTexto) {
  const notasSalvas = document.querySelector(".notas-salvas");

  const notaSalvaItem = document.createElement("div");
  const notaSalvaItemConteudo = document.createElement("p");
  const botaoExcluirNota = document.createElement("div");

  notaSalvaItemConteudo.innerText = notaTexto;
  
  botaoExcluirNota.innerText = "X";
  botaoExcluirNota.classList.add("excluir-nota");

  notaSalvaItem.classList.add("nota-item");

  notaSalvaItem.appendChild(notaSalvaItemConteudo);
  notaSalvaItem.appendChild(botaoExcluirNota);
  notasSalvas.appendChild(notaSalvaItem);

  botaoExcluir();
}

export function salvarNota() {
  const notaEscrita = document.querySelector(".nota-escrita");

  if (notaEscrita.value === "") {
    alert(
      "Você não pode salvar uma nota vazia!\n\nTente escrever algo antes =D"
    );
  } else {
    criarNota(notaEscrita.value);

    notaEscrita.value = "";

    notasArmazenadas.salvarNoLocalStorage();
  }

  notaEscrita.focus();
}

const notasTextosArray = notasArmazenadas.lerDoLocalStorage();
if (notasTextosArray !== null) {
  notasTextosArray.forEach((item) => criarNota(item));
}
