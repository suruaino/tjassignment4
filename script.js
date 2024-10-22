// let toDoValue = document.getElementById("to-do-input");
// let toDoContainer = document.getElementById("to-do-container");
// let addBtn = document.querySelector("#add-btn");
// let allBtn = document.querySelector(".all");
// let completedBtn = document.querySelector(".completed");
// let pendingBtn = document.querySelector(".pending");

// addBtn.addEventListener("click", function add() {
//     if (toDoValue.value.trim() === "") {
//         alert("Please enter a task!");
//         return;
//     }
//   let toDoDiv = document.createElement("div");
//   toDoDiv.classList.add("to-do");


//   let toDoText = document.createElement("h4");
//   toDoText.textContent = toDoValue.value;

//   let toDoBtnBx = document.createElement("div");
//   toDoBtnBx.classList.add("to-do-btn-bx");

//   let completeBtn = document.createElement("button");
//   completeBtn.classList.add("complete-btn");
//   completeBtn.textContent = "Complete";

//   completeBtn.addEventListener("click", function (){
//     toDoText.style.textDecoration = "line-through";
//     toDoText.style.textDecorationThickness = "3px";
//     toDoText.style.textDecorationColor = "#3ae23a";
//   })

//   let deleteBtn = document.createElement("button");
//   deleteBtn.classList.add("delete-btn");
//   deleteBtn.textContent = "Delete";

//   deleteBtn.addEventListener("click", function (){
//     toDoContainer.removeChild(toDoDiv)
//   })

//   toDoBtnBx.appendChild(completeBtn);
//   toDoBtnBx.appendChild(deleteBtn);

//   toDoDiv.appendChild(toDoText);
//   toDoDiv.appendChild(toDoBtnBx);

//   toDoContainer.appendChild(toDoDiv);

//   toDoValue.value = "";

// });














let toDoValue = document.getElementById("to-do-input");
let toDoContainer = document.getElementById("to-do-container");
let addBtn = document.querySelector("#add-btn");
let allBtn = document.querySelector(".all");
let completedBtn = document.querySelector(".completed");
let pendingBtn = document.querySelector(".pending");

// Function to load to-dos from localStorage and display them
function loadToDos() {
    let savedToDos = JSON.parse(localStorage.getItem("toDoList")) || [];
    savedToDos.forEach((item) => {
        addToDo(item.text, item.completed);
    });
}

// Function to add to-do item to the DOM and localStorage
function addToDo(text, isCompleted = false) {
    let toDoDiv = document.createElement("div");
    toDoDiv.classList.add("to-do");

    let toDoText = document.createElement("h4");
    toDoText.textContent = text;
    if (isCompleted) {
        toDoText.style.textDecoration = "line-through";
    }

    let toDoBtnBx = document.createElement("div");
    toDoBtnBx.classList.add("to-do-btn-bx");

    let completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "Complete";

    completeBtn.addEventListener("click", function () {
        toDoText.style.textDecoration = "line-through";
        updateLocalStorage();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        toDoContainer.removeChild(toDoDiv);
        updateLocalStorage();  // Update localStorage after deletion
    });

    // completedBtn.addEventListener("click", ()=> {
    //   if(!toDoDiv.completeBtn) {
    //     toDoContainer.removeChild(toDoDiv)
    //   }
    // })

    toDoBtnBx.appendChild(completeBtn);
    toDoBtnBx.appendChild(deleteBtn);
    toDoDiv.appendChild(toDoText);
    toDoDiv.appendChild(toDoBtnBx);
    toDoContainer.appendChild(toDoDiv);

    // Update localStorage after adding the to-do
    updateLocalStorage();
}

// Function to save to-do list to localStorage
function updateLocalStorage() {
    let allToDos = document.querySelectorAll(".to-do h4");
    let toDoList = [];

    allToDos.forEach((toDo) => {
        toDoList.push({
            text: toDo.textContent,
            completed: toDo.style.textDecoration === "line-through"
        });
    });

    localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

// Add new to-do on button click
addBtn.addEventListener("click", function () {
    if (toDoValue.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    addToDo(toDoValue.value); // Add to-do and clear input field
    toDoValue.value = "";
});

// Load saved to-dos from localStorage when the page loads
window.onload = loadToDos;
