import { handleInput } from './src/ts/handleInput';
import { createToDoList } from './src/ts/createToDoList';
import { getFromLocalStorage } from './src/ts/helpers/localStorage';
import type { ToDo } from './src/ts/models/todo';
import { setCaret } from './src/ts/helpers/setCaret';

export const toDoList: ToDo[] = getFromLocalStorage();

export function init(): void {
  handleInput();
  createToDoList();
  setCaret();
}

init();
