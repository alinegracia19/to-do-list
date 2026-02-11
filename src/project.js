import { Task } from "./task.js";
import fileIcon from "./folder.png";

export class Project {
    constructor(projectName, onSelect) {
        this.projectName = projectName,
        this.tasks = [],
        this.onSelect = onSelect,
        this.projectEl = document.createElement("div")
    }

    addTask(taskDesc, dueDate, priority) {
        const newTask = new Task(taskDesc, dueDate, priority);
        this.tasks.push(newTask);
    }

    showProject(parent) {
        this.projectEl.innerHTML= `
            <img src="${fileIcon}">
            <p>${this.projectName}</p>
        `;

        this.projectEl.addEventListener("click", () => {
            this.onSelect(this);
        });

        parent.insertBefore(this.projectEl, parent.firstChild);
    }
}