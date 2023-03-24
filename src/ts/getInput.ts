import { addTodo } from './addTodo';

export function getInput(): void {
  const userInput: HTMLInputElement = document.getElementById('user-input') as HTMLInputElement;
  const inputButton: HTMLButtonElement = document.getElementById('input-btn') as HTMLButtonElement;

  inputButton.addEventListener('click', () => {
    addTodo(userInput.value);
  });
}
