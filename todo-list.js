// Arrow function to add a task
const addTask = () => {
	const taskInput = getId('taskInput');
	const taskList = getId('taskList');

	if (taskInput.value.trim() !== '') {
		const li = createElement('li');
		li.textContent = taskInput.value;
		li.addEventListener('click', toggleTaskComplete);
		const deleteButton = createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.addEventListener('click', deleteTask);
		li.appendChild(deleteButton);
		taskList.appendChild(li);
		taskInput.value = '';
	}
};

// Arrow function to delete a task
const deleteTask = (event) => {
	const taskItem = event.target.parentElement;
	taskItem.remove();
};

// Arrow function to toggle task completion
const toggleTaskComplete = (event) => {
	const taskItem = event.target;
	taskItem.classList.toggle('completed');
};

// Event listener for the add task button
onClickEvent('addTaskButton', addTask)