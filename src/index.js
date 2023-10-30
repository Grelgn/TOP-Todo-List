import Project from "./project";
import ToDo from "./todo";
import pageLoad from "./page-load";

export const project1 = new Project("Default Project");
export const todo1 = new ToDo("Default Todo", "31/10/2023", "high", "This is the default todo");

project1.addTodo(todo1);

console.log(project1);

pageLoad();