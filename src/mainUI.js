function mainComponent() {
    const main = document.createElement('div')
    main.setAttribute('class', 'main')
    main.setAttribute('data', 'project-details')
    const mainHeader = document.createElement('div')
    mainHeader.setAttribute('id', 'header')
    const h1Main = document.createElement('h1')
    h1Main.setAttribute('id','project-title')
    h1Main.setAttribute('data', 'project-title')
    h1Main.innerText = 'Youtube'
    mainHeader.appendChild(h1Main)
    const tasksContainer = document.createElement('div')
    tasksContainer.setAttribute('id', 'tasks_container')
    const tasks = document.createElement('div')
    tasks.setAttribute('class', 'tasks')
    tasks.setAttribute('data','tasks')
    tasksContainer.appendChild(tasks)
    main.appendChild(mainHeader)
    main.appendChild(tasksContainer)
    return main
}

document.body.appendChild(mainComponent())