import { saveToLocalStorage } from './helpers/localStorage';
import type { ToDo } from './models/Todo';

export function checkTodo(checkbox: HTMLInputElement, todo: ToDo, task: HTMLLIElement, toDoList: ToDo[]): void {
  if (checkbox.checked) {
    todo.completed = true;
    task.classList.add('list__item--completed');
  } else {
    todo.completed = false;
    task.classList.remove('list__item--completed');
  }
  saveToLocalStorage(toDoList);
}
