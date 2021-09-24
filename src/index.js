import './style.css';
import sortItems from './utils.js';
// import tasks from './data.js';
import completedTask from './controllers.js';
import storage from './storage.js';

const tasks = [];
const taskList = document.querySelector('.task-list');

const getTask = (task) => {
  taskList.innerHTML += `<li class="book d-flex flex-center">
    <span class="left">
      <input class="checkbox" id=${task.index} type="checkbox" />
      <label class="title" for=${task.index}>${task.description}</label>
    </span>
    <span class="right">
      <i class="fas fa-ellipsis-v"></i>
    </span>
  </li>`;

  const books = document.querySelectorAll('.book');
  // console.log(books)

  books.forEach((box) => {
    const checkBox = box.querySelector('.checkbox');
    const label = box.querySelector('.title');
    const icon = box.querySelector('.right i');

    let state = false;
    checkBox.addEventListener('click', () => {
      if (!state) {
        label.classList.add('compeleted');
        state = true;
      } else {
        label.classList.remove('compeleted');
        state = false;
      }
      const taskId = checkBox.id;
      completedTask(taskId);
    });

    let change = false;
    icon.addEventListener('click', () => {
      const indexBox = checkBox.id;
      console.log('book Index:', indexBox);
      if (!change) {
        box.classList.add('active');
        icon.classList.remove('fas', 'fa-ellipsis-v');
        icon.classList.add('far', 'fa-trash-alt');
        change = true;
      }
    });
  });
};

let getTasks;

(function setTaks() {
  if (!storage.getItem()) {
    storage.setItem(tasks);
    getTasks = storage.getItem();
  } else {
    getTasks = storage.getItem();
  }
}());

window.onload = () => {
  const sortedTasks = sortItems(getTasks);
  sortedTasks.forEach((task) => {
    getTask(task);
  });
};

class Task {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}
