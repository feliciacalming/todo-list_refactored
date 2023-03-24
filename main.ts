import { createHtml } from './src/ts/createHtml';
import { createToDoList } from './src/ts/createToDoList';
import { getFromLocalStorage } from './src/ts/helpers/localStorage';
import type { ToDo } from './src/ts/models/todo';

export const toDoList: ToDo[] = getFromLocalStorage();

createToDoList();
createHtml();
// setCaret();
