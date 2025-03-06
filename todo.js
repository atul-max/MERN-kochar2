function addtask(){
    let taskInput = document.getElementById('todo-input');
    let taskText = taskInput.value.trim();
    if(taskText==="") return;

    let li = document.createElement('li');
    li.innerHTML = `${taskText} <button onclick="deletetask(this)">Delete</button>`;
    li.addEventListener('click', function(){
        this.classList.toggle('completed');
    });
    document.getElementById('todo-list').appendChild(li);
    taskInput.value = "";
}
function deletetask(task){
    task.parentElement.remove();
}
document.getElementById('todo-input').addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addtask();
    }
})