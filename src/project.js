import { currentProject, projectArray } from ".";
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
    const dialog = document.querySelector("#new-project");
    const newProject = document.querySelector(".sidebar > button");
    newProject.addEventListener('click', () => {
        dialog.showModal();
    })
    const projectName = document.querySelector("#project-name");
    const addProject = document.querySelector("#addProject");
    addProject.addEventListener('click', () => {
        projectArray.push(new Project(projectName.value));
        pageLoad();
    })
}

export function switchProject() {
    const projects = document.querySelectorAll(".project");
    let id = 0;
    projects.forEach(element => {
        element.id = 'project' + id;
        id++;
        element.addEventListener('click', () => {
            currentProject = projectArray[element.id.charAt(element.id.length - 1)];
            pageLoad();
        })
    });
}

export function deleteProject() {
    const button = document.querySelector(".delete-project");
    button.addEventListener('click', () => {
        const index = projectArray.indexOf(currentProject);
        projectArray.splice(index, 1);
        pageLoad();
        const todos = document.querySelector(".todos");
        todos.innerHTML = "";
    })
}