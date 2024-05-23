document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  loadTasks();

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(taskInput.value);
    taskInput.value = "";
  });

  taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      deleteTask(e.target.parentElement.dataset.id);
    } else if (e.target.classList.contains("edit")) {
      editTask(e.target.parentElement.dataset.id);
    }
  });

  // Load tasks from local storage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => renderTask(task));
  }

  // Add a new task
  function addTask(taskContent) {
    const task = {
      id: Date.now().toString(),
      content: taskContent,
    };
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask(task);
  }

  // Render a task in the DOM
  function renderTask(task) {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.innerHTML = `
            <span>${task.content}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
    taskList.appendChild(li);
  }

  // Delete a task
  function deleteTask(id) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.querySelector(`[data-id='${id}']`).remove();
  }

  // Edit a task
  function editTask(id) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = tasks.find((task) => task.id === id);
    const newContent = prompt("Edit task:", task.content);
    if (newContent) {
      task.content = newContent;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      document.querySelector(`[data-id='${id}'] span`).textContent = newContent;
    }
  }
});
