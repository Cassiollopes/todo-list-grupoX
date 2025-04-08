function adicionarTarefa() {
  const input = document.getElementById('novaTarefa');
  const textoTarefa = input.value.trim();

  if (textoTarefa === '') {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = textoTarefa;

  li.onclick = function () {
    li.classList.toggle('concluida');
  };

  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = '🗑️';
  botaoRemover.classList.add('remover-btn');
  botaoRemover.onclick = function (event) {
    event.stopPropagation(); // impede conflito com o clique no <li>
    removerTarefa(li);
  };

  li.appendChild(botaoRemover);
  document.getElementById('listaTarefas').appendChild(li);
  input.value = '';
}

function removerTarefa(elemento) {
  elemento.remove();
}
