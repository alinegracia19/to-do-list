export class Task {
    constructor(taskDesc, dueDate, priority) {
        this.taskDesc = taskDesc,
        this.dueDate = dueDate,
        this.priority = priority,
        this.isFinished = false
    }

    showTask(parent, onUpdate) {
        const div = document.createElement("div");
        div.classList.add("task");
        div.innerHTML = `
            <div class="${this.isFinished ? 'completed' : ''}">
                <input type="checkbox" ${this.isFinished ? "checked" : ""}>
                <p>${this.taskDesc}</p>
            </div>
            <p>${this.priority}</p>
            <p>${this.dueDate}</p>
        `;

        const checkbox = div.querySelector('input[type="checkbox"]');
        checkbox.addEventListener("change", () => {
            this.isFinished = checkbox.checked;
            if(typeof onUpdate === "function") onUpdate()
        });

        parent.appendChild(div);
    }
}