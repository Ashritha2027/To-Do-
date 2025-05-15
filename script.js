let todoList = [];

        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let task = taskInput.value.trim();
            if (task) {
                todoList.push(task);
                taskInput.value = "";
                displayTasks();
            }
        }

        function removeTask(index) {
            todoList.splice(index, 1);
            displayTasks();
        }

        function displayTasks() {
            let taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            todoList.forEach((task, index) => {
                let li = document.createElement("li");
                li.textContent = task;
                let removeBtn = document.createElement("button");
                removeBtn.textContent = "Remove";
                removeBtn.onclick = () => removeTask(index);
                li.appendChild(removeBtn);
                taskList.appendChild(li);
            });
        }