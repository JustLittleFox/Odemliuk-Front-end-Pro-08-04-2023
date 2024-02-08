class TaskManager {
    constructor() {
        this.tasks = new Map();
    }

    addTask(id, description) {
        if (this.tasks.has(id)) {
            console.error(`Task with ID ${id} already exists.`);
            return;
        }
        this.tasks.set(id, description);
    }

    removeTask(id) {
        if (!this.tasks.has(id)) {
            console.error(`No task with ID ${id} found.`);
            return;
        }
        this.tasks.delete(id);
    }

    findTask(id) {
        if (!this.tasks.has(id)) {
            console.error(`No task with ID ${id} found.`);
            return;
        }
        return this.tasks.get(id);
    }

    displayTasks() {
        console.log('All tasks:');
        this.tasks.forEach((description, id) => {
            console.log(`ID: ${id}, Description: ${description}`);
        });
    }

    updateTaskDescription(id, newDescription) {
        if (!this.tasks.has(id)) {
            console.error(`No task with ID ${id} found.`);
            return;
        }
        this.tasks.set(id, newDescription);
    }
}

const manager = new TaskManager();

manager.addTask(1, 'Task 1');
manager.addTask(2, 'Task 2');
manager.displayTasks();
manager.updateTaskDescription(1, 'Updated Task 1');
manager.displayTasks();
manager.removeTask(1);
manager.displayTasks();
