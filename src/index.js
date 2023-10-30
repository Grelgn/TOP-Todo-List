import Project, { newProject } from "./project";
import ToDo, { newTodo } from "./todo";
import pageLoad from "./page-load";

export const project1 = new Project("Default Project");
export const todo1 = new ToDo("Default Todo", "2023-10-31", "high", "This is the default todo");

export let projectArray = new Array;
export let currentProject = project1;

project1.addTodo(todo1);
projectArray.push(project1);

pageLoad();
newProject();
newTodo();