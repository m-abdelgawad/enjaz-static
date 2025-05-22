
// Data Storage
let projects = [
    {
        id: 1,
        name: "Website Redesign",
        description: "Complete overhaul of company website with modern design and improved UX",
        area: "work",
        status: "in_progress",
        priority: "high",
        start_date: "2024-01-01",
        due_date: "2024-02-15",
        notes: "Need to focus on mobile responsiveness and accessibility",
        created_at: "2023-12-15T10:30:00",
        updated_at: "2024-01-05T14:22:00",
        stories: [
            {
                id: 1,
                title: "User Research and Analysis",
                description: "Conduct user interviews and analyze current website performance",
                status: "completed",
                priority: "high",
                start_date: "2024-01-01",
                due_date: "2024-01-10",
                notes: "Completed ahead of schedule",
                created_at: "2023-12-16T09:15:00",
                updated_at: "2024-01-10T16:30:00",
                tasks: [
                    { 
                        id: 1, 
                        title: "Create user survey", 
                        status: "completed",
                        priority: "medium",
                        start_date: "2024-01-01",
                        due_date: "2024-01-03", 
                        notes: "Used Google Forms",
                        created_at: "2023-12-18T11:20:00",
                        updated_at: "2024-01-03T15:45:00"
                    },
                    { 
                        id: 2, 
                        title: "Conduct 10 user interviews", 
                        status: "completed",
                        priority: "high",
                        start_date: "2024-01-04",
                        due_date: "2024-01-07",
                        notes: "Recorded all sessions",
                        created_at: "2023-12-20T14:10:00",
                        updated_at: "2024-01-07T17:30:00"
                    },
                    { 
                        id: 3, 
                        title: "Analyze current analytics", 
                        status: "completed",
                        priority: "medium", 
                        start_date: "2024-01-08",
                        due_date: "2024-01-10",
                        notes: "Used Google Analytics data",
                        created_at: "2024-01-02T10:45:00",
                        updated_at: "2024-01-10T13:15:00"
                    }
                ]
            },
            {
                id: 2,
                title: "Design System Creation",
                description: "Create a comprehensive design system for the new website",
                status: "in_progress",
                priority: "high",
                start_date: "2024-01-11",
                due_date: "2024-01-25",
                notes: "Following Material Design principles",
                created_at: "2024-01-05T09:30:00",
                updated_at: "2024-01-15T11:45:00",
                tasks: [
                    { 
                        id: 4, 
                        title: "Define color palette", 
                        status: "completed",
                        priority: "medium",
                        start_date: "2024-01-11",
                        due_date: "2024-01-13",
                        notes: "Selected brand colors plus complementary palette",
                        created_at: "2024-01-10T14:20:00",
                        updated_at: "2024-01-13T16:30:00"
                    },
                    { 
                        id: 5, 
                        title: "Create typography scale", 
                        status: "in_progress",
                        priority: "medium",
                        start_date: "2024-01-14",
                        due_date: "2024-01-18",
                        notes: "Using system fonts for better performance",
                        created_at: "2024-01-13T10:15:00",
                        updated_at: "2024-01-16T11:20:00"
                    },
                    { 
                        id: 6, 
                        title: "Design component library", 
                        status: "backlog",
                        priority: "high",
                        start_date: "2024-01-19",
                        due_date: "2024-01-25",
                        notes: "Will use Figma for components",
                        created_at: "2024-01-14T09:45:00",
                        updated_at: "2024-01-14T09:45:00"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Mobile App Development",
        description: "Native iOS and Android app for customer engagement",
        area: "work",
        status: "not_started",
        priority: "medium",
        start_date: "2024-03-01",
        due_date: "2024-04-30",
        notes: "Need to hire an iOS developer",
        created_at: "2023-12-20T16:45:00",
        updated_at: "2024-01-10T09:30:00",
        stories: [
            {
                id: 3,
                title: "Technical Architecture",
                description: "Define the technical stack and architecture",
                status: "backlog",
                priority: "high",
                start_date: null,
                due_date: null,
                notes: "Considering React Native vs native development",
                created_at: "2024-01-05T11:20:00",
                updated_at: "2024-01-05T11:20:00",
                tasks: []
            }
        ]
    },
    {
        id: 3,
        name: "API Documentation",
        description: "Comprehensive documentation for our REST API",
        area: "work",
        status: "in_progress",
        priority: "medium",
        start_date: "2024-01-05",
        due_date: "2024-01-20",
        notes: "Use Swagger for interactive documentation",
        created_at: "2023-12-28T10:15:00",
        updated_at: "2024-01-06T14:30:00",
        stories: []
    },
    {
        id: 4,
        name: "Learn Spanish",
        description: "Achieve conversational fluency in Spanish",
        area: "personal",
        status: "in_progress",
        priority: "medium",
        start_date: "2024-01-01",
        due_date: "2024-06-01",
        notes: "Practice daily for at least 30 minutes",
        created_at: "2023-12-30T18:20:00",
        updated_at: "2024-01-02T19:45:00",
        stories: [
            {
                id: 4,
                title: "Complete Duolingo Course",
                description: "Finish the entire Spanish course on Duolingo",
                status: "in_progress",
                priority: "medium",
                start_date: "2024-01-01",
                due_date: "2024-03-31",
                notes: "Currently on Unit 2",
                created_at: "2023-12-30T18:25:00",
                updated_at: "2024-01-10T20:15:00",
                tasks: [
                    { 
                        id: 7, 
                        title: "Complete Unit 1", 
                        status: "completed",
                        priority: "medium",
                        start_date: "2024-01-01", 
                        due_date: "2024-01-15",
                        notes: "Finished basic greetings and introductions",
                        created_at: "2023-12-30T18:30:00",
                        updated_at: "2024-01-15T21:10:00"
                    },
                    { 
                        id: 8, 
                        title: "Complete Unit 2", 
                        status: "in_progress",
                        priority: "medium",
                        start_date: "2024-01-16",
                        due_date: "2024-02-15",
                        notes: "Working on food vocabulary and restaurant phrases",
                        created_at: "2024-01-15T21:15:00",
                        updated_at: "2024-01-20T19:40:00"
                    },
                    { 
                        id: 9, 
                        title: "Complete Unit 3", 
                        status: "backlog",
                        priority: "medium",
                        start_date: "2024-02-16",
                        due_date: "2024-03-31",
                        notes: "Will focus on travel vocabulary",
                        created_at: "2024-01-15T21:20:00",
                        updated_at: "2024-01-15T21:20:00"
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Home Gym Setup",
        description: "Create a functional home gym space",
        area: "fitness",
        status: "not_started",
        priority: "low",
        start_date: "2024-02-01",
        due_date: "2024-03-01",
        notes: "Budget: $1,500",
        created_at: "2024-01-05T08:45:00",
        updated_at: "2024-01-05T08:45:00",
        stories: []
    }
];

let currentCategory = 'work';
let currentProject = null;
let currentStory = null;
let taskIdCounter = 10;
let storyIdCounter = 6;
let projectIdCounter = 11;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    updateNavigationBadges();
    populateProjectOptions();
});

// API Utilities for future Django REST API integration
const API = {
    baseUrl: '/api/v1',
    
    // Projects
    async getProjects() {
        // In future, this will fetch from the Django API
        // return await fetch(`${this.baseUrl}/projects/`).then(res => res.json());
        return projects;
    },
    
    async getProject(id) {
        // return await fetch(`${this.baseUrl}/projects/${id}/`).then(res => res.json());
        return projects.find(p => p.id === id);
    },
    
    async createProject(projectData) {
        // In future, this will post to the Django API
        /*
        return await fetch(`${this.baseUrl}/projects/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData)
        }).then(res => res.json());
        */
        
        const newProject = {
            id: projectIdCounter++,
            ...projectData,
            stories: [],
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        
        projects.push(newProject);
        return newProject;
    },
    
    async updateProject(id, projectData) {
        // In future, this will patch to the Django API
        /*
        return await fetch(`${this.baseUrl}/projects/${id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectData)
        }).then(res => res.json());
        */
        
        const project = projects.find(p => p.id === id);
        if (project) {
            Object.assign(project, projectData, { updated_at: new Date().toISOString() });
            return project;
        }
        return null;
    },
    
    // Stories
    async createStory(storyData) {
        // In future, this will post to the Django API
        /*
        return await fetch(`${this.baseUrl}/stories/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(storyData)
        }).then(res => res.json());
        */
        
        const newStory = {
            id: storyIdCounter++,
            ...storyData,
            tasks: [],
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        
        const project = projects.find(p => p.id === storyData.project_id);
        if (project) {
            project.stories.push(newStory);
            return newStory;
        }
        return null;
    },
    
    async updateStory(id, storyData) {
        // In future, this will patch to the Django API
        /*
        return await fetch(`${this.baseUrl}/stories/${id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(storyData)
        }).then(res => res.json());
        */
        
        let updatedStory = null;
        
        projects.forEach(project => {
            const story = project.stories.find(s => s.id === id);
            if (story) {
                Object.assign(story, storyData, { updated_at: new Date().toISOString() });
                updatedStory = story;
            }
        });
        
        return updatedStory;
    },
    
    // Tasks
    async createTask(taskData) {
        // In future, this will post to the Django API
        /*
        return await fetch(`${this.baseUrl}/tasks/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData)
        }).then(res => res.json());
        */
        
        const newTask = {
            id: taskIdCounter++,
            ...taskData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        
        let taskAdded = false;
        
        projects.forEach(project => {
            const story = project.stories.find(s => s.id === taskData.story_id);
            if (story) {
                story.tasks.push(newTask);
                taskAdded = true;
            }
        });
        
        return taskAdded ? newTask : null;
    },
    
    async updateTask(id, taskData) {
        // In future, this will patch to the Django API
        /*
        return await fetch(`${this.baseUrl}/tasks/${id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData)
        }).then(res => res.json());
        */
        
        let updatedTask = null;
        
        projects.forEach(project => {
            project.stories.forEach(story => {
                const task = story.tasks.find(t => t.id === id);
                if (task) {
                    Object.assign(task, taskData, { updated_at: new Date().toISOString() });
                    updatedTask = task;
                }
            });
        });
        
        return updatedTask;
    }
};

// Navigation functionality
document.querySelectorAll('.nav-link[data-category]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Update active state
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        // Update current category
        currentCategory = this.dataset.category;
        updateCategoryTitle();
        renderProjects();
    });
});

function updateCategoryTitle() {
    const categoryNames = {
        work: 'Work Projects',
        personal: 'Personal Projects',
        freelance: 'Freelancing Projects',
        fitness: 'Fitness Goals'
    };
    
    document.querySelector('.current-category').textContent = categoryNames[currentCategory];
}

function updateNavigationBadges() {
    const categoryCounts = {
        work: projects.filter(p => p.area === 'work').length,
        personal: projects.filter(p => p.area === 'personal').length,
        freelance: projects.filter(p => p.area === 'freelance').length,
        fitness: projects.filter(p => p.area === 'fitness').length
    };
    
    Object.keys(categoryCounts).forEach(category => {
        const link = document.querySelector(`[data-category="${category}"]`);
        if (link) {
            const badge = link.querySelector('.badge');
            if (badge) {
                badge.textContent = categoryCounts[category];
            }
        }
    });
}

// Project rendering
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const filteredProjects = projects.filter(p => p.area === currentCategory);
    
    if (filteredProjects.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center">
                <div class="empty-state py-5">
                    <i class="fas fa-folder-open fa-3x text-muted mb-3"></i>
                    <h4 class="text-muted">No projects yet</h4>
                    <p class="text-muted">Create your first project to get started!</p>
                    <button class="btn btn-primary mt-3" onclick="showAddProjectModal()">
                        <i class="fas fa-plus me-2"></i>Create Project
                    </button>
                </div>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredProjects.map(project => {
        const totalTasks = project.stories.reduce((sum, story) => sum + story.tasks.length, 0);
        const completedTasks = project.stories.reduce((sum, story) => 
            sum + story.tasks.filter(task => task.status === 'completed').length, 0);
        const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
        
        return `
            <div class="project-card priority-${project.priority}" onclick="openProject(${project.id})">
                <div class="project-header">
                    <h3 class="project-title">${project.name}</h3>
                    <span class="project-status status-${project.status}">${formatStatus(project.status)}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-stats">
                    <div class="stat-item">
                        <i class="fas fa-bookmark"></i>
                        <span>${project.stories.length} stories</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-tasks"></i>
                        <span>${completedTasks}/${totalTasks} tasks</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-flag"></i>
                        <span>${formatPriority(project.priority)}</span>
                    </div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <div class="meta-info">
                    Created: ${formatDate(project.created_at)} | Updated: ${formatDate(project.updated_at)}
                </div>
            </div>
        `;
    }).join('');
}

// Format utilities
function formatStatus(status) {
    return status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function formatPriority(priority) {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
}

function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString();
}

// Project modal functionality
function openProject(projectId) {
    currentProject = projects.find(p => p.id === projectId);
    if (!currentProject) return;
    
    // Update modal title
    document.querySelector('#projectModal .modal-title').textContent = currentProject.name;
    
    // Update project info
    document.getElementById('projectStatus').value = currentProject.status;
    document.getElementById('projectPriority').value = currentProject.priority;
    document.getElementById('projectStartDate').value = currentProject.start_date || '';
    document.getElementById('projectDueDate').value = currentProject.due_date || '';
    document.getElementById('projectNotes').value = currentProject.notes || '';
    
    // Render stories
    renderStories();
    
    // Show modal
    new bootstrap.Modal(document.getElementById('projectModal')).show();
}

function renderStories() {
    const storiesList = document.getElementById('storiesList');
    
    if (currentProject.stories.length === 0) {
        storiesList.innerHTML = `
            <div class="text-center py-4">
                <i class="fas fa-bookmark fa-2x text-muted mb-3"></i>
                <p class="text-muted">No stories yet. Create your first story!</p>
            </div>
        `;
        return;
    }
    
    storiesList.innerHTML = currentProject.stories.map(story => `
        <div class="story-item" onclick="openStory(${story.id})">
            <div class="story-title">${story.title}</div>
            <div class="story-meta">
                <span class="story-priority">${formatPriority(story.priority)}</span>
                <span>Status: ${formatStatus(story.status)}</span>
                <span>${story.tasks.length} tasks</span>
            </div>
            <div class="meta-info">
                Due: ${formatDate(story.due_date)}
            </div>
        </div>
    `).join('');
}

// Story modal functionality
function openStory(storyId) {
    currentStory = currentProject.stories.find(s => s.id === storyId);
    if (!currentStory) return;
    
    // Update modal title
    document.querySelector('#storyModal .modal-title').textContent = currentStory.title;
    
    // Update story info
    document.getElementById('storyTitle').value = currentStory.title;
    document.getElementById('storyStatus').value = currentStory.status;
    document.getElementById('storyPriority').value = currentStory.priority;
    document.getElementById('storyStartDate').value = currentStory.start_date || '';
    document.getElementById('storyDueDate').value = currentStory.due_date || '';
    document.getElementById('storyNotes').value = currentStory.notes || '';
    
    // Render tasks
    renderTasks();
    
    // Show modal
    new bootstrap.Modal(document.getElementById('storyModal')).show();
}

function renderTasks() {
    const todoTasks = document.getElementById('todoTasks');
    const inProgressTasks = document.getElementById('inProgressTasks');
    const doneTasks = document.getElementById('doneTasks');
    
    // Clear existing tasks
    todoTasks.innerHTML = '';
    inProgressTasks.innerHTML = '';
    doneTasks.innerHTML = '';
    
    currentStory.tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        
        if (task.status === 'completed') {
            doneTasks.appendChild(taskElement);
        } else if (task.status === 'in_progress') {
            inProgressTasks.appendChild(taskElement);
        } else {
            todoTasks.appendChild(taskElement);
        }
    });
}

function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = `task-item priority-${task.priority}`;
    div.draggable = true;
    div.dataset.taskId = task.id;
    div.innerHTML = `
        <div class="task-title">${task.title}</div>
        <div class="task-meta">
            <span>Priority: ${formatPriority(task.priority)}</span>
            ${task.due_date ? `<span>Due: ${formatDate(task.due_date)}</span>` : ''}
        </div>
    `;
    
    // Add drag event listeners
    div.addEventListener('dragstart', dragStart);
    div.addEventListener('dragend', dragEnd);
    
    return div;
}

// Drag and drop functionality
function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.taskId);
    e.target.classList.add('dragging');
}

function dragEnd(e) {
    e.target.classList.remove('dragging');
}

function allowDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
}

function drop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const taskId = parseInt(e.dataTransfer.getData('text/plain'));
    const newStatus = getStatusFromDropZone(e.currentTarget.id);
    
    // Update task status
    const task = currentStory.tasks.find(t => t.id === taskId);
    if (task) {
        API.updateTask(task.id, { status: newStatus });
        renderTasks();
        
        // Save to localStorage (in a real app, this would be an API call)
        localStorage.setItem('projects', JSON.stringify(projects));
    }
}

function getStatusFromDropZone(dropZoneId) {
    switch(dropZoneId) {
        case 'todoTasks': return 'backlog';
        case 'inProgressTasks': return 'in_progress';
        case 'doneTasks': return 'completed';
        default: return 'backlog';
    }
}

// Add drag over event listeners
document.addEventListener('dragover', function(e) {
    if (e.target.classList.contains('kanban-tasks')) {
        allowDrop(e);
    }
});

document.addEventListener('dragleave', function(e) {
    if (e.target.classList.contains('kanban-tasks')) {
        e.target.classList.remove('drag-over');
    }
});

// Modal functions
function showAddProjectModal() {
    // Set default area to current category
    document.getElementById('newProjectCategory').value = currentCategory;
    document.getElementById('newProjectStatus').value = 'not_started';
    document.getElementById('newProjectPriority').value = 'medium';
    
    new bootstrap.Modal(document.getElementById('addProjectModal')).show();
}

function showAddStoryModal() {
    populateProjectOptions();
    document.getElementById('newStoryStatus').value = 'backlog';
    document.getElementById('newStoryPriority').value = 'medium';
    
    new bootstrap.Modal(document.getElementById('addStoryModal')).show();
}

function showAddTaskModal() {
    document.getElementById('newTaskStatus').value = 'backlog';
    document.getElementById('newTaskPriority').value = 'medium';
    
    new bootstrap.Modal(document.getElementById('addTaskModal')).show();
}

function populateProjectOptions() {
    const select = document.getElementById('newStoryProject');
    select.innerHTML = projects.map(project => 
        `<option value="${project.id}">${project.name}</option>`
    ).join('');
    
    if (currentProject) {
        select.value = currentProject.id;
    }
}

// Create new project
function createProject(e) {
    e.preventDefault();
    
    const projectData = {
        name: document.getElementById('newProjectName').value,
        description: document.getElementById('newProjectDescription').value,
        area: document.getElementById('newProjectCategory').value,
        status: document.getElementById('newProjectStatus').value,
        priority: document.getElementById('newProjectPriority').value,
        start_date: document.getElementById('newProjectStartDate').value || null,
        due_date: document.getElementById('newProjectDueDate').value || null,
        notes: document.getElementById('newProjectNotes').value
    };
    
    API.createProject(projectData);
    
    // Update UI
    renderProjects();
    updateNavigationBadges();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addProjectModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Create new story
function createStory(e) {
    e.preventDefault();
    
    const storyData = {
        project_id: parseInt(document.getElementById('newStoryProject').value),
        title: document.getElementById('newStoryTitle').value,
        description: document.getElementById('newStoryDescription').value,
        status: document.getElementById('newStoryStatus').value,
        priority: document.getElementById('newStoryPriority').value,
        start_date: document.getElementById('newStoryStartDate').value || null,
        due_date: document.getElementById('newStoryDueDate').value || null,
        notes: document.getElementById('newStoryNotes').value
    };
    
    API.createStory(storyData);
    
    // Update UI if this is the current project
    if (currentProject && currentProject.id === storyData.project_id) {
        renderStories();
    }
    
    renderProjects();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addStoryModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Create new task
function createTask(e) {
    e.preventDefault();
    
    if (!currentStory) return;
    
    const taskData = {
        story_id: currentStory.id,
        title: document.getElementById('newTaskTitle').value,
        status: document.getElementById('newTaskStatus').value,
        priority: document.getElementById('newTaskPriority').value,
        start_date: document.getElementById('newTaskStartDate').value || null,
        due_date: document.getElementById('newTaskDueDate').value || null,
        notes: document.getElementById('newTaskNotes').value
    };
    
    API.createTask(taskData);
    renderTasks();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addTaskModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Add new task (quick version for the button in the story modal)
function addTask() {
    showAddTaskModal();
}

// Sidebar toggle for mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

// Load data from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
        projects = JSON.parse(savedProjects);
    }
    
    renderProjects();
    updateNavigationBadges();
    populateProjectOptions();
});

// Save project info changes
document.getElementById('projectStatus').addEventListener('change', function() {
    if (currentProject) {
        API.updateProject(currentProject.id, { status: this.value });
        renderProjects();
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('projectPriority').addEventListener('change', function() {
    if (currentProject) {
        API.updateProject(currentProject.id, { priority: this.value });
        renderProjects();
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('projectStartDate').addEventListener('change', function() {
    if (currentProject) {
        API.updateProject(currentProject.id, { start_date: this.value });
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('projectDueDate').addEventListener('change', function() {
    if (currentProject) {
        API.updateProject(currentProject.id, { due_date: this.value });
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('projectNotes').addEventListener('change', function() {
    if (currentProject) {
        API.updateProject(currentProject.id, { notes: this.value });
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

// Save story info changes
document.getElementById('storyTitle').addEventListener('change', function() {
    if (currentStory) {
        API.updateStory(currentStory.id, { title: this.value });
        renderStories();
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('storyStatus').addEventListener('change', function() {
    if (currentStory) {
        API.updateStory(currentStory.id, { status: this.value });
        renderStories();
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('storyPriority').addEventListener('change', function() {
    if (currentStory) {
        API.updateStory(currentStory.id, { priority: this.value });
        renderStories();
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('storyStartDate').addEventListener('change', function() {
    if (currentStory) {
        API.updateStory(currentStory.id, { start_date: this.value });
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('storyDueDate').addEventListener('change', function() {
    if (currentStory) {
        API.updateStory(currentStory.id, { due_date: this.value });
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('storyNotes').addEventListener('change', function() {
    if (currentStory) {
        API.updateStory(currentStory.id, { notes: this.value });
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle');
    
    if (window.innerWidth <= 992 && 
        !sidebar.contains(e.target) && 
        !toggleBtn.contains(e.target) && 
        sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
    }
});
