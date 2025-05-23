
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
        const response = await fetch(`${apiBaseUrl}/api/projects/`);
        const data = await response.json();
        projects = data;
        return data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

async function fetchProject(id) {
    // In a real application, this would fetch from your Django API
    try {
        const response = await fetch(`${apiBaseUrl}/api/projects/${id}/`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching project ${id}:`, error);
        return null;
    }
}

async function fetchStory(id) {
    // In a real application, this would fetch from your Django API
    try {
        const response = await fetch(`${apiBaseUrl}/api/stories/${id}/`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching story ${id}:`, error);
        return null;
    }
}

async function fetchTask(id) {
    // In a real application, this would fetch from your Django API
    try {
        const response = await fetch(`${apiBaseUrl}/api/tasks/${id}/`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching task ${id}:`, error);
        return null;
    }
}

async function createProject(project) {
    // In a real application, this would post to your Django API
    try {
        const response = await fetch(`${apiBaseUrl}/api/projects/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
}

async function updateProject(id, project) {
    // In a real application, this would put to your Django API
    try {
        const response = await fetch(`${apiBaseUrl}/api/projects/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating project:', error);
        throw error;
    }
}

async function deleteProject(id) {
    // In a real application, this would delete from your Django API
    try {
        await fetch(`${apiBaseUrl}/api/projects/${id}/`, {
            method: 'DELETE'
        });
        return true;
    } catch (error) {
        console.error('Error deleting project:', error);
        throw error;
    }
}

async function createStory(story) {
    // In a real application, this would post to your Django API
    try {
        const response = await fetch(`${apiBaseUrl}/api/stories/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(story)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating story:', error);
        throw error;
    }
}

async function updateStory(id, story) {
    // In a real application, this would put to your Django API
    try {
        const response = await fetch(`${apiBaseUrl}/api/stories/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(story)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating story:', error);
        throw error;
    }
}

async function deleteStory(id) {
    // In a real application, this would delete from your Django API
    try {
        await fetch(`${apiBaseUrl}/api/stories/${id}/`, {
            method: 'DELETE'
        });
        return true;
    } catch (error) {
        console.error('Error deleting story:', error);
        throw error;
    }
}

async function createTask(task) {
    // In a real application, this would post to your Django API
    try {
        const response = await fetch(`${apiBaseUrl}/api/tasks/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}

async function updateTask(id, task) {
    // In a real application, this would put to your Django API
    try {
        const response = await fetch(`${apiBaseUrl}/api/tasks/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
}

async function deleteTask(id) {
    // In a real application, this would delete from your Django API
    try {
        await fetch(`${apiBaseUrl}/api/tasks/${id}/`, {
            method: 'DELETE'
        });
        return true;
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
}

async function updateStoriesOrder(projectId, storiesOrder) {
    // In a real application, this would make an API call to update the stories order
    try {
        const response = await fetch(`${apiBaseUrl}/api/projects/${projectId}/stories/reorder/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ order: storiesOrder })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating stories order:', error);
        throw error;
    }
}

async function updateTasksOrder(storyId, tasksOrder) {
    // In a real application, this would make an API call to update the tasks order
    try {
        const response = await fetch(`${apiBaseUrl}/api/stories/${storyId}/tasks/reorder/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ order: tasksOrder })
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating tasks order:', error);
        throw error;
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
            const newProject = await createProject(project);
            alert('Project created successfully!');
            
            // Close the modal if it exists
            const modal = bootstrap.Modal.getInstance(document.getElementById('addProjectModal'));
            if (modal) modal.hide();
            
            // In a real app, redirect to the project details page
            window.location.href = `project-view.html?id=${newProject.id}`;
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
            notes: document.getElementById('editProjectNotes').value || ''
        };
        
        try {
            await updateProject(projectId, project);
            alert('Project updated successfully!');
            
            // Redirect to project view page
            window.location.href = `project-view.html?id=${projectId}`;
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
            project: document.getElementById('storyProjectId').value,
            status: document.getElementById('newStoryStatus').value,
            priority: document.getElementById('newStoryPriority').value,
            start_date: document.getElementById('newStoryStartDate').value || null,
            due_date: document.getElementById('newStoryDueDate').value || null,
            notes: document.getElementById('newStoryNotes').value || ''
        };
        
        try {
            const newStory = await createStory(story);
            alert('Story created successfully!');
            
            // Close the modal if it exists
            const modal = bootstrap.Modal.getInstance(document.getElementById('addStoryModal'));
            if (modal) modal.hide();
            
            // Redirect to story view page
            window.location.href = `story-view.html?id=${newStory.id}`;
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
            title: document.getElementById('storyTitle').value,
            project: document.getElementById('storyProject').value,
            status: document.getElementById('storyStatus').value,
            priority: document.getElementById('storyPriority').value,
            start_date: document.getElementById('storyStartDate').value || null,
            due_date: document.getElementById('storyDueDate').value || null,
            notes: document.getElementById('storyNotes').value || ''
        };
        
        try {
            await updateStory(storyId, story);
            alert('Story updated successfully!');
            
            // Redirect to story view page
            window.location.href = `story-view.html?id=${storyId}`;
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
            story: document.getElementById('taskStoryId').value,
            status: document.getElementById('newTaskStatus').value,
            priority: document.getElementById('newTaskPriority').value,
            start_date: document.getElementById('newTaskStartDate').value || null,
            due_date: document.getElementById('newTaskDueDate').value || null,
            notes: document.getElementById('newTaskNotes').value || ''
        };
        
        try {
            const newTask = await createTask(task);
            alert('Task created successfully!');
            
            // Close the modal if it exists
            const modal = bootstrap.Modal.getInstance(document.getElementById('addTaskModal'));
            if (modal) modal.hide();
            
            // Redirect to task view page
            window.location.href = `task-view.html?id=${newTask.id}`;
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
        
        const taskId = document.getElementById('taskId').value;
        const task = {
            title: document.getElementById('taskTitle').value,
            story: document.getElementById('taskStory').value,
            project: document.getElementById('taskProject').value,
            status: document.getElementById('taskStatus').value,
            priority: document.getElementById('taskPriority').value,
            start_date: document.getElementById('taskStartDate').value || null,
            due_date: document.getElementById('taskDueDate').value || null,
            notes: document.getElementById('taskNotes').value || ''
        };
        
        try {
            await updateTask(taskId, task);
            alert('Task updated successfully!');
            
            // Redirect to task view page
            window.location.href = `task-view.html?id=${taskId}`;
        } catch (error) {
            console.error('Error updating task:', error);
            alert('Failed to update task. Please try again.');
        }
    });
}

// Helper functions
function getStatusBadgeClass(status) {
    switch(status) {
        case 'Completed': return 'bg-success';
        case 'In Progress': return 'bg-primary';
        case 'On Hold': return 'bg-warning';
        case 'Blocked': return 'bg-danger';
        case 'Not Started': return 'bg-info';
        default: return 'bg-secondary';
    }
}

function updateStatusStyles(elementId, status) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    // Remove all existing status classes
    element.classList.remove('bg-success', 'bg-primary', 'bg-warning', 'bg-danger', 'bg-info', 'bg-secondary');
    
    // Add the appropriate class
    element.classList.add(getStatusBadgeClass(status));
}

function formatDate(dateString) {
    if (!dateString) return 'Not set';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Populate dropdowns
function populateProjectDropdown(selectId, selectedValue = null) {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    // Clear existing options
    select.innerHTML = '';
    
    // In a real app, this would fetch from API
    fetchProjects()
        .then(projects => {
            projects.forEach(project => {
                const option = document.createElement('option');
                option.value = project.id;
                option.textContent = project.name;
                select.appendChild(option);
            });
            
            if (selectedValue) {
                select.value = selectedValue;
            }
            
            // Trigger change event to populate story dropdown if needed
            if (selectId === 'taskProject') {
                select.dispatchEvent(new Event('change'));
            }
        })
        .catch(error => {
            console.error('Error populating project dropdown:', error);
            
            // Add some sample data for demonstration
            const sampleProjects = [
                { id: '1', name: 'Website Redesign' },
                { id: '2', name: 'Mobile App Development' },
                { id: '3', name: 'Content Marketing Strategy' },
                { id: '4', name: 'New Product Launch' }
            ];
            
            sampleProjects.forEach(project => {
                const option = document.createElement('option');
                option.value = project.id;
                option.textContent = project.name;
                select.appendChild(option);
            });
            
            if (selectedValue) {
                select.value = selectedValue;
            }
            
            // Trigger change event to populate story dropdown if needed
            if (selectId === 'taskProject') {
                select.dispatchEvent(new Event('change'));
            }
        });
}

function populateStoryDropdown(selectId, projectId, selectedValue = null) {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    // Clear existing options
    select.innerHTML = '';
    
    if (!projectId) {
        select.innerHTML = '<option value="">Select a project first</option>';
        return;
    }
    
    // In a real app, this would fetch stories for the selected project from API
    // For now, use sample data
    const sampleStories = [
        { id: '101', title: 'Create landing page design', project_id: '1' },
        { id: '102', title: 'Implement responsive navigation', project_id: '1' },
        { id: '103', title: 'Optimize for SEO', project_id: '1' },
        { id: '104', title: 'User authentication system', project_id: '2' },
        { id: '105', title: 'Push notification service', project_id: '2' },
        { id: '106', title: 'Content calendar creation', project_id: '3' },
        { id: '107', title: 'Social media strategy', project_id: '3' },
        { id: '108', title: 'Email marketing campaign', project_id: '4' },
        { id: '109', title: 'Product pricing research', project_id: '4' }
    ];
    
    // Filter stories by project
    const filteredStories = sampleStories.filter(story => story.project_id === projectId);
    
    if (filteredStories.length === 0) {
        select.innerHTML = '<option value="">No stories found for this project</option>';
    } else {
        filteredStories.forEach(story => {
            const option = document.createElement('option');
            option.value = story.id;
            option.textContent = story.title;
            select.appendChild(option);
        });
        
        if (selectedValue) {
            select.value = selectedValue;
        }
    }
}

// Initialize sortable for drag-and-drop
function initSortable() {
    // Initialize sortable for stories reordering
    const storiesList = document.getElementById('projectStoriesList');
    if (storiesList) {
        new Sortable(storiesList, {
            animation: 150,
            handle: '.reorder-handle',
            ghostClass: 'reorder-item-dragging',
            onEnd: function(evt) {
                console.log('Story reordered', evt.oldIndex, evt.newIndex);
            }
        });
    }

    // Initialize sortable for tasks reordering
    const tasksList = document.getElementById('storyTasksList');
    if (tasksList) {
        new Sortable(tasksList, {
            animation: 150,
            handle: '.reorder-handle',
            ghostClass: 'reorder-item-dragging',
            onEnd: function(evt) {
                console.log('Task reordered', evt.oldIndex, evt.newIndex);
            }
        });
    }

    // Initialize sortable for kanban board
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
                                  evt.item.getAttribute('data-id');
                    const newStatus = evt.to.id.replace('Tasks', '');
                    console.log(`Task ${taskId} moved to ${newStatus}, new position: ${evt.newIndex}`);
                }
            });
        });
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
    
    // Ensure sidebar is scrollable
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.style.overflowY = 'auto';
        sidebar.style.overflowX = 'hidden';
    }
    
    // Close sidebar when clicking outside on mobile
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', toggleSidebar);
    }
    
    // Setup project selection in add task form to update story options
    const taskProjectSelect = document.getElementById('taskProject');
    if (taskProjectSelect) {
        taskProjectSelect.addEventListener('change', function() {
            const projectId = this.value;
            populateStoryDropdown('taskStory', projectId);
        });
    }
});

// Function to create a story and immediately open the add task modal
function createStoryAndAddTask() {
    // Get the form data
    const storyData = {
        title: document.getElementById('newStoryTitle').value,
        project: document.getElementById('storyProjectId').value,
        status: document.getElementById('newStoryStatus').value,
        priority: document.getElementById('newStoryPriority').value,
        start_date: document.getElementById('newStoryStartDate').value || null,
        due_date: document.getElementById('newStoryDueDate').value || null,
        notes: document.getElementById('newStoryNotes').value || ''
    };
    
    // In a real app, this would create the story first via API
    createStory(storyData)
        .then(newStory => {
            // Close the story modal
            bootstrap.Modal.getInstance(document.getElementById('addStoryModal')).hide();
            
            // Redirect to story edit page with flag to open add task modal
            window.location.href = `story-view.html?id=${newStory.id}&addTask=true`;
        })
        .catch(error => {
            console.error('Error creating story:', error);
            alert('Failed to create story. Please try again.');
        });
}

// Function to update the project card links
function updateProjectLinks() {
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards.length === 0) return;

    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-id');
            window.location.href = `project-view.html?id=${projectId}`;
        });
    });
}
