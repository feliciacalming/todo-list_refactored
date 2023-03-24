import { toDoList } from '../../main';
import { createToDoList } from './createToDoList';

export function clearTodos(): void {
  localStorage.clear();
  toDoList.splice(0, toDoList.length);
  createToDoList();
}
