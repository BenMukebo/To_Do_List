import { getTask, tasks } from './data';

window.onload = () => {
  tasks.forEach(task => {
    getTask(task);
  });
}








