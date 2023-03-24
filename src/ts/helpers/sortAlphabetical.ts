import { toDoList } from '../../../main';
import { createToDoList } from '../createToDoList';

export function sortAlphabetical(): void {
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

  createToDoList();
}
