function addTask() {
  const input = document.getElementById("taskInput");
  const taskInput = input.value.trim();

  if (taskInput === "") {
    alert("Por favor, digite uma tarefa.");
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskInput;

  const removeButton = document.createElement('button');
  removeButton.textContent = "🗑️";

  removeButton.onclick = function () {
    li.remove();
  };

  li.appendChild(removeButton);

  li.onclick = function () {
    li.style.opacity = "0.5";
    li.style.pointerEvents = "none";
    li.style.textDecoration = "line-through";
  };

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
