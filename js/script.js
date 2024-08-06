var form = document.getElementById('todo-form');
var input = document.getElementById('new-task');
var list = document.getElementById('todo-list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    addTask(input.value);
    input.value = '';
});
list.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        deleteTask(e.target.parentElement);
    }
    else if (e.target.classList.contains('edit')) {
        editTask(e.target.parentElement);
    }
});
function addTask(task) {
    if (task.trim() === '')
        return;
    var li = document.createElement('li');
    li.innerHTML = "\n    ".concat(task, "\n    <span class=\"edit\">Edit</span>\n    <span class=\"delete\">Delete</span>\n  ");
    list.appendChild(li);
}
function deleteTask(taskElement) {
    list.removeChild(taskElement);
}
function editTask(taskElement) {
    var newTask = prompt('Edit your task', taskElement.firstChild.textContent.trim());
    if (newTask.trim() !== '') {
        taskElement.firstChild.textContent = newTask;
    }
}
