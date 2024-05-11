function addComponent() {
    const taskAdd = document.createElement('div')
    taskAdd.setAttribute('class', 'task_add')
    const divButton = document.createElement('div')
    const showButton = document.createElement('button')
    showButton.setAttribute('id', 'show_task_form')
    showButton.innerText = 'Add Task'
    divButton.appendChild(showButton)
    const taskForm = document.createElement('div')
    taskForm.setAttribute('class', 'task_form')
    const formOfTask = document.createElement('form')
    formOfTask.setAttribute('id', 'form_task')
    formOfTask.setAttribute('class','hide')
    const titleInputTask = document.createElement('input')
    titleInputTask.setAttribute('type', 'text')
    titleInputTask.setAttribute('id', 'title_input_task')
    titleInputTask.setAttribute('name', 'title_input_task')
    titleInputTask.setAttribute('placeholder', 'Enter task name...')
    const inputDescription = document.createElement('textarea')
    inputDescription.setAttribute('id', 'input_desc')
    inputDescription.setAttribute('placeholder', 'Describe your task...')
    inputDescription.setAttribute('rows', 10)
    const inputDueDate = document.createElement('input')
    inputDueDate.setAttribute('type', 'date')
    inputDueDate.setAttribute('id', 'input_duedate')
    inputDueDate.setAttribute('name', 'input_duedate')
    const selectPriority = document.createElement('select')
    selectPriority.setAttribute('id','selectPriority')
    const opt1 = document.createElement('option')
    const opt2 = document.createElement('option')
    const opt3 = document.createElement('option')
    opt1.value = 'very important'
    opt1.text = 'very important'
    opt2.value = 'important'
    opt2.text = 'important'
    opt3.value = 'less important'
    opt3.text = 'less important'
    selectPriority.add(opt1,null)
    selectPriority.add(opt2,null)
    selectPriority.add(opt3,null)
    const submitTaskButton = document.createElement('button')
    submitTaskButton.setAttribute('id', 'submit_btn')
    submitTaskButton.setAttribute('type', 'submit')
    submitTaskButton.innerText = 'Add'
    formOfTask.appendChild(titleInputTask)
    formOfTask.appendChild(inputDescription)
    formOfTask.appendChild(inputDueDate)
    formOfTask.appendChild(selectPriority)
    formOfTask.appendChild(submitTaskButton)
    taskForm.appendChild(formOfTask)
    taskAdd.appendChild(divButton)
    taskAdd.appendChild(taskForm)
    return taskAdd
}

document.body.appendChild(addComponent())