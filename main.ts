import { createToDoList } from './src/ts/createToDoList';
import { getFromLocalStorage, saveToLocalStorage } from './src/ts/helpers/localStorage';
import { ToDo } from './src/ts/models/todo';

export const toDoList: ToDo[] = [];

const userInput: HTMLInputElement = document.getElementById('user-input') as HTMLInputElement;
const inputContainer: HTMLDivElement = document.getElementById('input-container') as HTMLDivElement;
const inputButton: HTMLButtonElement = document.createElement('button');
const sortButton: HTMLButtonElement = document.getElementById('sort-btn') as HTMLButtonElement;
const clearButton: HTMLButtonElement = document.getElementById('clear-btn') as HTMLButtonElement;

inputButton.classList.add('input__button');

inputButton.innerHTML = '+';
inputButton.addEventListener('click', addTodo);
sortButton.addEventListener('click', sortAlphabetical);

clearButton.addEventListener('click', () => {
  localStorage.clear();
  list.innerHTML = '';
  saveToLocalStorage(toDoList);
});

createToDoList(toDoList);
setCaret();
getFromLocalStorage();

function setCaret(): void {
  userInput.select();
  userInput.setSelectionRange(userInput.value.length, userInput.value.length);
}

console.log(toDoList);

function addTodo(): void {
  const newToDo = new ToDo(userInput.value, false);
  toDoList.push(newToDo);
  saveToLocalStorage(toDoList);
  userInput.value = '';
  createToDoList(toDoList);
}

userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

function sortAlphabetical(): void {
  toDoList.sort((a, b) => {
    const taskA = a.task.toUpperCase();
    const taskB = b.task.toUpperCase();
    if (taskA < taskB) {
      return -1;
    }
    if (taskA > taskB) {
      return 1;
    }

    return 0;
  });

  createToDoList(toDoList);
}

inputContainer.appendChild(inputButton);

console.log(toDoList);
