//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
    event.preventDefault();

//Todo Div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
//Create LI
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//Check button
const completedButton = document.createElement('button');
completedButton.innerText = `✅`;
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//Progress
const mygtukas = document.getElementById('button2');
const InputVal = document.getElementById('variantas');
mygtukas.addEventListener("click",addReiksme);
function addReiksme(){
    const vietinis = document.createElement("p");
    vietinis.innerHTML = InputVal.value;
    vietinis.classList.add('vietiniss');
    todoDiv.appendChild(vietinis);
    InputVal.value = "";
} 
//Trash button
const trashButton = document.createElement('button');
trashButton.innerText = '❌';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);  
//Append to list
todoList.appendChild(todoDiv);
//Clear Task input value
todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //Delete task
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    //Check butt
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}