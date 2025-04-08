function addTask() {
  const input = document.getElementById("taskInput");
  const taskInput = input.value.trim();

  if (taskInput === "") {
    alert("Por favor, digite uma tarefa.");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskInput;

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}