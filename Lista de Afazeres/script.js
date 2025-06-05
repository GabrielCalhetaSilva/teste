function addTask() {
  const taskInput = document.getElementById('taskInput') 
  const taskText = taskInput.value.trim()  
  
  if (taskText === '') {
    alert('Digite uma tarefa.')   
    return    
  }

  const li = document.createElement('li')     
  li.textContent = taskText      

  li.addEventListener('click', function() {
    li.classList.toggle('completed')       
  })        

  const deleteBtn = document.createElement('button')         
  deleteBtn.textContent = '🗑️'          
  deleteBtn.classList.add('delete-btn')          
  deleteBtn.addEventListener('click', function() {
    li.remove()          
  })          

  li.appendChild(deleteBtn)          

  document.getElementById('taskList').appendChild(li)          
  taskInput.value = ''          
}
