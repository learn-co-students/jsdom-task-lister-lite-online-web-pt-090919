document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const createTaskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');
  const list = document.getElementById('list');
  
  createTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    list.appendChild(newTaskDescription.value);
  });
  return list
});
