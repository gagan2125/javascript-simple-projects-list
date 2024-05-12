let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskName = taskInput.value.trim();

  if (taskName !== "") {
    const newTask = {
      name: taskName,
      completed: false,
    };

    tasks.push(newTask);
    taskInput.value = "";
    displayTasks();
  }
}

function toggleTaskStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTaskStatus(index));

    const taskName = document.createElement("span");
    taskName.textContent = task.name;
    taskName.style.textDecoration = task.completed ? "line-through" : "none";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeTask(index));

    listItem.appendChild(checkbox);
    listItem.appendChild(taskName);
    listItem.appendChild(removeButton);

    taskList.appendChild(listItem);
  });
}

displayTasks();
