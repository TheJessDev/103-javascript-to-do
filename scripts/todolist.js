console.log("todo")

let list=[];
let taskNum=0;

function addTask(){
let task = document.getElementById("newTask").value;
list.push(task);
displayTask(task);
document.getElementById("newTask").value = "";
updateNumTask();
}

function displayTask(addTask){
    let item= `<li id="${taskNum}"> ${addTask} <span onclick="deleteTask(${taskNum})">🗑️ delete</span></li>`;
    const ul= document.getElementById("taskList");
    ul.innerHTML+=item;  
}

function updateNumTask(){
    document.getElementById("numOfTasks").innerHTML=list.length;
}

function deleteTask(id){
    document.getElementById(id).remove();
    list.pop();
    updateNumTask();
}

function add(){
    console.log("Add");
    updateNumTask();
}

window.onload=add;