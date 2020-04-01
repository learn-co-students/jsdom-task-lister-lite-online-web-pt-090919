// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   // console.log("Great");
// });
  const main = document.querySelector("#main-content")
  console.log(main)

  const form = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")

  form.addEventListener("submit", function(e) {
    e.preventDefault()
    const inputForForm = document.querySelector("#new-task-description").value
    const taskItem = document.createElement("li")
    taskItem.innerText = inputForForm
    taskList.appendChild(taskItem)
    form.reset()
  })
