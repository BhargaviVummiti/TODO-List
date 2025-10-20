function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  const taskList = document.getElementById("taskList");

  // Check input
  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="action-btns">
      <button class="doneBtn"><i class="fa-solid fa-circle-check"></i></button>
      <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
    </div>
  `;

  // Mark as completed
  li.querySelector(".doneBtn").addEventListener("click", function() {
    li.classList.toggle("completed");
    this.innerHTML = li.classList.contains("completed")
      ? "<i class='fa-solid fa-check'></i>"
      : "<i class='fa-solid fa-circle-check'></i>";
  });

  // Delete task
  li.querySelector(".deleteBtn").addEventListener("click", function() {
    li.remove();
  });

  // Add to list
  taskList.appendChild(li);

  // Clear input
  input.value = "";
}
