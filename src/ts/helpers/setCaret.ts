const userInput: HTMLInputElement = document.getElementById('user-input') as HTMLInputElement;

export function setCaret(): void {
  userInput.select();
  userInput.setSelectionRange(userInput.value.length, userInput.value.length);
}
