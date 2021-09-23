import sortItems from './utils.js';
import storage from './storage.js';

const completedTask = (id) => {
  const getTasks = storage.getItem();
  const sortedTasks = sortItems(getTasks);
  sortedTasks.forEach((task) => {
    if (task.index.toString() === id) {
      task.completed = !task.completed;
    }
  });
  storage.setItem(sortedTasks);
};

export default completedTask;
