let toDoValue = document.getElementById("to-do-input");
let toDoContainer = document.getElementById("to-do-container");
let addBtn = document.querySelector("#add-btn");
let allBtn = document.querySelector(".all");
let completedBtn = document.querySelector(".completed");
let pendingBtn = document.querySelector(".pending");

addBtn.addEventListener("click", function add() {
    if (toDoValue.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }
  let toDoDiv = document.createElement("div");
  toDoDiv.classList.add("to-do");


  let toDoText = document.createElement("h4");
  toDoText.textContent = toDoValue.value;

  let toDoBtnBx = document.createElement("div");
  toDoBtnBx.classList.add("to-do-btn-bx");

  let completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.textContent = "Complete";

  completeBtn.addEventListener("click", function (){
    toDoText.style.textDecoration = "line-through";
  })

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function (){
    toDoContainer.removeChild(toDoDiv)
  })

  toDoBtnBx.appendChild(completeBtn);
  toDoBtnBx.appendChild(deleteBtn);

  toDoDiv.appendChild(toDoText);
  toDoDiv.appendChild(toDoBtnBx);

  toDoContainer.appendChild(toDoDiv);


});
