
// Toggle sidebar on mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

// Initialize data storage
let projectsData = JSON.parse(localStorage.getItem('projectsData')) || [];
let storiesData = JSON.parse(localStorage.getItem('storiesData')) || [];
let tasksData = JSON.parse(localStorage.getItem('tasksData')) || [];

// Current selected project/story/task for modal views
let currentProjectId = null;
let currentStoryId = null;
let currentTaskId = null;

// Generate a unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return 'Not set';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Calculate days remaining until due date
function daysUntilDue(dueDateString) {
    if (!dueDateString) return null;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const dueDate = new Date(dueDateString);
    dueDate.setHours(0, 0, 0, 0);
    
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('projectsData', JSON.stringify(projectsData));
    localStorage.setItem('storiesData', JSON.stringify(storiesData));
    localStorage.setItem('tasksData', JSON.stringify(tasksData));
}

// Create a new project
function createProject(event) {
    event.preventDefault();
    
    const newProject = {
        id: generateId(),
        name: document.getElementById('newProjectName').value,
        description: document.getElementById('newProjectDescription').value,
        category: document.getElementById('newProjectCategory').value,
        status: document.getElementById('newProjectStatus').value,
        priority: document.getElementById('newProjectPriority').value,
        startDate: document.getElementById('newProjectStartDate').value,
        dueDate: document.getElementById('newProjectDueDate').value,
        notes: document.getElementById('newProjectNotes').value,
        created: new Date().toISOString(),
        updated: new Date().toISOString()
    };
    
    projectsData.push(newProject);
    saveData();
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('addProjectModal'));
    modal.hide();
    
    loadProjects();
    loadProjectsForSelect();
    
    // Reset form
    document.getElementById('addProjectModal').querySelector('form').reset();
    
    // Return the new project for chaining
    return newProject;
}

// Create Project and add Story immediately after
function createProjectAndAddStory() {
    const newProject = createProject(new Event('submit'));
    
    // Set the project in the story modal and show it
    const storyProjectSelect = document.getElementById('newStoryProject');
    
    // Ensure options are loaded
    loadProjectsForSelect();
    
    // Set selected project
    for (let i = 0; i < storyProjectSelect.options.length; i++) {
        if (storyProjectSelect.options[i].value === newProject.id) {
            storyProjectSelect.selectedIndex = i;
            break;
        }
    }
    
    showAddStoryModal();
}

// Create a new story
function createStory(event) {
    event.preventDefault();
    
    const newStory = {
        id: generateId(),
        projectId: document.getElementById('newStoryProject').value,
        title: document.getElementById('newStoryTitle').value,
        description: document.getElementById('newStoryDescription').value,
        status: document.getElementById('newStoryStatus').value,
        priority: document.getElementById('newStoryPriority').value,
        startDate: document.getElementById('newStoryStartDate').value,
        dueDate: document.getElementById('newStoryDueDate').value,
        notes: document.getElementById('newStoryNotes').value,
        created: new Date().toISOString(),
        updated: new Date().toISOString()
    };
    
    storiesData.push(newStory);
    saveData();
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('addStoryModal'));
    modal.hide();
    
    if (currentProjectId) {
        loadProjectStories(currentProjectId);
    }
    
    loadStoriesForSelect();
    
    // Reset form
    document.getElementById('addStoryModal').querySelector('form').reset();
    
    // Return the new story for chaining
    return newStory;
}

// Create Story and add Task immediately after
function createStoryAndAddTask() {
    const newStory = createStory(new Event('submit'));
    
    // Set the story in the task modal and show it
    const taskStorySelect = document.getElementById('newTaskStory');
    
    // Ensure options are loaded
    loadStoriesForSelect();
    
    // Set selected story
    for (let i = 0; i < taskStorySelect.options.length; i++) {
        if (taskStorySelect.options[i].value === newStory.id) {
            taskStorySelect.selectedIndex = i;
            break;
        }
    }
    
    showAddTaskModal();
}

// Create a new task
function createTask(event) {
    event.preventDefault();
    
    const newTask = {
        id: generateId(),
        storyId: document.getElementById('newTaskStory').value,
        title: document.getElementById('newTaskTitle').value,
        status: document.getElementById('newTaskStatus').value,
        priority: document.getElementById('newTaskPriority').value,
        startDate: document.getElementById('newTaskStartDate').value,
        dueDate: document.getElementById('newTaskDueDate').value,
        notes: document.getElementById('newTaskNotes').value,
        created: new Date().toISOString(),
        updated: new Date().toISOString()
    };
    
    tasksData.push(newTask);
    saveData();
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('addTaskModal'));
    modal.hide();
    
    loadTasksByStatus();
    
    if (currentStoryId) {
        loadStoryTasks(currentStoryId);
    }
    
    // Reset form
    document.getElementById('addTaskModal').querySelector('form').reset();
}

// Load projects for select element
function loadProjectsForSelect() {
    const selectElements = document.querySelectorAll('#newStoryProject');
    
    selectElements.forEach(select => {
        // Clear existing options except the first one
        while (select.options.length > 0) {
            select.remove(0);
        }
        
        // Add options for each project
        projectsData.sort((a, b) => a.name.localeCompare(b.name))
            .forEach(project => {
                const option = document.createElement('option');
                option.value = project.id;
                option.textContent = project.name;
                select.appendChild(option);
            });
    });
}

// Load stories for select element
function loadStoriesForSelect() {
    const selectElements = document.querySelectorAll('#newTaskStory, #taskStory');
    
    selectElements.forEach(select => {
        // Clear existing options
        while (select.options.length > 0) {
            select.remove(0);
        }
        
        // Add options for each story
        storiesData.sort((a, b) => {
            // First get project names for sorting hierarchically
            const projectA = projectsData.find(p => p.id === a.projectId)?.name || '';
            const projectB = projectsData.find(p => p.id === b.projectId)?.name || '';
            
            if (projectA === projectB) {
                return a.title.localeCompare(b.title);
            }
            return projectA.localeCompare(projectB);
        }).forEach(story => {
            const project = projectsData.find(p => p.id === story.projectId);
            const option = document.createElement('option');
            option.value = story.id;
            option.textContent = `${project ? project.name + ': ' : ''}${story.title}`;
            select.appendChild(option);
        });
    });
}

// Show add project modal
function showAddProjectModal() {
    const modal = new bootstrap.Modal(document.getElementById('addProjectModal'));
    modal.show();
}

// Show add story modal
function showAddStoryModal() {
    loadProjectsForSelect();
    const modal = new bootstrap.Modal(document.getElementById('addStoryModal'));
    modal.show();
}

// Show add story modal for a specific project
function showAddStoryForProjectModal() {
    loadProjectsForSelect();
    
    const projectSelect = document.getElementById('newStoryProject');
    
    // Set the current project as selected
    for (let i = 0; i < projectSelect.options.length; i++) {
        if (projectSelect.options[i].value === currentProjectId) {
            projectSelect.selectedIndex = i;
            break;
        }
    }
    
    const projectModal = bootstrap.Modal.getInstance(document.getElementById('projectModal'));
    projectModal.hide();
    
    setTimeout(() => {
        const modal = new bootstrap.Modal(document.getElementById('addStoryModal'));
        modal.show();
    }, 500);
}

// Show add task modal
function showAddTaskModal() {
    loadStoriesForSelect();
    const modal = new bootstrap.Modal(document.getElementById('addTaskModal'));
    modal.show();
}

// Show add task modal for a specific story
function showAddTaskForStoryModal() {
    loadStoriesForSelect();
    
    const storySelect = document.getElementById('newTaskStory');
    
    // Set the current story as selected
    for (let i = 0; i < storySelect.options.length; i++) {
        if (storySelect.options[i].value === currentStoryId) {
            storySelect.selectedIndex = i;
            break;
        }
    }
    
    const storyModal = bootstrap.Modal.getInstance(document.getElementById('storyModal'));
    storyModal.hide();
    
    setTimeout(() => {
        const modal = new bootstrap.Modal(document.getElementById('addTaskModal'));
        modal.show();
    }, 500);
}

// Open project modal to view/edit a project
function openProjectModal(projectId) {
    currentProjectId = projectId;
    const project = projectsData.find(p => p.id === projectId);
    
    if (!project) return;
    
    // Fill in form fields
    document.getElementById('projectStatus').value = project.status;
    document.getElementById('projectPriority').value = project.priority;
    document.getElementById('projectStartDate').value = project.startDate || '';
    document.getElementById('projectDueDate').value = project.dueDate || '';
    document.getElementById('projectNotes').value = project.notes || '';
    
    // Set modal title
    document.querySelector('#projectModal .modal-title').textContent = project.name;
    
    // Load project stories
    loadProjectStories(projectId);
    
    // Set update button event
    document.getElementById('updateProjectBtn').onclick = function() {
        updateProject(projectId);
    };
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    modal.show();
}

// Open story modal to view/edit a story
function openStoryModal(storyId) {
    currentStoryId = storyId;
    const story = storiesData.find(s => s.id === storyId);
    
    if (!story) return;
    
    // Fill in form fields
    document.getElementById('storyTitle').value = story.title;
    document.getElementById('storyStatus').value = story.status;
    document.getElementById('storyPriority').value = story.priority;
    document.getElementById('storyStartDate').value = story.startDate || '';
    document.getElementById('storyDueDate').value = story.dueDate || '';
    document.getElementById('storyNotes').value = story.notes || '';
    
    // Load story tasks
    loadStoryTasks(storyId);
    
    // Handle form submission
    document.getElementById('editStoryForm').onsubmit = function(e) {
        e.preventDefault();
        updateStory(storyId);
    };
    
    // Close current modal if open
    if (currentProjectId) {
        const projectModal = bootstrap.Modal.getInstance(document.getElementById('projectModal'));
        if (projectModal) {
            projectModal.hide();
        }
    }
    
    // Show the story modal
    setTimeout(() => {
        const modal = new bootstrap.Modal(document.getElementById('storyModal'));
        modal.show();
    }, 400);
}

// Open task modal to view/edit a task
function openTaskModal(taskId) {
    currentTaskId = taskId;
    const task = tasksData.find(t => t.id === taskId);
    
    if (!task) return;
    
    // Fill in form fields
    document.getElementById('taskTitle').value = task.title;
    document.getElementById('taskStatus').value = task.status;
    document.getElementById('taskPriority').value = task.priority;
    
    // Make sure we have options in the story select
    loadStoriesForSelect();
    
    document.getElementById('taskStory').value = task.storyId;
    document.getElementById('taskStartDate').value = task.startDate || '';
    document.getElementById('taskDueDate').value = task.dueDate || '';
    document.getElementById('taskNotes').value = task.notes || '';
    
    // Handle form submission
    document.getElementById('editTaskForm').onsubmit = function(e) {
        e.preventDefault();
        updateTask(taskId);
    };
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('taskModal'));
    modal.show();
}

// Update project details
function updateProject(projectId) {
    const projectIndex = projectsData.findIndex(p => p.id === projectId);
    
    if (projectIndex === -1) return;
    
    projectsData[projectIndex] = {
        ...projectsData[projectIndex],
        status: document.getElementById('projectStatus').value,
        priority: document.getElementById('projectPriority').value,
        startDate: document.getElementById('projectStartDate').value,
        dueDate: document.getElementById('projectDueDate').value,
        notes: document.getElementById('projectNotes').value,
        updated: new Date().toISOString()
    };
    
    saveData();
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('projectModal'));
    modal.hide();
    
    // Refresh project list
    loadProjects();
    loadDeadlines();
}

// Update story details
function updateStory(storyId) {
    const storyIndex = storiesData.findIndex(s => s.id === storyId);
    
    if (storyIndex === -1) return;
    
    storiesData[storyIndex] = {
        ...storiesData[storyIndex],
        title: document.getElementById('storyTitle').value,
        status: document.getElementById('storyStatus').value,
        priority: document.getElementById('storyPriority').value,
        startDate: document.getElementById('storyStartDate').value,
        dueDate: document.getElementById('storyDueDate').value,
        notes: document.getElementById('storyNotes').value,
        updated: new Date().toISOString()
    };
    
    saveData();
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('storyModal'));
    modal.hide();
    
    // Reload project stories if we're viewing a project
    if (currentProjectId) {
        loadProjectStories(currentProjectId);
    }
    
    loadDeadlines();
}

// Update task details
function updateTask(taskId) {
    const taskIndex = tasksData.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) return;
    
    tasksData[taskIndex] = {
        ...tasksData[taskIndex],
        title: document.getElementById('taskTitle').value,
        storyId: document.getElementById('taskStory').value,
        status: document.getElementById('taskStatus').value,
        priority: document.getElementById('taskPriority').value,
        startDate: document.getElementById('taskStartDate').value,
        dueDate: document.getElementById('taskDueDate').value,
        notes: document.getElementById('taskNotes').value,
        updated: new Date().toISOString()
    };
    
    saveData();
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('taskModal'));
    modal.hide();
    
    // Refresh tasks list
    loadTasksByStatus();
    
    // Reload story tasks if we're viewing a story
    if (currentStoryId) {
        loadStoryTasks(currentStoryId);
    }
    
    loadDeadlines();
}

// Load projects into their respective grids
function loadProjects() {
    // Get all grid containers
    const allProjectsGrid = document.getElementById('allProjectsGrid');
    const workProjectsGrid = document.getElementById('workProjectsGrid');
    const personalProjectsGrid = document.getElementById('personalProjectsGrid');
    const freelanceProjectsGrid = document.getElementById('freelanceProjectsGrid');
    const fitnessProjectsGrid = document.getElementById('fitnessProjectsGrid');
    
    // Get in progress and on hold project containers for dashboard
    const inProgressProjects = document.getElementById('inProgressProjects');
    const onHoldProjects = document.getElementById('onHoldProjects');
    
    if (!allProjectsGrid) return; // Not on projects page
    
    // Clear all grids first
    allProjectsGrid.innerHTML = '';
    if (workProjectsGrid) workProjectsGrid.innerHTML = '';
    if (personalProjectsGrid) personalProjectsGrid.innerHTML = '';
    if (freelanceProjectsGrid) freelanceProjectsGrid.innerHTML = '';
    if (fitnessProjectsGrid) fitnessProjectsGrid.innerHTML = '';
    
    // Populate grids
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        
        // Add to all projects grid
        allProjectsGrid.appendChild(projectCard.cloneNode(true));
        
        // Add to category-specific grid
        if (project.category === 'work' && workProjectsGrid) {
            workProjectsGrid.appendChild(projectCard.cloneNode(true));
        } else if (project.category === 'personal' && personalProjectsGrid) {
            personalProjectsGrid.appendChild(projectCard.cloneNode(true));
        } else if (project.category === 'freelance' && freelanceProjectsGrid) {
            freelanceProjectsGrid.appendChild(projectCard.cloneNode(true));
        } else if (project.category === 'fitness' && fitnessProjectsGrid) {
            fitnessProjectsGrid.appendChild(projectCard.cloneNode(true));
        }
    });
    
    // Load dashboard specific sections if they exist
    if (inProgressProjects) {
        inProgressProjects.innerHTML = '';
        const inProgressProjectsList = projectsData.filter(p => p.status === 'in_progress');
        
        if (inProgressProjectsList.length === 0) {
            inProgressProjects.innerHTML = '<div class="text-center text-muted">No projects in progress</div>';
        } else {
            inProgressProjectsList.forEach(project => {
                inProgressProjects.appendChild(createProjectCard(project));
            });
        }
    }
    
    if (onHoldProjects) {
        onHoldProjects.innerHTML = '';
        const onHoldProjectsList = projectsData.filter(p => p.status === 'on_hold');
        
        if (onHoldProjectsList.length === 0) {
            onHoldProjects.innerHTML = '<div class="text-center text-muted">No projects on hold</div>';
        } else {
            onHoldProjectsList.forEach(project => {
                onHoldProjects.appendChild(createProjectCard(project));
            });
        }
    }
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openProjectModal(project.id);
    
    // Get stories for this project
    const projectStories = storiesData.filter(s => s.projectId === project.id);
    const completedStories = projectStories.filter(s => s.status === 'completed').length;
    const progress = projectStories.length ? Math.round((completedStories / projectStories.length) * 100) : 0;
    
    // Get tasks for this project's stories
    const projectTasks = [];
    projectStories.forEach(story => {
        const storyTasks = tasksData.filter(t => t.storyId === story.id);
        projectTasks.push(...storyTasks);
    });
    
    const daysLeft = project.dueDate ? daysUntilDue(project.dueDate) : null;
    
    card.innerHTML = `
        <div class="project-header">
            <h3 class="project-title">${project.name}</h3>
            <span class="project-status status-${project.status}">${project.status.replace('_', ' ')}</span>
        </div>
        <p class="project-description">${project.description || 'No description provided'}</p>
        <div class="project-stats">
            <div class="stat-item">
                <i class="fas fa-bookmark"></i>
                <span>${projectStories.length} stories</span>
            </div>
            <div class="stat-item">
                <i class="fas fa-tasks"></i>
                <span>${projectTasks.length} tasks</span>
            </div>
            ${project.dueDate ? `
            <div class="stat-item">
                <i class="fas fa-calendar"></i>
                <span>${daysLeft > 0 ? daysLeft + ' days left' : daysLeft === 0 ? 'Due today' : Math.abs(daysLeft) + ' days overdue'}</span>
            </div>
            ` : ''}
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
    `;
    
    // Add priority color
    card.classList.add(`priority-${project.priority}`);
    
    return card;
}

// Load stories for a project
function loadProjectStories(projectId) {
    const storiesList = document.getElementById('storiesList');
    
    if (!storiesList) return;
    
    storiesList.innerHTML = '';
    
    // Get stories for this project
    const projectStories = storiesData.filter(s => s.projectId === projectId);
    
    if (projectStories.length === 0) {
        storiesList.innerHTML = '<div class="text-center text-muted">No stories added yet</div>';
        return;
    }
    
    // Sort stories by status and priority
    projectStories.sort((a, b) => {
        const statusOrder = {
            'in_progress': 0,
            'not_started': 1,
            'backlog': 2,
            'on_hold': 3,
            'blocked': 4,
            'completed': 5
        };
        
        const priorityOrder = {
            'urgent': 0,
            'high': 1,
            'medium': 2,
            'low': 3
        };
        
        // First sort by status
        const statusDiff = statusOrder[a.status] - statusOrder[b.status];
        
        if (statusDiff !== 0) return statusDiff;
        
        // Then by priority
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    
    // Add each story to the list
    projectStories.forEach(story => {
        const storyItem = document.createElement('div');
        storyItem.className = `story-item priority-${story.priority}`;
        storyItem.onclick = (e) => {
            e.stopPropagation();
            openStoryModal(story.id);
        };
        
        // Get tasks for this story
        const storyTasks = tasksData.filter(t => t.storyId === story.id);
        const completedTasks = storyTasks.filter(t => t.status === 'completed').length;
        
        storyItem.innerHTML = `
            <div class="story-title">${story.title}</div>
            <div class="story-meta">
                <span><i class="fas fa-layer-group"></i> ${story.status.replace('_', ' ')}</span>
                <span><i class="fas fa-tasks"></i> ${completedTasks}/${storyTasks.length} tasks</span>
                ${story.dueDate ? `<span><i class="fas fa-calendar"></i> ${formatDate(story.dueDate)}</span>` : ''}
            </div>
        `;
        
        storiesList.appendChild(storyItem);
    });
}

// Load tasks for a story
function loadStoryTasks(storyId) {
    const tasksList = document.getElementById('storyTasksList');
    
    if (!tasksList) return;
    
    tasksList.innerHTML = '';
    
    // Get tasks for this story
    const storyTasks = tasksData.filter(t => t.storyId === storyId);
    
    if (storyTasks.length === 0) {
        tasksList.innerHTML = '<div class="text-center text-muted">No tasks added yet</div>';
        return;
    }
    
    // Sort tasks by status and priority
    storyTasks.sort((a, b) => {
        const statusOrder = {
            'in_progress': 0,
            'not_started': 1,
            'backlog': 2,
            'on_hold': 3,
            'blocked': 4,
            'completed': 5
        };
        
        const priorityOrder = {
            'urgent': 0,
            'high': 1,
            'medium': 2,
            'low': 3
        };
        
        // First sort by status
        const statusDiff = statusOrder[a.status] - statusOrder[b.status];
        
        if (statusDiff !== 0) return statusDiff;
        
        // Then by priority
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    
    // Add each task to the list
    storyTasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item priority-${task.priority}`;
        taskItem.onclick = (e) => {
            e.stopPropagation();
            openTaskModal(task.id);
        };
        
        taskItem.innerHTML = `
            <div class="task-title">${task.title}</div>
            <div class="task-meta">
                <span class="badge status-${task.status}">${task.status.replace('_', ' ')}</span>
                ${task.dueDate ? `<span><i class="fas fa-calendar"></i> ${formatDate(task.dueDate)}</span>` : ''}
            </div>
        `;
        
        tasksList.appendChild(taskItem);
    });
}

// Load tasks by status for Kanban board
function loadTasksByStatus() {
    // Get all kanban containers
    const backlogTasks = document.getElementById('backlogTasks');
    const notStartedTasks = document.getElementById('notStartedTasks');
    const inProgressTasks = document.getElementById('inProgressTasks');
    const onHoldTasks = document.getElementById('onHoldTasks');
    const blockedTasks = document.getElementById('blockedTasks');
    const completedTasks = document.getElementById('completedTasks');
    
    // Also get the dashboard task lists
    const inProgressTasksList = document.getElementById('inProgressTasksList');
    const onHoldTasksList = document.getElementById('onHoldTasksList');
    
    // Check if we're on the tasks page
    if (!backlogTasks && !inProgressTasksList) return;
    
    // Clear all containers first if they exist
    if (backlogTasks) backlogTasks.innerHTML = '';
    if (notStartedTasks) notStartedTasks.innerHTML = '';
    if (inProgressTasks) inProgressTasks.innerHTML = '';
    if (onHoldTasks) onHoldTasks.innerHTML = '';
    if (blockedTasks) blockedTasks.innerHTML = '';
    if (completedTasks) completedTasks.innerHTML = '';
    
    // Populate kanban columns by task status
    tasksData.forEach(task => {
        const taskElement = createTaskElement(task);
        
        // Add to the appropriate column based on status
        switch (task.status) {
            case 'backlog':
                if (backlogTasks) backlogTasks.appendChild(taskElement.cloneNode(true));
                break;
            case 'not_started':
                if (notStartedTasks) notStartedTasks.appendChild(taskElement.cloneNode(true));
                break;
            case 'in_progress':
                if (inProgressTasks) inProgressTasks.appendChild(taskElement.cloneNode(true));
                break;
            case 'on_hold':
                if (onHoldTasks) onHoldTasks.appendChild(taskElement.cloneNode(true));
                break;
            case 'blocked':
                if (blockedTasks) blockedTasks.appendChild(taskElement.cloneNode(true));
                break;
            case 'completed':
                if (completedTasks) completedTasks.appendChild(taskElement.cloneNode(true));
                break;
        }
    });
    
    // Populate dashboard task lists if they exist
    if (inProgressTasksList) {
        inProgressTasksList.innerHTML = '';
        const inProgressTasksFiltered = tasksData.filter(t => t.status === 'in_progress');
        
        if (inProgressTasksFiltered.length === 0) {
            inProgressTasksList.innerHTML = '<div class="text-center text-muted">No tasks in progress</div>';
        } else {
            // Sort by priority
            inProgressTasksFiltered.sort((a, b) => {
                const priorityOrder = {
                    'urgent': 0,
                    'high': 1,
                    'medium': 2,
                    'low': 3
                };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            });
            
            inProgressTasksFiltered.forEach(task => {
                inProgressTasksList.appendChild(createTaskElement(task));
            });
        }
    }
    
    if (onHoldTasksList) {
        onHoldTasksList.innerHTML = '';
        const onHoldTasksFiltered = tasksData.filter(t => t.status === 'on_hold');
        
        if (onHoldTasksFiltered.length === 0) {
            onHoldTasksList.innerHTML = '<div class="text-center text-muted">No tasks on hold</div>';
        } else {
            // Sort by priority
            onHoldTasksFiltered.sort((a, b) => {
                const priorityOrder = {
                    'urgent': 0,
                    'high': 1,
                    'medium': 2,
                    'low': 3
                };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            });
            
            onHoldTasksFiltered.forEach(task => {
                onHoldTasksList.appendChild(createTaskElement(task));
            });
        }
    }
}

// Create a task element
function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.className = `task-item priority-${task.priority}`;
    taskElement.onclick = () => openTaskModal(task.id);
    
    // Get story and project info
    const story = storiesData.find(s => s.id === task.storyId);
    let projectName = 'Unknown Project';
    if (story) {
        const project = projectsData.find(p => p.id === story.projectId);
        if (project) {
            projectName = project.name;
        }
    }
    
    taskElement.innerHTML = `
        <div class="task-title">${task.title}</div>
        <div class="task-meta">
            <div><i class="fas fa-folder"></i> ${projectName}</div>
            ${story ? `<div><i class="fas fa-bookmark"></i> ${story.title}</div>` : ''}
            ${task.dueDate ? `<div><i class="fas fa-calendar"></i> ${formatDate(task.dueDate)}</div>` : ''}
        </div>
    `;
    
    return taskElement;
}

// Load upcoming deadlines
function loadDeadlines() {
    const deadlinesTable = document.getElementById('deadlinesTable');
    
    if (!deadlinesTable) return;
    
    deadlinesTable.innerHTML = '';
    
    // Get items with due dates within the next 2 weeks
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const twoWeeksLater = new Date(today);
    twoWeeksLater.setDate(twoWeeksLater.getDate() + 14);
    
    // Gather all items with due dates
    const itemsWithDueDates = [];
    
    // Add projects
    projectsData.forEach(project => {
        if (project.dueDate) {
            const dueDate = new Date(project.dueDate);
            if (dueDate >= today && dueDate <= twoWeeksLater) {
                itemsWithDueDates.push({
                    type: 'project',
                    item: project,
                    dueDate: dueDate
                });
            }
        }
    });
    
    // Add stories
    storiesData.forEach(story => {
        if (story.dueDate) {
            const dueDate = new Date(story.dueDate);
            if (dueDate >= today && dueDate <= twoWeeksLater) {
                // Get associated project
                const project = projectsData.find(p => p.id === story.projectId);
                
                itemsWithDueDates.push({
                    type: 'story',
                    item: story,
                    project: project,
                    dueDate: dueDate
                });
            }
        }
    });
    
    // Add tasks
    tasksData.forEach(task => {
        if (task.dueDate) {
            const dueDate = new Date(task.dueDate);
            if (dueDate >= today && dueDate <= twoWeeksLater) {
                // Get associated story and project
                const story = storiesData.find(s => s.id === task.storyId);
                let project = null;
                if (story) {
                    project = projectsData.find(p => p.id === story.projectId);
                }
                
                itemsWithDueDates.push({
                    type: 'task',
                    item: task,
                    story: story,
                    project: project,
                    dueDate: dueDate
                });
            }
        }
    });
    
    // Sort by due date (closest first)
    itemsWithDueDates.sort((a, b) => a.dueDate - b.dueDate);
    
    // Add to table
    if (itemsWithDueDates.length === 0) {
        deadlinesTable.innerHTML = `
            <tr>
                <td colspan="6" class="text-center">No upcoming deadlines in the next 2 weeks</td>
            </tr>
        `;
        return;
    }
    
    itemsWithDueDates.forEach(item => {
        const row = document.createElement('tr');
        
        // Format area/category
        let area = '';
        if (item.project) {
            switch (item.project.category) {
                case 'work':
                    area = '<i class="fas fa-briefcase"></i> Work';
                    break;
                case 'personal':
                    area = '<i class="fas fa-user"></i> Personal';
                    break;
                case 'freelance':
                    area = '<i class="fas fa-laptop-code"></i> Freelance';
                    break;
                case 'fitness':
                    area = '<i class="fas fa-dumbbell"></i> Fitness';
                    break;
                default:
                    area = item.project.category;
            }
        }
        
        // Format type icon
        let typeIcon = '';
        switch (item.type) {
            case 'project':
                typeIcon = '<i class="fas fa-project-diagram"></i> Project';
                break;
            case 'story':
                typeIcon = '<i class="fas fa-bookmark"></i> Story';
                break;
            case 'task':
                typeIcon = '<i class="fas fa-tasks"></i> Task';
                break;
        }
        
        // Format days until due
        const daysLeft = daysUntilDue(item.dueDate);
        let dueDisplay = `${formatDate(item.dueDate)} (${daysLeft} days)`;
        
        if (daysLeft <= 3) {
            dueDisplay = `<span class="text-danger fw-bold">${dueDisplay}</span>`;
        }
        
        // Create actions button based on type
        let viewFunction;
        switch (item.type) {
            case 'project':
                viewFunction = `openProjectModal('${item.item.id}')`;
                break;
            case 'story':
                viewFunction = `openStoryModal('${item.item.id}')`;
                break;
            case 'task':
                viewFunction = `openTaskModal('${item.item.id}')`;
                break;
        }
        
        row.innerHTML = `
            <td>${item.item.name || item.item.title}</td>
            <td>${typeIcon}</td>
            <td>${area}</td>
            <td>${dueDisplay}</td>
            <td><span class="badge status-${item.item.status}">${item.item.status.replace('_', ' ')}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="${viewFunction}">
                    View
                </button>
            </td>
        `;
        
        deadlinesTable.appendChild(row);
    });
}

// Initialize dashboard stats
function initDashboardStats() {
    // Get stats containers
    const totalProjectsElement = document.querySelector('.stat-card:nth-child(1) .stat-value');
    const activeProjectsElement = document.querySelector('.stat-card:nth-child(2) .stat-value');
    const tasksInProgressElement = document.querySelector('.stat-card:nth-child(3) .stat-value');
    const onHoldTasksElement = document.querySelector('.stat-card:nth-child(4) .stat-value');
    
    if (!totalProjectsElement) return; // Not on dashboard
    
    // Calculate stats
    const totalProjects = projectsData.length;
    const activeProjects = projectsData.filter(p => p.status === 'in_progress').length;
    const tasksInProgress = tasksData.filter(t => t.status === 'in_progress').length;
    const onHoldTasks = tasksData.filter(t => t.status === 'on_hold').length;
    
    // Update stats in UI
    totalProjectsElement.textContent = totalProjects;
    activeProjectsElement.textContent = activeProjects;
    tasksInProgressElement.textContent = tasksInProgress;
    onHoldTasksElement.textContent = onHoldTasks;
}

// Initialize page based on URL
function initPage() {
    // Get the current page from URL
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    
    loadProjectsForSelect();
    loadStoriesForSelect();
    
    // Initialize page based on current page
    if (page === 'index.html' || page === '') {
        // Dashboard
        initDashboardStats();
        loadProjects();
        loadTasksByStatus();
        loadDeadlines();
    } else if (page === 'projects.html') {
        // Projects page
        loadProjects();
    } else if (page === 'tasks.html') {
        // Tasks page
        loadTasksByStatus();
    }
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initPage();
    
    // Handle edit task form submission
    if (document.getElementById('editTaskForm')) {
        document.getElementById('editTaskForm').addEventListener('submit', function(e) {
            e.preventDefault();
            if (currentTaskId) {
                updateTask(currentTaskId);
            }
        });
    }
    
    // Handle edit story form submission
    if (document.getElementById('editStoryForm')) {
        document.getElementById('editStoryForm').addEventListener('submit', function(e) {
            e.preventDefault();
            if (currentStoryId) {
                updateStory(currentStoryId);
            }
        });
    }
    
    // Load sample data if the storage is empty
    if (projectsData.length === 0) {
        loadSampleData();
    }
});

// Load sample data for demonstration
function loadSampleData() {
    // Sample projects
    const projects = [
        {
            id: 'proj1',
            name: 'Website Redesign',
            description: 'Revamp the company website with modern design and improved UX',
            category: 'work',
            status: 'in_progress',
            priority: 'high',
            startDate: '2025-05-10',
            dueDate: '2025-06-15',
            notes: 'Focus on mobile responsiveness and performance optimization',
            created: '2025-05-08T09:00:00Z',
            updated: '2025-05-08T09:00:00Z'
        },
        {
            id: 'proj2',
            name: 'Home Renovation',
            description: 'Renovate the kitchen and bathroom',
            category: 'personal',
            status: 'on_hold',
            priority: 'medium',
            startDate: '2025-07-01',
            dueDate: '2025-08-30',
            notes: 'Waiting for contractor availability',
            created: '2025-05-05T14:30:00Z',
            updated: '2025-05-05T14:30:00Z'
        },
        {
            id: 'proj3',
            name: 'Client E-commerce Site',
            description: 'Build custom e-commerce platform for fashion retailer',
            category: 'freelance',
            status: 'in_progress',
            priority: 'urgent',
            startDate: '2025-05-01',
            dueDate: '2025-06-20',
            notes: 'Client needs the first version before their marketing campaign',
            created: '2025-04-28T11:15:00Z',
            updated: '2025-05-01T09:30:00Z'
        },
        {
            id: 'proj4',
            name: 'Marathon Training',
            description: 'Prepare for the fall marathon',
            category: 'fitness',
            status: 'in_progress',
            priority: 'medium',
            startDate: '2025-04-15',
            dueDate: '2025-10-10',
            notes: 'Follow the 24-week training plan',
            created: '2025-04-10T08:45:00Z',
            updated: '2025-04-10T08:45:00Z'
        }
    ];
    
    // Sample stories
    const stories = [
        {
            id: 'story1',
            projectId: 'proj1',
            title: 'Homepage Redesign',
            status: 'in_progress',
            priority: 'high',
            startDate: '2025-05-10',
            dueDate: '2025-05-25',
            notes: 'Focus on hero section and call-to-action buttons',
            created: '2025-05-08T10:00:00Z',
            updated: '2025-05-08T10:00:00Z'
        },
        {
            id: 'story2',
            projectId: 'proj1',
            title: 'Product Page Optimization',
            status: 'not_started',
            priority: 'medium',
            startDate: '2025-05-26',
            dueDate: '2025-06-05',
            notes: 'Improve product filtering and search functionality',
            created: '2025-05-08T10:15:00Z',
            updated: '2025-05-08T10:15:00Z'
        },
        {
            id: 'story3',
            projectId: 'proj3',
            title: 'Shopping Cart Implementation',
            status: 'in_progress',
            priority: 'urgent',
            startDate: '2025-05-05',
            dueDate: '2025-05-20',
            notes: 'Implement secure checkout process',
            created: '2025-05-01T10:00:00Z',
            updated: '2025-05-01T10:00:00Z'
        },
        {
            id: 'story4',
            projectId: 'proj4',
            title: 'Weekly Running Schedule',
            status: 'in_progress',
            priority: 'high',
            startDate: '2025-04-15',
            dueDate: '2025-10-05',
            notes: 'Follow the progressive distance plan',
            created: '2025-04-10T09:00:00Z',
            updated: '2025-04-10T09:00:00Z'
        }
    ];
    
    // Sample tasks
    const tasks = [
        {
            id: 'task1',
            storyId: 'story1',
            title: 'Design hero section mockup',
            status: 'completed',
            priority: 'high',
            startDate: '2025-05-10',
            dueDate: '2025-05-15',
            notes: 'Create in Figma with mobile-first approach',
            created: '2025-05-08T11:00:00Z',
            updated: '2025-05-12T15:30:00Z'
        },
        {
            id: 'task2',
            storyId: 'story1',
            title: 'Implement hero section HTML/CSS',
            status: 'in_progress',
            priority: 'high',
            startDate: '2025-05-16',
            dueDate: '2025-05-20',
            notes: 'Use CSS Grid and Flexbox for responsive layout',
            created: '2025-05-08T11:15:00Z',
            updated: '2025-05-16T09:30:00Z'
        },
        {
            id: 'task3',
            storyId: 'story1',
            title: 'Optimize hero images',
            status: 'not_started',
            priority: 'medium',
            startDate: '2025-05-20',
            dueDate: '2025-05-22',
            notes: 'Compress and create responsive image sizes',
            created: '2025-05-08T11:30:00Z',
            updated: '2025-05-08T11:30:00Z'
        },
        {
            id: 'task4',
            storyId: 'story3',
            title: 'Design shopping cart UI',
            status: 'completed',
            priority: 'urgent',
            startDate: '2025-05-05',
            dueDate: '2025-05-10',
            notes: 'Focus on clear item display and easy quantity adjustment',
            created: '2025-05-01T11:00:00Z',
            updated: '2025-05-09T16:45:00Z'
        },
        {
            id: 'task5',
            storyId: 'story3',
            title: 'Implement cart functionality',
            status: 'in_progress',
            priority: 'urgent',
            startDate: '2025-05-11',
            dueDate: '2025-05-18',
            notes: 'Use React context for state management',
            created: '2025-05-01T11:15:00Z',
            updated: '2025-05-11T10:00:00Z'
        },
        {
            id: 'task6',
            storyId: 'story4',
            title: 'Monday 5k run',
            status: 'on_hold',
            priority: 'medium',
            startDate: '2025-05-20',
            dueDate: '2025-05-20',
            notes: 'Feeling sick today, will reschedule',
            created: '2025-04-10T09:15:00Z',
            updated: '2025-05-20T07:00:00Z'
        }
    ];
    
    // Save sample data to storage
    projectsData = projects;
    storiesData = stories;
    tasksData = tasks;
    saveData();
    
    // Refresh the UI
    initPage();
}
