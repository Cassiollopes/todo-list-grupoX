function adicionarTarefa() {
  const input = document.getElementById('novaTarefa');
  const textoTarefa = input.value.trim();

  if (textoTarefa === '') {
    alert('Por favor, digite uma tarefa.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = textoTarefa;

  document.getElementById('listaTarefas').appendChild(li);
  input.value = '';
}