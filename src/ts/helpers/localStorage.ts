import { createToDoList } from '../createToDoList';
import { ToDo } from '../models/Todo';

export function saveToLocalStorage(toDoList: ToDo[]): void {
  localStorage.setItem('to-do', JSON.stringify(toDoList));
}

export function getFromLocalStorage(): void {
  const toDoList = (JSON.parse(localStorage.getItem('to-do') as string) as ToDo[]).map(todo => {
    return new ToDo(todo.task, todo.completed);
  });

  createToDoList(toDoList);
}
