import { BaseModal } from "./base-modal.js";

export class AddTask extends BaseModal{
    constructor(parent, onSave) {
        super(parent, onSave),
        this.render();
    }

    render() {
        this.dialog.innerHTML = `
            <form>
                <label for="task-desc">Your Task</label>
                <input type="text" id="task-desc" name="task-desc" maxlength="150">
                <label for="due-date">Due Date</label>
                <input type="date" id="due-date">
                <label for="priority">Priority</label>
                <select id="priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="top">Top</option>
                </select>
                <button type="button" id="save-task">Save</button>
                <button type="button" id="cancel-task">Cancel</button>
            </form>
        `;

        const taskDescEl = this.dialog.querySelector("#task-desc");
        const dueDateEl = this.dialog.querySelector("#due-date");
        const priorityEl = this.dialog.querySelector("#priority");
        const saveTaskBtn = this.dialog.querySelector("#save-task");
        const cancelBtn = this.dialog.querySelector("#cancel-task");

        saveTaskBtn.addEventListener("click", () => {
            const taskDesc = taskDescEl.value;
            const dueDate = dueDateEl.value;
            const priority = priorityEl.value;
            if(taskDesc !== "" && dueDate !== "" && priority !== "") {
                this.onSave(taskDesc, dueDate, priority);
                this.close();
            } else {
                alert("Please enter valid input");
            }
        });

        cancelBtn.addEventListener("click", () => {
            this.close();
        });
    }
}