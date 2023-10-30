export default class Project {
    constructor(name) {
        this.name = name;
        this.todoArray = new Array;
    }

    addTodo(newTodo) {
        this.todoArray.push(newTodo);
    }
}