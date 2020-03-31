document.addEventListener("DOMContentLoaded", () => {
let tasks = document.getElementById("tasks");
});

let submitBtn = document.querySelector("#submitBtn").addEventListener("click", function(event){
  let description = document.getElementById("new-task-description").value;
  tasks.innerHTML += `<li>${description}</li>`;
  event.preventDefault();
});	