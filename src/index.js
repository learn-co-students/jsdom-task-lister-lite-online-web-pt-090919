let tasks = []

const list = document.getElementById('tasks');

let li;


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', function (event) { 
    event.preventDefault();
    let formInput = document.getElementById('new-task-description');
    console.log("formInput", formInput.value)
    tasks.push(formInput.value);
      
      li = document.createElement("li");
      li.innerHTML = formInput.value;
      list.appendChild(li);
      formInput.value = '';  
    });
});

