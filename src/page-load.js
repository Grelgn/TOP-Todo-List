import { project1, todo1 } from ".";

export default function pageLoad() {
    const sidebar = document.querySelector(".sidebar");
    const defaultProject = document.createElement("div");
    defaultProject.classList.add("project");
    defaultProject.textContent = project1.name;
    sidebar.appendChild(defaultProject);

    const content = document.querySelector(".content");
    const currentProject = document.createElement("div");
    currentProject.classList.add("currentProject");
    currentProject.textContent = project1.name;
    content.appendChild(currentProject);

    const defaultTodo = document.createElement("div");
    defaultTodo.classList.add("todo");
    defaultTodo.classList.add(todo1.priority);
    defaultTodo.innerHTML = 
    `<input type="checkbox" class="checkbox">
    <div class="name">${todo1.name}</div>
    <div class="due">${todo1.dueDate}</div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>`;
    content.appendChild(defaultTodo);
}