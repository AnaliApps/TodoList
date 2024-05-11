function sideComponent() {
    const side = document.createElement('div')
    side.setAttribute("class","side")
    const projectHeader = document.createElement('div')
    projectHeader.setAttribute('class',"project_header")
    const h1 = document.createElement('h1');
    h1.innerText = 'My Projects'
    projectHeader.appendChild(h1)
    const projectForm = document.createElement('div')
    projectForm.setAttribute('id','form_project')
    const formForProject = document.createElement('form')
    const formInput = document.createElement('input')
    formInput.setAttribute('type','text')
    formInput.setAttribute('id','form_input')
    formInput.setAttribute('name','form_input')
    formInput.setAttribute('placeholder','Enter project name...')
    const submitButton = document.createElement('button')
    submitButton.setAttribute('type','submit')
    submitButton.setAttribute('id', 'btnAdd')
    submitButton.innerText = 'Add'
    formForProject.appendChild(formInput)
    formForProject.appendChild(submitButton)
    projectForm.appendChild(formForProject)
    const projectsContainer = document.createElement('div')
    projectsContainer.setAttribute('id', 'projects_container')
    const unorderedList = document.createElement('ul')
    unorderedList.setAttribute('class','projects')
    projectsContainer.appendChild(unorderedList)
    side.appendChild(projectHeader)
    side.appendChild(projectForm)
    side.appendChild(projectsContainer)
    return side
}

document.body.appendChild(sideComponent())