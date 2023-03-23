import { checkTodo } from './checkTodo';
import type { ToDo } from './models/Todo';

const list: HTMLUListElement = document.createElement('ul');
const listContainer: HTMLDivElement = document.getElementById('uncompleted-tasks') as HTMLDivElement;
listContainer.classList.add('list-container');

export function createToDoList(toDoList: ToDo[]): void {
  list.innerHTML = '';
  for (let i = 0; i < toDoList.length; i++) {
    const itemContainer = document.createElement('span');
    const task = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteButton = document.createElement('button');

    list.classList.add('list');
    itemContainer.classList.add('list__item__container');
    task.classList.add('list__item');
    checkbox.classList.add('list__checkbox');
    deleteButton.classList.add('list__deletebutton');

    task.innerHTML = toDoList[i].task;

    checkbox.type = 'checkbox';
    checkbox.checked = toDoList[i].completed;

    checkbox.addEventListener('click', () => {
      checkTodo(checkbox, toDoList[i], task, toDoList);
    });

    deleteButton.innerHTML = "<i class='bi bi-trash'></i>";
    deleteButton.addEventListener('click', () => {
      toDoList.splice(i, 1);
      localStorage.setItem('to-do', JSON.stringify(toDoList));
      createToDoList(toDoList);
    });

    task.appendChild(checkbox);
    task.appendChild(deleteButton);
    list.appendChild(task);
    listContainer.append(list);
  }
}
