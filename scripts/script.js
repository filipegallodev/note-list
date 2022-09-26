const botaoSalvar = document.querySelector('.botao-salvar');

function salvarNota() {
  const notaEscrita = document.querySelector('.nota-escrita');
  const notasSalvas = document.querySelector('.nota-salva');
  const notaSalva = document.createElement('p');

  
  notaSalva.innerHTML = notaEscrita.value;
  notasSalvas.appendChild(notaSalva)
  notaEscrita.value = '';
  notaEscrita.focus();
}

botaoSalvar.addEventListener('click', () => salvarNota());