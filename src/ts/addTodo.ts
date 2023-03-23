import { toDoList } from '../../main';
import { createToDoList } from './createToDoList';
import { saveToLocalStorage } from './helpers/localStorage';
import { ToDo } from './models/Todo';

export function addTodo(userInput: HTMLInputElement, inputvalue: string): void {
  const newToDo: ToDo = new ToDo(inputvalue, false);
  toDoList.push(newToDo);
  saveToLocalStorage(toDoList);
  createToDoList();
  userInput.value = '';
}
