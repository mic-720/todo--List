let inputBox = document.querySelector("#input-box");
let listContainer = document.querySelector("#list-container");
let button = document.querySelector("button");

const addTask = () => {
    if(inputBox.value ===  ""){
        alert("You must Write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
button.addEventListener("click",addTask);
listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

const saveData = () => {
    localStorage.setItem("data",listContainer.innerHTML);
}
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data"); 
}
showTask();