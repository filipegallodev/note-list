import {
  salvarNotasNoLocalStorage,
  lerNotasDoLocalStorage,
} from "./local-storage.js";

function excluirNota(event) {
  event.target.closest("div").remove();

  salvarNotasNoLocalStorage();
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
  const botaoExcluirNota = document.createElement("img");

  notaSalvaItemConteudo.innerText = notaTexto;

  botaoExcluirNota.src = "../img/excluir.svg";
  botaoExcluirNota.alt = "Excluir";
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

    salvarNotasNoLocalStorage();
  }

  notaEscrita.focus();
}

const textoNotasArray = lerNotasDoLocalStorage();
textoNotasArray.forEach((item) => criarNota(item));
