import { projectArray } from ".";
import pageLoad from "./page-load";

export default class Project {
    constructor(name) {
        this.name = name;
        this.todoArray = new Array;
    }

    addTodo(newTodo) {
        this.todoArray.push(newTodo);
    }
}

export function newProject() {
    const dialog = document.querySelector("dialog");
    const newProject = document.querySelector(".sidebar > button");
    newProject.addEventListener('click', () => {
        dialog.showModal();
    })
    const projectName = document.querySelector("#name");
    const addProject = document.querySelector("#addProject");
    addProject.addEventListener('click', () => {
        projectArray.push(new Project(projectName.value));
        pageLoad();
    })
}