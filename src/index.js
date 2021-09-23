import './style.css';
import sortItems from './utils.js';
import tasks from './data.js';
import completedTask from './controllers.js';
import storage from './storage.js';

const taskList = document.querySelector('.task-list');
let checkBoxes;
const getTask = (task) => {
  taskList.innerHTML += `<li class="book d-flex flex-center">
    <span class="left">
      <input class="checkbox" id=${task.index} type="checkbox" />
      <label for=${task.index}>${task.description}</label>
    </span>
    <span class="right">
      <i class="fas fa-ellipsis-v"></i>
    </span>
  </li>`;
  checkBoxes = document.querySelectorAll('.checkbox');
  checkBoxes.forEach((box) => {
    box.addEventListener('click', () => {
      // console.log(typeof box.id);
      completedTask(box.id);
    });
  });
};

window.onload = () => {
  storage.setItem(tasks);
  const getTasks = storage.getItem();
  const sortedTasks = sortItems(getTasks);
  // console.log(sortedTasks);
  sortedTasks.forEach((task) => {
    getTask(task);
  });
};

// console.log(completedTask(1));