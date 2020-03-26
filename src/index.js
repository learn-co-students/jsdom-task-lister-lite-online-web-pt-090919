document.addEventListener("DOMContentLoaded", () => {
  // Retrieve form and input
  let form = document.querySelector("#task-form");
  let input = document.querySelector("input#new-task-description");
  let ul = document.querySelector("ul#tasks");

  let subBtn = document.querySelector("div.input-wrapper button");
  let tooltip = document.querySelector("div.tooltip1");
  subBtn.addEventListener("mouseenter", revealTooltip);
  subBtn.addEventListener("mouseleave", hideTooltip);

  // FORM SCOPE

  // Add event listener to form
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let li = document.createElement("li");

    let div = document.createElement("div");
    setDivForContent(div);

    let editDiv = document.createElement("div");
    setUpDivForEdit(editDiv);
    editDiv.addEventListener("click", editTodo);

    ul.prepend(constructedTodo());
    resetField();

    let todoContent = document.querySelector("ul#tasks li div.to-delete");

    todoContent.addEventListener("dblclick", function(event) {
      markTodoComplete(this);

      let deleteBtn = document.createElement("div");
      setDeleteBtn(deleteBtn);
      deleteBtn.addEventListener("click", removeTodo);

      function markTodoComplete(todo) {
        todoContent.classList.add("todo-content");
        editDiv.style.display = "none";
      }

      function setDeleteBtn(btn) {
        deleteBtn.innerHTML = '<i class="fas fa-backspace"></i>';
        deleteBtn.style.cursor = "pointer";
        li.appendChild(deleteBtn);
      }

      function removeTodo() {
        li.remove();
      }
    });

    // ABSTRACTION GOES BELOW

    function resetField() {
      input.value = "";
    }

    function constructedTodo() {
      li.setAttribute("class", "todo");
      li.classList.add("layout");
      li.appendChild(div);
      li.appendChild(editDiv);
      return li;
    }

    function setUpDivForEdit(div) {
      editDiv.innerHTML = '<i class="fas fa-edit"></i>';
      editDiv.style.cursor = "pointer";
    }

    // edit todo
    function editTodo() {
      input.value = div.textContent;
      li.remove();
    }

    function setDivForContent(div) {
      div.setAttribute("class", "to-delete");
      div.textContent = input.value;
    }
  });

  // Global scope

  // reveal tooltip
  function revealTooltip() {
    tooltip.style.display = "block";
  }

  // reveal tooltip
  function hideTooltip() {
    tooltip.style.display = "none";
  }
});
