import { ToDo } from '../models/Todo';

export function saveToLocalStorage(toDoList: ToDo[]): void {
  localStorage.setItem('to-do', JSON.stringify(toDoList));
}

export function getFromLocalStorage(): ToDo[] {
  const toDoList = (JSON.parse(localStorage.getItem('to-do') as string) as ToDo[]).map(todo => {
    return new ToDo(todo.task, todo.completed);
  });

  return toDoList;
}
