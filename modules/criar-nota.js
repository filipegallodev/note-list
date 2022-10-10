import { salvarNotasNoLocalStorage } from "./local-storage.js";

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

export function criarNota(notaTexto) {
  const notasSalvas = document.querySelector(".notas-salvas");

  const notaSalvaItem = document.createElement("div");
  const notaSalvaItemConteudo = document.createElement("p");
  const excluirNota = document.createElement("img");

  notaSalvaItemConteudo.innerText = notaTexto;

  excluirNota.src = "https://i.imgur.com/Js5xgWN.png";
  excluirNota.alt = "Excluir";
  excluirNota.classList.add("excluir-nota");

  notaSalvaItem.classList.add("nota-item");

  notaSalvaItem.appendChild(notaSalvaItemConteudo);
  notaSalvaItem.appendChild(excluirNota);
  notasSalvas.appendChild(notaSalvaItem);
}

export function botaoExcluir() {
  const excluir = document.querySelectorAll(".excluir-nota");

  excluir.forEach((item) => {
    item.addEventListener("click", (event) => excluirNota(event));
  });
}

function excluirNota(event) {
  event.target.closest("div").remove();

  salvarNotasNoLocalStorage();
}
