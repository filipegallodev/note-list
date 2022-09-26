function salvarNota() {
  const notaEscrita = document.querySelector('.nota-escrita');

  if (notaEscrita.value === '') {
    alert('Você não pode salvar uma nota vazia!\n\nTente escrever algo antes =D');
  }
  else {
    criarNota();

    notaEscrita.value = '';

    botaoExcluir();
  }

  notaEscrita.focus();
}

function criarNota() {
  const notaEscrita = document.querySelector('.nota-escrita');
  const notasSalvas = document.querySelector('.notas-salvas');

  const notaSalvaItem = document.createElement('div');
  const notaSalvaItemConteudo = document.createElement('p');
  const excluirNota = document.createElement('img');

  notaSalvaItemConteudo.innerText = notaEscrita.value;

  excluirNota.src = '../img/excluir.png';
  excluirNota.classList.add('excluir-nota');

  notaSalvaItem.classList.add('nota-item');

  notaSalvaItem.appendChild(notaSalvaItemConteudo);
  notaSalvaItem.appendChild(excluirNota);
  notasSalvas.appendChild(notaSalvaItem);
}

function botaoExcluir() {
  const excluir = document.querySelectorAll('.excluir-nota');

  excluir.forEach((item) => {
    item.addEventListener('click', (event) => excluirNota(event))
  });
}

function excluirNota(event) {
  event.target.closest('div').remove();
}

const botaoSalvar = document.querySelector('.botao-salvar');

document.addEventListener('click', botaoExcluir);

botaoSalvar.addEventListener('click', salvarNota);