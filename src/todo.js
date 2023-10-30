import { currentProject } from ".";
import pageLoad from "./page-load";

export default class ToDo {
    constructor(name, dueDate, priority, description) {
        this.name = name;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
        this.checked = false;
    }

    check() {
        this.checked == false ? this.checked = true : this.checked = false;
    }
}

export function newTodo() {
    const dialog = document.querySelector("#new-todo");
    const newTodo = document.querySelector(".todo-btn");
    newTodo.addEventListener('click', () => {
        dialog.showModal();
    })
    const todoName = document.querySelector("#todo-name");
    const todoDescription = document.querySelector("#todo-description");
    const todoDueDate = document.querySelector("#todo-due-date");
    const todoPriority = document.querySelector("#todo-priority");
    const addTodo = document.querySelector("#addTodo");
    addTodo.addEventListener('click', () => {
        currentProject.todoArray.push(new ToDo(todoName.value, todoDueDate.value, todoPriority.value, todoDescription.value));
        pageLoad();
    })
}