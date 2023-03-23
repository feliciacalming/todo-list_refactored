import { addTodo } from './addTodo';

export function createHtml(): void {
  const userInput: HTMLInputElement = document.getElementById('user-input') as HTMLInputElement;
  const inputContainer: HTMLDivElement = document.getElementById('input-container') as HTMLDivElement;
  const inputButton: HTMLButtonElement = document.createElement('button');

  const list: HTMLUListElement = document.createElement('ul');
  const listContainer: HTMLDivElement = document.getElementById('uncompleted-tasks') as HTMLDivElement;
  listContainer.classList.add('list-container');

  const sortButton: HTMLButtonElement = document.getElementById('sort-btn') as HTMLButtonElement;
  const clearButton: HTMLButtonElement = document.getElementById('clear-btn') as HTMLButtonElement;

  inputButton.classList.add('input__button');

  inputButton.innerHTML = '+';
  inputButton.addEventListener('click', () => {
    addTodo(userInput, userInput.value);
  });
  //   sortButton.addEventListener('click', sortAlphabetical);

  inputContainer.appendChild(inputButton);

  //   clearButton.addEventListener('click', () => {
  //     localStorage.clear();
  //     list.innerHTML = '';
  //     saveToLocalStorage(toDoList);
  //   });

  //   userInput.addEventListener('keypress', e => {
  //     if (e.key === 'Enter') {
  //       addTodo();
  //     }
  //   });
}

// export function setCaret(): void {
//   userInput.select();
//   userInput.setSelectionRange(userInput.value.length, userInput.value.length);
// }
