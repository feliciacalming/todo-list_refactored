import { addTodo } from './addTodo';

const userInput: HTMLInputElement = document.getElementById('user-input') as HTMLInputElement;
const inputButton: HTMLButtonElement = document.getElementById('input-btn') as HTMLButtonElement;

export function handleInput(): void {
  userInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      addTodo(userInput.value);
      userInput.value = '';
    }
  });

  inputButton.addEventListener('click', () => {
    addTodo(userInput.value);
    userInput.value = '';
  });
}
