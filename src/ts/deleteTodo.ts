import { createToDoList } from './createToDoList';
import { saveToLocalStorage } from './helpers/localStorage';
import type { ToDo } from './models/Todo';

export function deleteTodo(toDoList: ToDo[], index: number): void {
  toDoList.splice(index, 1);
  saveToLocalStorage(toDoList);
  createToDoList();
}
