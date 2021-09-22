export const tasks = [
  {
    description: 'List structure.',
    completed: false,
    index: 1,
  },
  {
    description: 'Interactive list.',
    completed: false,
    index: 2,
  },
  {
    description: 'Add and remove items.',
    completed: false,
    index: 3,
  },
];

const taskList = document.querySelector('.task-container .tasks');

export const getTask = (task) => {
    taskList.innerHTML += `<li class="book">
    <span class="left">
      <input id=${task.index} type="checkbox" />
      <label for=${task.index}>${task.description}</label>
    </span>
    <span class="right">
      <i class="fas fa-ellipsis-v"></i>
    </span>
  </li>`;
  // return taskList;
};




  