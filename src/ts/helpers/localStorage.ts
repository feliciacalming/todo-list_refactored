import type { ToDo } from '../models/Todo';

export function saveToLocalStorage(toDoList: ToDo[]): void {
  localStorage.setItem('to-do', JSON.stringify(toDoList));
}
