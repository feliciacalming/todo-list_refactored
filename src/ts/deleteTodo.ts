import { createToDoList } from './createToDoList';
import type { ToDo } from './models/Todo';

export function deleteTodo(toDoList: ToDo[], index: number): void {
  toDoList.splice(index, 1);
  localStorage.setItem('to-do', JSON.stringify(toDoList));
  createToDoList(toDoList);
}
