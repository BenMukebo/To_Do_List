import './style.css';
import { getTask, sortedTasks } from './data.js';

window.onload = () => {
  sortedTasks.forEach((task) => {
    getTask(task);
  });
};
