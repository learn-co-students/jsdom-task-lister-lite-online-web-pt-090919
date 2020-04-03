document.addEventListener("DOMContentLoaded", () => {
  const tasks = document.getElementById("tasks");
  stopper();
});

function stopper(){
  document.getElementsByTagName("input")[1].addEventListener("click", function(event) {
    console.log("meep");
    event.preventDefault();
    newItem();
  }, false);
}

function newItem() {
  let item = document.getElementsByTagName("input")[0].value;
  let li = document.createElement("li");
  li.textContent = item;
  tasks.appendChild(li);
};

