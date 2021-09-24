/* eslint-disable import/extensions */
import './style.css';
import sortItems from './utils.js';
import tasks from './data';
import completedTask from './controllers.js';
import storage from './storage.js';

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
      if (!change) {
        box.classList.add('active');
        icon.classList.remove('fas', 'fa-ellipsis-v');
        icon.classList.add('far', 'fa-trash-alt');
        change = true;
      } else {
        box.classList.remove('active');
        icon.classList.remove('far', 'fa-trash-alt');
        icon.classList.add('fas', 'fa-ellipsis-v');
        change = false;
      }
    });
  });
};
let getTasks;

(function setTaks() {
  if (!storage.getItem()) {
    storage.setItem(tasks);
    getTasks = storage.getItem();
  }
  getTasks = storage.getItem();
}());

window.onload = () => {
  const sortedTasks = sortItems(getTasks);
  sortedTasks.forEach((task) => {
    getTask(task);
  });
};
