const botaoSalvar = document.querySelector('.botao-salvar');

function salvarNota() {
  const notaEscrita = document.querySelector('.nota-escrita');
  const notasSalvas = document.querySelector('.notas-salvas');
  
  if (notaEscrita.value === '') {
    alert('Você não pode salvar uma nota vazia!\n\nTente escrever algo antes =D')
  }
  else {
    const notaSalvaItem = document.createElement('div');
    const notaSalvaItemConteudo = document.createElement('p');
    const excluirNota = document.createElement('img');
    
    notaSalvaItemConteudo.innerText = notaEscrita.value;
    excluirNota.src = '../img/icons8-lixo.svg';
    notaSalvaItem.classList.add('nota-item');
    notaSalvaItem.appendChild(notaSalvaItemConteudo);
    notaSalvaItem.appendChild(excluirNota);
    notasSalvas.appendChild(notaSalvaItem);
    
    notaEscrita.value = '';
  }
  notaEscrita.focus();
}

botaoSalvar.addEventListener('click', () => salvarNota());