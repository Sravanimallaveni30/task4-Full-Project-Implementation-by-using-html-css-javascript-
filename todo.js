const taskInput = document.getElementById('task');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('todoList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function render() {
  list.innerHTML = '';
  tasks.forEach((t, i) => {
    const li = document.createElement('li');
    li.className = 'todo-item' + (t.completed ? ' completed' : '');

    const span = document.createElement('span');
    span.textContent = t.text;

    const actions = document.createElement('div');
    const toggle = document.createElement('button');
    toggle.textContent = t.completed ? 'Undo' : 'Done';
    const del = document.createElement('button');
    del.textContent = 'Delete';

    actions.append(toggle, del);
    li.append(span, actions);

    toggle.onclick = () => {
      tasks[i].completed = !tasks[i].completed;
      save();
      render();
    };

    del.onclick = () => {
      tasks.splice(i, 1);
      save();
      render();
    };
list.append(li);
  });
}

addBtn.onclick = () => {
  if (taskInput.value.trim()) {
    tasks.push({ text: taskInput.value.trim(), completed: false });
    taskInput.value = '';
    save();
    render();
  }
};

render();