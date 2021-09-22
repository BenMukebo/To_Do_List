import { getTask, sortedTasks } from './data';

window.onload = () => {
console.log(sortedTasks);
 sortedTasks.forEach(task => {
    getTask(task);
  });
};





