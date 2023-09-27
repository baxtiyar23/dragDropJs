const btn_todo = document.getElementById("todo-btn")
const btn_progress = document.getElementById("progress-btn")
const btn_done = document.getElementById("done-btn")






function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

let progress_cards_num = 1
let todo_cards_num = 1
let done_cards_num = 1
let id_num = 1

btn_progress.addEventListener("click" , ()=>{
    const card_progress = document.createElement("div")
    card_progress.classList = "card"
    card_progress.id = `drag${id_num}`
    card_progress.setAttribute("draggable" , "true")
    card_progress.setAttribute("ondragstart" , "drag(event)")
    document.querySelector(".progress-board").appendChild(card_progress)
    const task_progress = document.createElement("h2")
    task_progress.innerHTML = `Progress #${progress_cards_num}`
    card_progress.appendChild(task_progress)
    progress_cards_num += 1
    id_num += 1
})


btn_todo.addEventListener("click" , ()=>{
    const card_todo = document.createElement("div")
    card_todo.classList = "card"
    card_todo.id = `drag${id_num}`
    card_todo.setAttribute("draggable" , "true")
    card_todo.setAttribute("ondragstart" , "drag(event)" )
    document.querySelector(".todo-board").appendChild(card_todo)
    const task_todo = document.createElement("h2")
    task_todo.innerHTML = `Todo #${todo_cards_num}`
    card_todo.appendChild(task_todo)
    todo_cards_num += 1
    id_num +=1
})


btn_done.addEventListener("click" , ()=>{
    const card_done = document.createElement("div")
    card_done.classList = "card"
    card_done.id = `drag${id_num}`
    card_done.setAttribute("draggable" , "true")
    card_done.setAttribute("ondragstart" , "drag(event)")
    document.querySelector(".done-board").appendChild(card_done)
    const task_done = document.createElement("h2")
    task_done.innerHTML = `done #${done_cards_num}`
    card_done.appendChild(task_done)
    done_cards_num += 1
    id_num +=1
})







