const taskInput = document.querySelector("#taskInput");
const button = document.querySelector("#task-btn");
const taskList = document.querySelector("#output");
const master = document.querySelector("#checkedMaster");
const remove = document.querySelector("#removeBtn");
const clear = document.querySelector("#clearBTn");

// Array to store the list items
let listItems = [];

button.addEventListener("click", () => {
  master.style.display = "block";
  const inputValue = taskInput.value;

  if (inputValue !== null) {
    const listItem = document.createElement("li");
    listItem.classList.add("todoclass");
    taskList.appendChild(listItem);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listItem.appendChild(checkbox);

    const span = document.createElement("span");
    span.textContent = inputValue;
    listItem.appendChild(span);

    // Add the new listItem to the listItems array
    listItems.push(listItem);

    // Clear the input field
    taskInput.value = "";
  } else {
    alert("Please add your task first!!");
    master.style.display = "none";
  }
});

remove.addEventListener("click", () => {
  if (listItems.length > 0) {
    // Remove the last listItem from the list and the DOM
    const lastItem = listItems.pop();
    taskList.removeChild(lastItem);
  }
});

clear.addEventListener("click", () => {
  // Clear the taskList and the listItems array
  taskList.innerHTML = "";
  listItems = [];
});
