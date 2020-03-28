document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = new TaskList();
  
  const createTaskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');
  const newTaskPriority = document.getElementById("new-task-priority");
  const list = document.getElementById('list');
  const tasks = document.getElementById('tasks');
  
  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
  
  createTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    e.target.reset();
    renderApp()
  });
  tasks.addEventListener('click', (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp()
    }
  })
});
