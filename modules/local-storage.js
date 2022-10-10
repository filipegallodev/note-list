import { criarNota } from "./criar-nota.js";

export function salvarNotasNoLocalStorage() {
  const notasCriadas = document.querySelectorAll(".nota-item p");

  const textoNotasArray = new Array();
  notasCriadas.forEach((nota) => {
    const textoNota = nota.innerText;
    textoNotasArray.push(textoNota);
  });

  const textoNotasJson = JSON.stringify(textoNotasArray);

  localStorage.setItem("notas-salvas", textoNotasJson);
}

export function lerNotasDoLocalStorage() {
  const textoNotasJson = localStorage.getItem("notas-salvas");
  const textoNotasArray = JSON.parse(textoNotasJson);

  textoNotasArray.forEach((item) => criarNota(item));
}
