const taskForm = document.querySelector("#create-task-form")
  // your code here
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  const newTask = document.querySelector("#new-task-description").value
  taskList.innerHTML += `
    <li>
    ${newTask}
    <button data-action="delete"> X </button>
     </li>
  `
  // let priority = document.querySelector("select option").value
  // if (priority == "high") { taskList.innerHTML.style.backgroundColor = "red" }
  // if (priority == "medium") { taskList.innerHTML.style.backgroundColor = "yellow" }
  // else {taskList.innerHTML.style.backgroundC = "green"}
  taskForm.reset()
});	});


taskList.addEventListener("click", function(e) {
  if (e.target.dataset.action === "delete") {
    e.target.parentElement.remove()
  }
})
