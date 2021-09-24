import './style.css';
import sortItems from './utils.js';
// import tasks from './data.js';
import completedTask from './controllers.js';
import storage from './storage.js';

const tasks = storage.getItem();
// console.log(tasks);
const taskList = document.querySelector('.task-list');

const getTask = (task) => {
  taskList.innerHTML += `<li class="book d-flex flex-center">
    <span class="left d-flex flex-center">
      <input class="checkbox" id=${task.index} type="checkbox" /> 
      <input class="editInput" type="text" value="${task.description}" /> 
      <label class="title" for=${task.index}.>${task.description}</label>
    </span>
    <span class="right">
      <i class="fas fa-ellipsis-v"></i>
    </span>
  </li>`;

  const books = document.querySelectorAll('.book');
  // console.log(books)

  books.forEach((box, index) => {
    const checkBox = box.querySelector('.checkbox');
    const inputEdit = box.querySelector('.editInput');
    const label = box.querySelector('.title');
    const icon = box.querySelector('.right i');
    let state = false;
    let change = false;

    // Check box action

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

    // Icons action

    icon.addEventListener('click', () => {
      const indexBox = checkBox.id;
      if (!change) {
        box.classList.add('active');
        icon.classList.remove('fas', 'fa-ellipsis-v');
        icon.classList.add('far', 'fa-trash-alt');

        inputEdit.style.display = 'flex';
        label.style.display = 'none';
        change = true;
      } else {
        // Function for deleting a new task

        const getTasks = storage.getItem();
        const sortedTasks = sortItems(getTasks);
        const filterTasks = sortedTasks.filter((book) => book.index.toString() !== indexBox);
        // console.log(taskList.innerHTM);
        storage.setItem(filterTasks);
        taskList.innerHTML = '';
        filterTasks.forEach((task) => {
          getTask(task);
        });
      }
    });

    // Function for editing task descriptions.

    inputEdit.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const { value } = inputEdit;
        console.log(value);
        tasks.forEach((task, ind) => {
          if (index === ind) {///////
            task.description = value;
            tasks.splice(ind, 1, task);
            storage.setItem(tasks);
            box.classList.remove('active');
            icon.classList.remove('far', 'fa-trash-alt');
            icon.classList.add('fas', 'fa-ellipsis-v');

            inputEdit.style.display = 'none';
            label.style.display = 'flex';
            window.location.reload();
          }
          return false;
        });
      }
    });
  });
};

let getTasks;
console.log('heiaaoiuhewiuhgoiugfhesgoahgewiuoh');
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

// Function for adding a new task

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const enterTask = document.querySelector('#task-input');
  if (enterTask === '') return;

  const getTasks = storage.getItem() || [];
  const sortedTasks = sortItems(getTasks);
  let index = sortedTasks.length;
  index += 1;
  const newTask = new Task(enterTask.value, index);
  // console.log(newTask);

  sortedTasks.push(newTask);
  storage.setItem(sortedTasks);

  getTask(newTask);
  enterTask.value = '';
});

