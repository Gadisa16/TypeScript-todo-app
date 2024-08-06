const form = document.getElementById('todo-form');
const input = document.getElementById('new-task');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(input.value);
  input.value = '';
});

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    deleteTask(e.target.parentElement);
  } else if (e.target.classList.contains('edit')) {
    editTask(e.target.parentElement);
  }
});

function addTask(task) {
  if (task.trim() === '') return;
  const li = document.createElement('li');
  li.innerHTML = `
    ${task}
    <span class="edit">Edit</span>
    <span class="delete">Delete</span>
  `;
  list.appendChild(li);
}

function deleteTask(taskElement) {
  list.removeChild(taskElement);
}

function editTask(taskElement) {
  const newTask = prompt('Edit your task', taskElement.firstChild.textContent.trim());
  if (newTask.trim() !== '') {
    taskElement.firstChild.textContent = newTask;
  }
}
