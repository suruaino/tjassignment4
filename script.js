// Targetting existing html elements
let textInput = document.getElementById("text-input");
let addBtn = document.getElementById("add-btn");
let todoMainContainer = document.getElementById("todo-mainbx");
let allBtn = document.getElementById("all");
let completedBtn = document.getElementById("completed");


//Creating a function to add todo tasks
const add = () => {

    let todoTask = textInput.value.trim();
    if(todoTask) {

        create(todoTask);

        textInput.value = "";

        saveTodo(); 

    }  else{

        alert("Input can not be empty");
    }
 
}

//Adding eventlisterner to add button
addBtn.addEventListener("click", add);

//creating all elements to be added dynamically o button click
const create = (todoTask) => {

    const list = document.createElement("li");
    list.classList.add("task-list")

    const htag = document.createElement("p");
    htag.innerText = todoTask;
    
    const listBtnBx = document.createElement("div");
    listBtnBx.classList.add("li-btn-bx");

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.addEventListener("click", () => {
        todoMainContainer.removeChild(list)
    })

    const comBtn = document.createElement("button");
    const undoBtn = document.createElement("button");
    undoBtn.innerText = "Undo";
    undoBtn.addEventListener("click", () => {
        listBtnBx.prepend(comBtn)
        listBtnBx.removeChild(undoBtn)
        htag.style.textDecoration = "none";

    })
    comBtn.innerText = "Complete";
    comBtn.addEventListener("click", () => {
        htag.style.textDecoration = "line-through";
        htag.style.textDecorationThickness = "3px";
        listBtnBx.removeChild(comBtn)
        listBtnBx.prepend(undoBtn)

    })

    // completedBtn.addEventListener("click", () => {
    //     const completed = document.querySelectorAll(".task-list")

    //    Array.from(completed).filter((li) => {
    //         if(li.className == "undo"){
    //         todoMainContainer.removeChild(li);
    //         console.log(li)
    //    }
  
    // })})

    listBtnBx.append(comBtn, delBtn);
    list.append(htag, listBtnBx);
    todoMainContainer.appendChild(list);

}


//adding local storage to persist how todo even after exiting the browser.
let toDos = [];
const saveTodo = () => {

    todoMainContainer.querySelectorAll("li").forEach((item) => {
        toDos.push(item.innerText.replace(/Complete|Delete/g, "").trim())
    })
    
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

const loadTodo = () => {
    const todoTask = JSON.parse(localStorage.getItem("toDos"));
    todoTask.forEach(create);
}
// const removeTodo = () => {
//     const todoTask = JSON.parse(localStorage.getItem("toDos"));
//     localStorage.removeItem(toDos.)
// }

loadTodo();