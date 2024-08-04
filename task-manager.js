// Task manager class using ES6 class syntax
class TaskManager {
	constructor() {
		this.tasks = [];
		this.renderTasks = this.renderTasks.bind(this); // Binding the renderTasks method
	}

	addTask(taskText) {
		const newTask = {
			id: this.tasks.length + 1,
			text: taskText,
			completed: false,
		};
		this.tasks.push(newTask);
		this.renderTasks();
	}

	toggleTask(taskId) {
		const task = this.tasks.find((task) => task.id === taskId);
		if (task) {
			task.completed = !task.completed;
			this.renderTasks();
		}
	}

	filterTasks(filter) {
		let filteredTasks;
		switch (filter) {
			case 'completed':
				filteredTasks = this.tasks.filter((task) => task.completed);
				break;
			case 'incomplete':
				filteredTasks = this.tasks.filter((task) => !task.completed);
				break;
			default:
				filteredTasks = this.tasks;
		}
		this.renderTasks(filteredTasks);
	}

	renderTasks(tasksToRender = this.tasks) {
		const taskList = document.getElementById('taskList');
		taskList.innerHTML = '';

		tasksToRender.forEach((task) => {
			const listItem = document.createElement('li');
			listItem.innerHTML = `
        <input type="checkbox" ${task.completed ? 'checked' : ''
				} onchange="taskManager.toggleTask(${task.id})">
        <span>${task.text}</span>
      `;
			taskList.appendChild(listItem);
		});
	}
}

// Arrow functions for event handlers
const taskManager = new TaskManager();

const addTask = () => {
	const taskInput = document.getElementById('taskInput');
	const taskText = taskInput.value.trim();

	if (taskText !== '') {
		taskManager.addTask(taskText);
		taskInput.value = '';
	}
};

const filterTasks = () => {
	const filterSelect = document.getElementById('filterSelect');
	const selectedFilter = filterSelect.value;
	taskManager.filterTasks(selectedFilter);
};

// Adding event listeners using modern syntax
document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('filterSelect').addEventListener('change', filterTasks);

// Initial rendering
taskManager.renderTasks();

/**

*? 1.) TaskManager Class:
** This is a JavaScript class that represents a task manager. It encapsulates methods for managing tasks, such as adding, toggling, filtering, and rendering tasks.

*? Constructor:
** Initializes the tasks array and binds the renderTasks method to the current instance of the class. This binding is necessary because renderTasks is used as a callback in event listeners, and we want to maintain the correct reference to this.

*? addTask:
** Adds a new task to the tasks array with a unique ID, task text, and initial completion status. After adding a task, it calls the renderTasks method to update the task list in the UI.

*? toggleTask:
** Toggles the completion status of a task with a given ID and then calls renderTasks to update the UI.

*? filterTasks:
** Filters tasks based on the specified filter ('all', 'completed', or 'incomplete') and then calls renderTasks with the filtered tasks to update the UI.

*? renderTasks:
** Renders tasks in the UI. It takes an optional parameter tasksToRender, which defaults to the entire tasks array. It generates HTML elements for each task, including checkboxes for completion status and task text, and appends them to the task list in the HTML.

*? 2.) Arrow Functions for Event Handlers:
** These are arrow functions used as event handlers for the 'Add' button click and the filter dropdown change.

*? addTask:
** Gets the task input value, trims it, and adds a task to the task manager if the trimmed value is not empty. Then, it clears the input field.

*? filterTasks:
** Gets the selected filter value from the dropdown and calls the filterTasks method of the task manager.

*? 3.) Adding Event Listeners:
** This section uses modern syntax to add event listeners to the 'Add' button and the filter dropdown. The event listeners call the corresponding arrow functions (addTask and filterTasks) when the events occur.

*? 4.) Initial Rendering:
** Finally, it calls the renderTasks method of the taskManager to perform the initial rendering of tasks when the page loads.

*/
