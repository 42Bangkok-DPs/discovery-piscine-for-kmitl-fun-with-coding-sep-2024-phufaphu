const todoList = document.getElementById('ft_list');

function updateCookie(value) {
    setCookie('tasks', value);
}
function getCookie(key) {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];

        if (cookie.startsWith(key + "=")) return cookie.substring(key.length + 1);
        return null
    }
}

function setCookie(key, value) {
    document.cookie = `${key} = ${value};`;
}

function loadTasks() {
    const tasks = getCookie('tasks');
    todoList.innerHTML = tasks || '';
    Array.from(todoList.children).forEach(task =>
        task.onclick = () => removeTask(task)
    );
}

function saveTasks() {
    setCookie('tasks', todoList.innerHTML);
}

function addTask() {
    const task = prompt('Enter a new task:');
    if (task) {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.textContent = task;
        taskElement.onclick = () => removeTask(taskElement);
        todoList.insertBefore(taskElement, todoList.firstChild);
        saveTasks();
    }
}

function removeTask(taskElement) {
    if (confirm('Do you want to remove this task?')) {
        taskElement.remove();
        saveTasks();
    }
}

loadTasks();