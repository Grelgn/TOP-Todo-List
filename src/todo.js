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