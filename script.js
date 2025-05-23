
// Global variables
let projects = [];
let stories = [];
let tasks = [];
let apiBaseUrl = ''; // Set this to your API endpoint

// Toggle sidebar function
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('show');
    document.getElementById('sidebarBackdrop').classList.toggle('show');
}

// API functions
async function fetchProjects() {
    // In a real application, this would fetch from your Django API
    try {
        // const response = await fetch(`${apiBaseUrl}/api/projects/`);
        // const data = await response.json();
        // projects = data;
        // return data;
        console.log('Fetching projects - API call would happen here');
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

async function createProject(project) {
    // In a real application, this would post to your Django API
    try {
        // const response = await fetch(`${apiBaseUrl}/api/projects/`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(project)
        // });
        // const data = await response.json();
        // return data;
        console.log('Creating project - API call would happen here', project);
    } catch (error) {
        console.error('Error creating project:', error);
    }
}

async function updateProject(id, project) {
    // In a real application, this would put to your Django API
    try {
        // const response = await fetch(`${apiBaseUrl}/api/projects/${id}/`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(project)
        // });
        // const data = await response.json();
        // return data;
        console.log(`Updating project ${id} - API call would happen here`, project);
    } catch (error) {
        console.error('Error updating project:', error);
    }
}

async function deleteProject(id) {
    // In a real application, this would delete from your Django API
    try {
        // await fetch(`${apiBaseUrl}/api/projects/${id}/`, {
        //     method: 'DELETE'
        // });
        console.log(`Deleting project ${id} - API call would happen here`);
    } catch (error) {
        console.error('Error deleting project:', error);
    }
}

async function createStory(story) {
    // In a real application, this would post to your Django API
    try {
        // const response = await fetch(`${apiBaseUrl}/api/projects/${story.project_id}/stories/`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(story)
        // });
        // const data = await response.json();
        // return data;
        console.log('Creating story - API call would happen here', story);
    } catch (error) {
        console.error('Error creating story:', error);
    }
}

async function updateStory(id, story) {
    // In a real application, this would put to your Django API
    try {
        // const response = await fetch(`${apiBaseUrl}/api/stories/${id}/`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(story)
        // });
        // const data = await response.json();
        // return data;
        console.log(`Updating story ${id} - API call would happen here`, story);
    } catch (error) {
        console.error('Error updating story:', error);
    }
}

async function deleteStory(id) {
    // In a real application, this would delete from your Django API
    try {
        // await fetch(`${apiBaseUrl}/api/stories/${id}/`, {
        //     method: 'DELETE'
        // });
        console.log(`Deleting story ${id} - API call would happen here`);
    } catch (error) {
        console.error('Error deleting story:', error);
    }
}

async function createTask(task) {
    // In a real application, this would post to your Django API
    try {
        // const response = await fetch(`${apiBaseUrl}/api/stories/${task.story_id}/tasks/`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(task)
        // });
        // const data = await response.json();
        // return data;
        console.log('Creating task - API call would happen here', task);
    } catch (error) {
        console.error('Error creating task:', error);
    }
}

async function updateTask(id, task) {
    // In a real application, this would put to your Django API
    try {
        // const response = await fetch(`${apiBaseUrl}/api/tasks/${id}/`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(task)
        // });
        // const data = await response.json();
        // return data;
        console.log(`Updating task ${id} - API call would happen here`, task);
    } catch (error) {
        console.error('Error updating task:', error);
    }
}

async function deleteTask(id) {
    // In a real application, this would delete from your Django API
    try {
        // await fetch(`${apiBaseUrl}/api/tasks/${id}/`, {
        //     method: 'DELETE'
        // });
        console.log(`Deleting task ${id} - API call would happen here`);
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}

// Form handling functions
function handleAddProjectForm() {
    if (!document.getElementById('addProjectForm')) return;

    document.getElementById('addProjectForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const project = {
            name: document.getElementById('newProjectName').value,
            description: document.getElementById('newProjectDescription').value || '',
            area: document.getElementById('newProjectArea').value,
            status: document.getElementById('newProjectStatus').value,
            priority: document.getElementById('newProjectPriority').value,
            start_date: document.getElementById('newProjectStartDate').value || null,
            due_date: document.getElementById('newProjectDueDate').value || null,
            notes: document.getElementById('newProjectNotes').value || '',
            stories: []
        };
        
        try {
            await createProject(project);
            alert('Project created successfully!');
            bootstrap.Modal.getInstance(document.getElementById('addProjectModal')).hide();
            // In a real app, refresh the page or update the UI
        } catch (error) {
            console.error('Error creating project:', error);
            alert('Failed to create project. Please try again.');
        }
    });
}

function handleEditProjectForm() {
    if (!document.getElementById('editProjectForm')) return;

    document.getElementById('editProjectForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const projectId = document.getElementById('editProjectId').value;
        const project = {
            name: document.getElementById('editProjectName').value,
            description: document.getElementById('editProjectDescription').value || '',
            area: document.getElementById('editProjectArea').value,
            status: document.getElementById('editProjectStatus').value,
            priority: document.getElementById('editProjectPriority').value,
            start_date: document.getElementById('editProjectStartDate').value || null,
            due_date: document.getElementById('editProjectDueDate').value || null,
            notes: document.getElementById('editProjectNotes').value || '',
            // In a real app, you would gather the stories as well
            stories: []
        };
        
        try {
            await updateProject(projectId, project);
            alert('Project updated successfully!');
            bootstrap.Modal.getInstance(document.getElementById('editProjectModal')).hide();
            // In a real app, refresh the page or update the UI
        } catch (error) {
            console.error('Error updating project:', error);
            alert('Failed to update project. Please try again.');
        }
    });
}

function handleAddStoryForm() {
    if (!document.getElementById('addStoryForm')) return;

    document.getElementById('addStoryForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const story = {
            title: document.getElementById('newStoryTitle').value,
            project: document.getElementById('newStoryProject').value,
            status: document.getElementById('newStoryStatus').value,
            priority: document.getElementById('newStoryPri'+

            'ority').value,
            start_date: document.getElementById('newStoryStartDate').value || null,
            due_date: document.getElementById('newStoryDueDate').value || null,
            notes: document.getElementById('newStoryNotes').value || '',
            tasks: []
        };
        
        try {
            await createStory(story);
            alert('Story created successfully!');
            bootstrap.Modal.getInstance(document.getElementById('addStoryModal')).hide();
            // In a real app, refresh the page or update the UI
        } catch (error) {
            console.error('Error creating story:', error);
            alert('Failed to create story. Please try again.');
        }
    });
}

function handleEditStoryForm() {
    if (!document.getElementById('editStoryForm')) return;

    document.getElementById('editStoryForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const storyId = document.getElementById('editStoryId').value;
        const story = {
            title: document.getElementById('editStoryTitle').value,
            project: document.getElementById('editStoryProject').value,
            status: document.getElementById('editStoryStatus').value,
            priority: document.getElementById('editStoryPriority').value,
            start_date: document.getElementById('editStoryStartDate').value || null,
            due_date: document.getElementById('editStoryDueDate').value || null,
            notes: document.getElementById('editStoryNotes').value || '',
            // In a real app, you would gather the tasks as well
            tasks: []
        };
        
        try {
            await updateStory(storyId, story);
            alert('Story updated successfully!');
            bootstrap.Modal.getInstance(document.getElementById('editStoryModal')).hide();
            // In a real app, refresh the page or update the UI
        } catch (error) {
            console.error('Error updating story:', error);
            alert('Failed to update story. Please try again.');
        }
    });
}

function handleAddTaskForm() {
    if (!document.getElementById('addTaskForm')) return;

    document.getElementById('addTaskForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const task = {
            title: document.getElementById('newTaskTitle').value,
            story: document.getElementById('newTaskStory').value,
            status: document.getElementById('newTaskStatus').value,
            priority: document.getElementById('newTaskPriority').value,
            start_date: document.getElementById('newTaskStartDate').value || null,
            due_date: document.getElementById('newTaskDueDate').value || null,
            notes: document.getElementById('newTaskNotes').value || ''
        };
        
        try {
            await createTask(task);
            alert('Task created successfully!');
            bootstrap.Modal.getInstance(document.getElementById('addTaskModal')).hide();
            // In a real app, refresh the page or update the UI
        } catch (error) {
            console.error('Error creating task:', error);
            alert('Failed to create task. Please try again.');
        }
    });
}

function handleEditTaskForm() {
    if (!document.getElementById('editTaskForm')) return;

    document.getElementById('editTaskForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const taskId = document.getElementById('editTaskId').value;
        const task = {
            title: document.getElementById('editTaskTitle').value,
            story: document.getElementById('editTaskStory').value,
            status: document.getElementById('editTaskStatus').value,
            priority: document.getElementById('editTaskPriority').value,
            start_date: document.getElementById('editTaskStartDate').value || null,
            due_date: document.getElementById('editTaskDueDate').value || null,
            notes: document.getElementById('editTaskNotes').value || ''
        };
        
        try {
            await updateTask(taskId, task);
            alert('Task updated successfully!');
            bootstrap.Modal.getInstance(document.getElementById('editTaskModal')).hide();
            // In a real app, refresh the page or update the UI
        } catch (error) {
            console.error('Error updating task:', error);
            alert('Failed to update task. Please try again.');
        }
    });
}

// Confirmation functions
function confirmDeleteProject() {
    if (confirm('Are you sure you want to delete this project? This will also delete all associated stories and tasks.')) {
        const projectId = document.getElementById('editProjectId').value;
        deleteProject(projectId)
            .then(() => {
                alert('Project deleted successfully!');
                bootstrap.Modal.getInstance(document.getElementById('editProjectModal')).hide();
                // In a real app, refresh the page or update the UI
            })
            .catch(error => {
                console.error('Error deleting project:', error);
                alert('Failed to delete project. Please try again.');
            });
    }
}

function confirmDeleteStory() {
    if (confirm('Are you sure you want to delete this story? This will also delete all associated tasks.')) {
        const storyId = document.getElementById('editStoryId').value;
        deleteStory(storyId)
            .then(() => {
                alert('Story deleted successfully!');
                bootstrap.Modal.getInstance(document.getElementById('editStoryModal')).hide();
                // In a real app, refresh the page or update the UI
            })
            .catch(error => {
                console.error('Error deleting story:', error);
                alert('Failed to delete story. Please try again.');
            });
    }
}

function confirmDeleteTask() {
    if (confirm('Are you sure you want to delete this task?')) {
        const taskId = document.getElementById('editTaskId').value;
        deleteTask(taskId)
            .then(() => {
                alert('Task deleted successfully!');
                bootstrap.Modal.getInstance(document.getElementById('editTaskModal')).hide();
                // In a real app, refresh the page or update the UI
            })
            .catch(error => {
                console.error('Error deleting task:', error);
                alert('Failed to delete task. Please try again.');
            });
    }
}

// Status change functions
function moveTaskStatus(id, newStatus) {
    // In a real app, this would update the task's status via API
    updateTask(id, { status: newStatus })
        .then(() => {
            alert(`Task ${id} moved to ${newStatus}`);
            // In a real app, refresh the page or update the UI
        })
        .catch(error => {
            console.error('Error updating task status:', error);
            alert('Failed to update task status. Please try again.');
        });
}

// Initialize sortable for drag-and-drop
function initSortable() {
    // Initialize sortable for stories reordering if the element exists
    const storiesList = document.getElementById('projectStoriesList');
    if (storiesList) {
        new Sortable(storiesList, {
            animation: 150,
            handle: '.reorder-handle',
            ghostClass: 'reorder-item-dragging',
            onEnd: function(evt) {
                // In a real app, update story order via API
                console.log('Story reordered', evt.oldIndex, evt.newIndex);
                // Here you would make an API call to update the order
            }
        });
    }

    // Initialize sortable for tasks reordering if the element exists
    const tasksList = document.getElementById('storyTasksList');
    if (tasksList) {
        new Sortable(tasksList, {
            animation: 150,
            handle: '.reorder-handle',
            ghostClass: 'reorder-item-dragging',
            onEnd: function(evt) {
                // In a real app, update task order via API
                console.log('Task reordered', evt.oldIndex, evt.newIndex);
                // Here you would make an API call to update the order
            }
        });
    }

    // Initialize sortable for kanban board if the elements exist
    const kanbanColumns = document.querySelectorAll('.kanban-tasks');
    if (kanbanColumns.length > 0) {
        kanbanColumns.forEach(column => {
            new Sortable(column, {
                group: 'tasks',
                animation: 150,
                ghostClass: 'task-dragging',
                onEnd: function(evt) {
                    // In a real app, update task status and order via API
                    const taskId = evt.item.getAttribute('data-task-id') || 
                                    evt.item.onclick.toString().match(/editTask\((\d+)\)/)[1];
                    const newStatus = evt.to.id.replace('Tasks', '');
                    console.log(`Task ${taskId} moved to ${newStatus}, new position: ${evt.newIndex}`);
                    // Here you would make an API call to update the status and order
                }
            });
        });
    }
}

// Helper function for stories dropdown
function populateStoryDropdown() {
    const storyDropdown = document.getElementById('newTaskStory');
    if (!storyDropdown) return;

    // In a real app, you would fetch stories from API and populate the dropdown
    storyDropdown.innerHTML = '';
    // Sample data for now
    const sampleStories = [
        { id: 101, title: 'Create landing page design' },
        { id: 102, title: 'Implement responsive navigation' },
        { id: 103, title: 'Backend development' },
        { id: 104, title: 'Market analysis' }
    ];
    
    sampleStories.forEach(story => {
        storyDropdown.innerHTML += `<option value="${story.id}">${story.title}</option>`;
    });
}

// Helper function for work stories dropdown
function populateWorkStories() {
    const projectSelect = document.getElementById('newTaskProject');
    const storySelect = document.getElementById('newTaskStory');
    if (!projectSelect || !storySelect) return;
    
    // Clear existing options
    storySelect.innerHTML = '';
    
    // In a real app, this would fetch stories for the selected project from API
    // For now, just add some sample options based on selected project
    if (projectSelect.value === '1') { // Website Redesign
        storySelect.innerHTML += `<option value="101">Create landing page design</option>`;
        storySelect.innerHTML += `<option value="102">Implement responsive navigation</option>`;
    } else if (projectSelect.value === '2') { // Mobile App Development
        storySelect.innerHTML += `<option value="103">Backend development</option>`;
        storySelect.innerHTML += `<option value="105">User interface design</option>`;
    } else if (projectSelect.value === '4') { // New Product Launch
        storySelect.innerHTML += `<option value="104">Market analysis</option>`;
        storySelect.innerHTML += `<option value="106">Marketing campaign</option>`;
    }
}

// Initialization function
document.addEventListener('DOMContentLoaded', function() {
    // Setup form handlers
    handleAddProjectForm();
    handleEditProjectForm();
    handleAddStoryForm();
    handleEditStoryForm();
    handleAddTaskForm();
    handleEditTaskForm();
    
    // Initialize sortables for drag and drop
    initSortable();
    
    // Populate dropdowns
    populateStoryDropdown();
    
    // Ensure sidebar is scrollable
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.style.overflowY = 'auto';
    }
    
    // Close sidebar when clicking outside on mobile
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', toggleSidebar);
    }
});

// Function to create a story and immediately open the add task modal
function createStoryAndAddTask() {
    // In a real app, this would create the story first via API
    // Then open the add task modal with the new story selected
    alert('Creating story and preparing to add task');
    // For demonstration, just hide the story modal and show the task modal
    bootstrap.Modal.getInstance(document.getElementById('addStoryModal')).hide();
    setTimeout(() => {
        const modal = new bootstrap.Modal(document.getElementById('addTaskModal'));
        modal.show();
    }, 500);
}
