import { toDoList } from '../../main';
import { checkTodo } from './checkTodo';
import { clearTodos } from './clearTodos';
import { deleteTodo } from './deleteTodo';
import { sortAlphabetical } from './helpers/sortAlphabetical';

const list: HTMLUListElement = document.createElement('ul');
const listContainer: HTMLDivElement = document.getElementById('uncompleted-tasks') as HTMLDivElement;
const clearButton: HTMLButtonElement = document.getElementById('clear-btn') as HTMLButtonElement;
const sortButton: HTMLButtonElement = document.getElementById('sort-btn') as HTMLButtonElement;

export function createToDoList(): void {
  list.innerHTML = '';

  for (let i = 0; i < toDoList.length; i++) {
    const itemContainer = document.createElement('span');
    const task = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteButton = document.createElement('button');

    list.classList.add('list');
    itemContainer.classList.add('list__item__container');

    task.classList.add('list__item');
    task.innerHTML = toDoList[i].task;

    checkbox.classList.add('list__checkbox');
    checkbox.type = 'checkbox';
    checkbox.checked = toDoList[i].completed;

    deleteButton.classList.add('list__deletebutton');
    deleteButton.innerHTML = "<i class='bi bi-trash'></i>";

    checkbox.addEventListener('click', () => {
      checkTodo(checkbox, toDoList[i], task, toDoList);
    });

    deleteButton.addEventListener('click', () => {
      deleteTodo(toDoList, i);
    });

    checkTodo(checkbox, toDoList[i], task, toDoList);

    task.appendChild(checkbox);
    task.appendChild(deleteButton);
    list.appendChild(task);
    listContainer.append(list);
  }

  sortButton.addEventListener('click', sortAlphabetical);
  clearButton.addEventListener('click', clearTodos);
}
