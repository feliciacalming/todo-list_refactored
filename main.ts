import { createHtml } from './src/ts/createHtml';
import { createToDoList } from './src/ts/createToDoList';
import { getFromLocalStorage, saveToLocalStorage } from './src/ts/helpers/localStorage';
import type { ToDo } from './src/ts/models/todo';

export const toDoList: ToDo[] = getFromLocalStorage();

createToDoList();
createHtml();
// setCaret();

function sortAlphabetical(): void {
  toDoList.sort((a, b) => {
    const taskA = a.task.toUpperCase();
    const taskB = b.task.toUpperCase();
    if (taskA < taskB) {
      return -1;
    }
    if (taskA > taskB) {
      return 1;
    }

    return 0;
  });

  createToDoList(toDoList);
}

console.log(toDoList);
