import './sideUI'
import './mainUI'
import './addUI'
import './deleteUI'
import './style.css'
class Project{
    constructor(name,tasks){
        this.id = Math.floor(Math.random()*1000000)
        this._name=name;
        this._tasks = tasks;
    }
}
class TodoTasks{
    constructor(title,desc,duedate,priority){
        this.id = Math.floor(Math.random()*1000000)
        this._title = title;
        this._desc = desc;
        this._duedate = duedate;
        this._priority = priority;
    }
}
let LOCAL_STORAGE_TODO_LIST_KEY = 'todoProjects.lists'
let projectList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO_LIST_KEY)) || []
const LOCAL_STORAGE_TODO_SELECTED_LIST_KEY = 'todoSelectedListId'
let selectedListId = localStorage.getItem(LOCAL_STORAGE_TODO_SELECTED_LIST_KEY);

let show_task_form = document.querySelector("#show_task_form");
let submit_btn = document.querySelector("#submit_btn");
let formProjectInput = document.querySelector("#form_input")
let projectForm = document.querySelector("#form_project")
let projects = document.querySelector(".projects")
let projectContainer = document.querySelector('.main')
let projectTitle = document.querySelector('#project-title')
let deleteProjects = document.querySelector(".delete_projects")
let taskContainer = document.querySelector("#tasks_container")
let tasks = document.querySelector(".tasks")
let taskForm = document.querySelector("#form_task")
let taskTitle = document.querySelector("#title_input_task")
let taskDesc = document.querySelector("#input_desc")
let taskDueDate = document.querySelector('#input_duedate')
let taskPriority = document.querySelector('#selectPriority')

show_task_form.addEventListener("click",()=>{
    document.querySelector("#form_task").classList.remove("hide")
    show_task_form.classList.add("hide")
})

submit_btn.addEventListener("click",e=>{
    show_task_form.classList.remove("hide")
    document.querySelector("#form_task").classList.add("hide")
})

deleteProjects.addEventListener('click',()=>{
    projectList = projectList.filter(list=> list.id !== parseInt(selectedListId))
    selectedListId = null
    saveAndDisplay()
})
projects.addEventListener("click",e=>{
    if(e.target.tagName.toLowerCase() === "li"){
         selectedListId = e.target.dataset.listId
        saveAndDisplay()
    }
})

projectForm.addEventListener('submit',e=>{
    e.preventDefault()
    if(formProjectInput.value == null || formProjectInput.value == ''){
        return 
    }
    let formInputValue = formProjectInput.value
    let newProject = new Project(formInputValue,[])
    projectList = [...projectList,newProject]
    saveAndDisplay()
    console.log(projectList)
    formProjectInput.value = ''
})

taskForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    if((taskTitle.value == null || taskTitle == '')||(taskDesc.value ==null||taskDesc=='')||(taskDueDate.value ==null || taskDueDate == '')||(taskPriority.value ==null||taskPriority=='')){
        return
    }
    let newTask = new TodoTasks(taskTitle.value,taskDesc.value,taskDueDate.value,taskPriority.value)
    const selectedList = projectList.find(item=>item.id===parseInt(selectedListId))
    selectedList._tasks = [...selectedList._tasks, newTask]
    saveAndDisplay()
    console.log(selectedList)
    taskTitle.value = ''
    taskDesc.value = ''
    taskDueDate.value = ''
})
function renderAllProjects(){
    projectList.forEach(item=>{
        let element = document.createElement('li')
        element.dataset.listId = item.id;
        element.classList.add("list-name")
        element.innerText = item._name
        if(item.id === parseInt(selectedListId)){
            element.setAttribute("class","active-list")
        }
        projects.appendChild(element)
    })
}
function saveAndDisplay(){
    save()
    displayProjects()
}
function save(){
    localStorage.setItem(LOCAL_STORAGE_TODO_LIST_KEY, JSON.stringify(projectList))
    localStorage.setItem(LOCAL_STORAGE_TODO_SELECTED_LIST_KEY, selectedListId)
}
function displayProjects(){
    clearElement(projects)
    renderAllProjects()
    const selectedList = projectList.find(item=>item.id===parseInt(selectedListId))
    if(selectedListId == null){
        projectContainer.style.display = 'none'
    }else{
        projectContainer.style.display = ''
        projectTitle.innerText = selectedList._name
        clearElement(taskContainer);
        console.log(selectedList)
        renderTasks(selectedList)
    }
}

function renderTasks(selectedList){
    selectedList._tasks.forEach(task=>{
         const taskElement = document.createElement("div");
         taskElement.setAttribute("class","task")
         const taskContent = document.createElement("div");
        let taskCheckBox = document.createElement("input")
        taskCheckBox.setAttribute("type","checkbox")
        let taskHeader = document.createElement("h3")
        taskHeader.textContent = task._title;
        let taskDesc = document.createElement("p");
        taskDesc.textContent = task._desc;
        let taskDueDate = document.createElement("h4");
        taskDueDate.textContent = task._duedate;
        let taskPriority = document.createElement("h3");
        taskPriority.textContent = task._priority;
        taskElement.appendChild(taskCheckBox)
        taskContent.appendChild(taskHeader)
        taskContent.appendChild(taskDesc)
        taskContent.appendChild(taskDueDate)
        taskContent.appendChild(taskPriority)
        taskElement.appendChild(taskContent)
        taskContainer.appendChild(taskElement)
        console.log(taskContainer)
    })
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}
console.log(displayProjects())

