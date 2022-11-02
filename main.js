import { salvarNota } from "./modules/criar-nota.js";

const botaoSalvar = document.querySelector(".botao-salvar");

botaoSalvar.addEventListener("click", salvarNota);
