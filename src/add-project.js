import { BaseModal } from "./base-modal.js"


export class addProject extends BaseModal {
    constructor(parent, onSave) {
        super(parent, onSave);
        this.render();
    }

    render() {
        this.dialog.innerHTML = `
            <form>
                <label for="project-name">New Project</label>
                <input type="text" id="project-name" maxlength="50">
                <button type="button" id="save-project">Save</button>
                <button type="button" id="close-btn">Cancel</button>
            </form>
        `;

        const saveBtn = this.dialog.querySelector("#save-project");
        const inputEl = this.dialog.querySelector("#project-name");
        const cancel = this.dialog.querySelector("#close-btn");

        saveBtn.addEventListener("click", () => {
            if (inputEl.value !== "") {
                this.onSave(inputEl.value);
                this.close();
            }
        })

        cancel.addEventListener("click", () => {
            this.close();
        })
    }
}