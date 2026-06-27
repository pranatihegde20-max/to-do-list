let button = document.getElementById("add");
let input = document.getElementById("To_do");
let removeLastButton = document.getElementById("remove_last");
let removeAllButton = document.getElementById("remove_all");
let count = document.getElementById("count");
function updateCount(){
    let paras=document.querySelectorAll("p");
    count.innerText = "Tasks: " + paras.length;
}
function saveTasks(){
    let paras = document.querySelectorAll("p");
    let tasks = [];
    for(let i = 0; i < paras.length; i++){
        tasks.push(paras[i].innerText);
   }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function loadTasks(){
    let savedTasks = localStorage.getItem("tasks");
    if(savedTasks){
    let tasks = JSON.parse(savedTasks);
    for(let i = 0; i < tasks.length; i++){
        let p = document.createElement("p");
        p.innerText = tasks[i];
        p.addEventListener("click", function(){
            p.classList.toggle("completed");
        });
        document.querySelector(".container").appendChild(p);
    }
}
}
button.addEventListener("click", function() {
    if(input.value==""){
        return;
    }
    let p=document.createElement("p");
    p.innerText=input.value;
    p.addEventListener("click", function() {
        p.classList.toggle("completed");
        });  
     let container = document.querySelector(".container");
     container.appendChild(p);
    input.value = "";
    updateCount(); 
    saveTasks(); 
});
removeLastButton.addEventListener("click", function() {
    let paras=document.querySelectorAll("p");
    if(paras.length > 0){
    paras[paras.length-1].remove();
    updateCount();
    saveTasks();
}
});
removeAllButton.addEventListener("click", function() {
    let paras=document.querySelectorAll("p");
    paras.forEach(function(para){
    para.remove();
});     
updateCount();   
saveTasks(); 
});
loadTasks();
updateCount();
