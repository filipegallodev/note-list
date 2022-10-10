import { salvarNota, botaoExcluir } from "./modules/criar-nota.js";
import { lerNotasDoLocalStorage } from "./modules/local-storage.js";

const botaoSalvar = document.querySelector(".botao-salvar");

botaoSalvar.addEventListener("click", salvarNota);

lerNotasDoLocalStorage();

botaoExcluir();
