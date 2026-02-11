export class BaseModal {
    constructor(parent, onSave) {
        this.parent = parent,
        this.onSave = onSave,
        this.dialog = document.createElement("dialog");
    }

    show() {
        this.parent.appendChild(this.dialog);
        this.dialog.showModal();
    }

    close() {
        this.dialog.close();
        this.dialog.remove();
    }
}