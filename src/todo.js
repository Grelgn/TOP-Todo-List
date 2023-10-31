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

const dialog = document.querySelector("#new-todo");
const todoName = document.querySelector("#todo-name");
const todoDescription = document.querySelector("#todo-description");
const todoDueDate = document.querySelector("#todo-due-date");
const todoPriority = document.querySelector("#todo-priority");
const addTodo = document.querySelector("#addTodo");
const b = document.querySelector("#dialog-b");

export function newTodo() {
    const newTodo = document.querySelector(".todo-btn");
    newTodo.addEventListener('click', () => {
        dialog.showModal();
        b.textContent = "New Todo";
        addTodo.textContent = "Add New Todo"
    })
    addTodo.addEventListener('click', () => {
        currentProject.todoArray.push(new ToDo(todoName.value, todoDueDate.value, todoPriority.value, todoDescription.value));
        pageLoad();
    })
}

export function deleteTodo() {
    const button = document.querySelectorAll(".delete-todo");
    let id = 0;
    button.forEach(element => {
        element.id = 'delete' + id;
        id++;
        element.addEventListener('click', () => {
            let index = element.id.charAt(element.id.length - 1);
            currentProject.todoArray.splice(index, 1);
            pageLoad();
        })
    });
}

export function editTodo() {
    const button = document.querySelectorAll(".edit-todo");
    let id = 0;
    button.forEach(element => {
        element.id = 'edit' + id;
        id++;
        element.addEventListener('click', () => {
            dialog.showModal();
            let index = element.id.charAt(element.id.length - 1);
            b.textContent = "Edit Todo";
            addTodo.textContent = "Edit Todo"
            todoName.value = currentProject.todoArray[index].name;
            todoDescription.value = currentProject.todoArray[index].description;
            todoDueDate.value = currentProject.todoArray[index].dueDate;
            todoPriority.value = currentProject.todoArray[index].priority;
            currentProject.todoArray.splice(index, 1);
        })
    });
}