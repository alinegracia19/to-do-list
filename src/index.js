import "./styles.css";
import { Project } from "./project.js";
import { addProject } from "./add-project.js";
import { AddTask } from "./add-task.js";
import { Task } from "./task.js";
import leftArrow from "./left-arrow_10117847.png";


const addProjectBtn = document.getElementById("add-project");
const mainContainer = document.querySelector(".projects-container");

const obj = [];

addProjectBtn.addEventListener("click",() => {
    const modal = new addProject(mainContainer, (name) => {
        const newProject = new Project(name, (project) => {
            renderProjectDetail(project);
        });
        obj.push(newProject);

        localStorage.setItem("myProjects", JSON.stringify(obj));

        newProject.showProject(mainContainer);
    });

    modal.show();
})

const savedData = localStorage.getItem("myProjects");

if(savedData) {
    const parsedData = JSON.parse(savedData);

    parsedData.forEach(item => {
        const loadedProject = new Project(item.projectName, (project) => {
            renderProjectDetail(project);
        });
        loadedProject.tasks = item.tasks.map(t => {
            const realTask = new Task(t.taskDesc, t.dueDate, t.priority);
            realTask.isFinished = t.isFinished;
            return realTask;
        })

        obj.push(loadedProject);
        loadedProject.showProject(mainContainer);
    })
}

function renderProjectDetail(project) {
    mainContainer.innerHTML = "";
    mainContainer.style.display = "block";

    const backContainer = document.createElement("div");
    backContainer.id = "back-container";
    const backIcon = document.createElement("img");
    backIcon.src = leftArrow;
    backContainer.appendChild(backIcon);
    mainContainer.appendChild(backContainer);

    const titleTaskContainer = document.createElement("div");
    titleTaskContainer.id = "title-container";

    const title = document.createElement("h2");
    title.classList.add("title")
    title.textContent = project.projectName;
    titleTaskContainer.appendChild(title);

    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "+ Add Task";
    addTaskBtn.id = "add-task-btn";
    titleTaskContainer.appendChild(addTaskBtn);

    mainContainer.appendChild(titleTaskContainer);

    addTaskBtn.addEventListener("click", () => {
        const modal = new AddTask(mainContainer, (taskDesc, dueDate, priority) => {
            project.addTask(taskDesc, dueDate, priority);
            localStorage.setItem("myProjects", JSON.stringify(obj));
            renderProjectDetail(project);
        });

        modal.show();
        
    })

    project.tasks.forEach(task => {
            task.showTask(mainContainer, () => {
                localStorage.setItem("myProjects", JSON.stringify(obj));
                console.log("saved");
            });
        })
}



