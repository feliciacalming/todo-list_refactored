import { createToDoList } from './src/ts/createToDoList';
import { ToDo } from './src/ts/models/todo';
let toDoList: ToDo[] = [];

const userInput: HTMLInputElement = document.getElementById('user-input') as HTMLInputElement;
const inputContainer: HTMLDivElement = document.getElementById('input-container') as HTMLDivElement;
const inputButton: HTMLButtonElement = document.createElement('button');
// const listContainer: HTMLDivElement = document.getElementById('uncompleted-tasks') as HTMLDivElement; // måste ligga utanför loopen, annars blir det två div:ar
const sortButton: HTMLButtonElement = document.getElementById('sort-btn') as HTMLButtonElement;
// const list: HTMLUListElement = document.createElement('ul');
const clearButton: HTMLButtonElement = document.getElementById('clear-btn') as HTMLButtonElement;

inputButton.classList.add('input__button');
// listContainer.classList.add('list-container');

inputButton.innerHTML = '+';
inputButton.addEventListener('click', addTodo);
sortButton.addEventListener('click', sortAlphabetical);

clearButton.addEventListener('click', () => {
  localStorage.clear();
  list.innerHTML = '';
  localStorage.setItem('to-do', JSON.stringify(toDoList));
});

createToDoList(toDoList);
setCaret();

window.addEventListener('load', () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  toDoList = JSON.parse(localStorage.getItem('to-do') as string).map((task: { task: string; completed: boolean }) => {
    return new ToDo(task.task, task.completed);
  });

  createToDoList(toDoList);
});

function setCaret(): void {
  userInput.select();
  userInput.setSelectionRange(userInput.value.length, userInput.value.length);
}

console.log(toDoList);

function addTodo(): void {
  const newToDo = new ToDo(userInput.value, false);
  toDoList.push(newToDo);
  console.log(toDoList);
  localStorage.setItem('to-do', JSON.stringify(toDoList));
  userInput.value = '';
  createToDoList(toDoList);
}

userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

// function createToDoList(): void {
//   list.innerHTML = '';
//   for (let i = 0; i < toDoList.length; i++) {
//     const itemContainer = document.createElement('span');
//     const task = document.createElement('li');
//     const checkbox = document.createElement('input');
//     const deleteButton = document.createElement('button');

//     list.classList.add('list');
//     itemContainer.classList.add('list__item__container');
//     task.classList.add('list__item');
//     checkbox.classList.add('list__checkbox');
//     deleteButton.classList.add('list__deletebutton');

//     task.innerHTML = toDoList[i].task;

//     checkbox.type = 'checkbox';
//     checkbox.checked = toDoList[i].completed;
//     checkbox.addEventListener('click', () => {
//       if (checkbox.checked) {
//         toDoList[i].completed = true;
//         task.classList.add('list__item--completed');
//       } else {
//         toDoList[i].completed = false;
//         task.classList.remove('list__item--completed');
//       }
//       localStorage.setItem('to-do', JSON.stringify(toDoList));
//     });

//     deleteButton.innerHTML = "<i class='bi bi-trash'></i>";
//     deleteButton.addEventListener('click', () => {
//       toDoList.splice(i, 1);
//       localStorage.setItem('to-do', JSON.stringify(toDoList));
//       createToDoList();
//     });

//     task.appendChild(checkbox);
//     task.appendChild(deleteButton);
//     list.appendChild(task);
//     listContainer.append(list);
//   }
// }

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
