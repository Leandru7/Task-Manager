// ========================================
// CLASSE PRINCIPAL DO TASK MANAGER
// ========================================
class TaskManager {
    constructor() {
        this.tasks = [];
        this.currentFilter = 'all';
        this.editingTaskId = null;
        this.taskIdCounter = 0;
        this.taskInput = document.getElementById('taskInput');
        this.prioritySelect = document.getElementById('prioritySelect');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.tasksList = document.getElementById('tasksList');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.editModal = document.getElementById('editModal');
        this.editTaskInput = document.getElementById('editTaskInput');
        this.editPrioritySelect = document.getElementById('editPrioritySelect');
        this.cancelEditBtn = document.getElementById('cancelEditBtn');
        this.saveEditBtn = document.getElementById('saveEditBtn');
        this.init();
    }
    // ...existing code... (todos os métodos da classe TaskManager)
}

// Inicializa a aplicação
window.addEventListener('DOMContentLoaded', () => {
    new TaskManager();
});
