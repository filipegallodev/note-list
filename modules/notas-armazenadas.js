export default class NotasArmazenadas {
  constructor(notasNoDom) {
    this.notasNoDom = notasNoDom;
  }

  pegarNotasCriadas() {
    return document.querySelectorAll(this.notasNoDom);
  }

  colocarTextoDasNotasEmArray() {
    this.notasTextosArray = [];
    this.notasCriadas.forEach((nota) => {
      const notaTexto = nota.innerText;
      this.notasTextosArray.push(notaTexto);
    });
  }

  salvarNoLocalStorage() {
    this.notasCriadas = this.pegarNotasCriadas();

    this.colocarTextoDasNotasEmArray();

    this.notasTextoJson = JSON.stringify(this.notasTextosArray);
    localStorage.setItem("notas-salvas", this.notasTextoJson);
  }

  lerDoLocalStorage() {
    this.notasTextoJson = localStorage.getItem("notas-salvas");
    this.notasTextosArray = JSON.parse(this.notasTextoJson);

    return this.notasTextosArray;
  }
}
