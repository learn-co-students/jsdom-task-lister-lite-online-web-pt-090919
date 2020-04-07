document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let main = document.querySelector('#main-content');
  // console.log(main);  Just to see if worked!
});
  
  let taskForm = document.querySelector('#create-task-form');
  
  let taskList = document.querySelector('#tasks');

  taskForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let newTask = document.querySelector('#new-task-description').value;
  
  taskList.innerHTML += `
  <li> 
  ${newTask} 
  <button data-action = 'delete' > Remove </button>
  </li>
  `;

  taskForm.reset();
  
  });

  taskList.addEventListener('click', function(e) {
    console.log(e.target);
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove();
    }; 
  })



