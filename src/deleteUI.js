function deleteComponent() {
    const divDel = document.createElement('div')
    divDel.setAttribute('class', 'delete_projects')
    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'btn')
    deleteButton.setAttribute('class', 'delete')
    deleteButton.setAttribute('data', 'delete-list-btn')
    deleteButton.innerText = 'Delete Project'
    divDel.appendChild(deleteButton)
    return divDel
}

document.body.appendChild(deleteComponent())