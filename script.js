
// Data Storage
let projects = [
    {
        id: 1,
        name: "Website Redesign",
        description: "Complete overhaul of company website with modern design and improved UX",
        category: "work",
        status: "active",
        priority: "high",
        dueDate: "2024-02-15",
        stories: [
            {
                id: 1,
                title: "User Research and Analysis",
                description: "Conduct user interviews and analyze current website performance",
                status: "done",
                points: 5,
                priority: "high",
                tasks: [
                    { id: 1, title: "Create user survey", status: "done" },
                    { id: 2, title: "Conduct 10 user interviews", status: "done" },
                    { id: 3, title: "Analyze current analytics", status: "done" }
                ]
            },
            {
                id: 2,
                title: "Design System Creation",
                description: "Create a comprehensive design system for the new website",
                status: "in-progress",
                points: 8,
                priority: "high",
                tasks: [
                    { id: 4, title: "Define color palette", status: "done" },
                    { id: 5, title: "Create typography scale", status: "in-progress" },
                    { id: 6, title: "Design component library", status: "todo" }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Mobile App Development",
        description: "Native iOS and Android app for customer engagement",
        category: "work",
        status: "planning",
        priority: "medium",
        dueDate: "2024-04-30",
        stories: [
            {
                id: 3,
                title: "Technical Architecture",
                description: "Define the technical stack and architecture",
                status: "backlog",
                points: 13,
                priority: "high",
                tasks: []
            }
        ]
    },
    {
        id: 3,
        name: "API Documentation",
        description: "Comprehensive documentation for our REST API",
        category: "work",
        status: "active",
        priority: "medium",
        dueDate: "2024-01-20",
        stories: []
    },
    {
        id: 4,
        name: "Learn Spanish",
        description: "Achieve conversational fluency in Spanish",
        category: "personal",
        status: "active",
        priority: "medium",
        dueDate: "2024-06-01",
        stories: [
            {
                id: 4,
                title: "Complete Duolingo Course",
                description: "Finish the entire Spanish course on Duolingo",
                status: "in-progress",
                points: 8,
                priority: "medium",
                tasks: [
                    { id: 7, title: "Complete Unit 1", status: "done" },
                    { id: 8, title: "Complete Unit 2", status: "in-progress" },
                    { id: 9, title: "Complete Unit 3", status: "todo" }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Home Gym Setup",
        description: "Create a functional home gym space",
        category: "personal",
        status: "planning",
        priority: "low",
        dueDate: "2024-03-01",
        stories: []
    },
    {
        id: 6,
        name: "E-commerce Website",
        description: "Build custom e-commerce solution for client",
        category: "freelance",
        status: "active",
        priority: "high",
        dueDate: "2024-02-28",
        stories: [
            {
                id: 5,
                title: "Payment Integration",
                description: "Integrate Stripe payment processing",
                status: "ready",
                points: 5,
                priority: "high",
                tasks: []
            }
        ]
    },
    {
        id: 7,
        name: "Financial Planning",
        description: "Create comprehensive financial plan for 2024",
        category: "life",
        status: "active",
        priority: "high",
        dueDate: "2024-01-31",
        stories: []
    },
    {
        id: 8,
        name: "Health & Fitness",
        description: "Maintain healthy lifestyle and fitness goals",
        category: "life",
        status: "active",
        priority: "medium",
        dueDate: "2024-12-31",
        stories: []
    },
    {
        id: 9,
        name: "Travel Planning",
        description: "Plan and book summer vacation to Europe",
        category: "life",
        status: "planning",
        priority: "low",
        dueDate: "2024-07-01",
        stories: []
    },
    {
        id: 10,
        name: "Skill Development",
        description: "Learn new technologies and improve existing skills",
        category: "life",
        status: "active",
        priority: "medium",
        dueDate: "2024-12-31",
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
        personal: 'Personal',
        freelance: 'Freelancing',
        life: 'Life & Goals'
    };
    
    document.querySelector('.current-category').textContent = categoryNames[currentCategory];
}

function updateNavigationBadges() {
    const categoryCounts = {
        work: projects.filter(p => p.category === 'work').length,
        personal: projects.filter(p => p.category === 'personal').length,
        freelance: projects.filter(p => p.category === 'freelance').length,
        life: projects.filter(p => p.category === 'life').length
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
    const filteredProjects = projects.filter(p => p.category === currentCategory);
    
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
            sum + story.tasks.filter(task => task.status === 'done').length, 0);
        const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
        
        return `
            <div class="project-card priority-${project.priority}" onclick="openProject(${project.id})">
                <div class="project-header">
                    <h3 class="project-title">${project.name}</h3>
                    <span class="project-status status-${project.status}">${project.status}</span>
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
                        <span>${project.priority}</span>
                    </div>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
            </div>
        `;
    }).join('');
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
    document.getElementById('projectDueDate').value = currentProject.dueDate || '';
    
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
                <span class="story-points">${story.points} pts</span>
                <span>Status: ${story.status}</span>
                <span>${story.tasks.length} tasks</span>
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
    document.getElementById('storyPoints').value = currentStory.points;
    document.getElementById('storyPriority').value = currentStory.priority;
    document.getElementById('storyStatus').value = currentStory.status;
    
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
        
        switch(task.status) {
            case 'todo':
                todoTasks.appendChild(taskElement);
                break;
            case 'in-progress':
                inProgressTasks.appendChild(taskElement);
                break;
            case 'done':
                doneTasks.appendChild(taskElement);
                break;
        }
    });
}

function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = 'task-item';
    div.draggable = true;
    div.dataset.taskId = task.id;
    div.innerHTML = `
        <div class="task-title">${task.title}</div>
        <div class="task-meta">Task #${task.id}</div>
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
        task.status = newStatus;
        renderTasks();
        
        // Save to localStorage (in a real app, this would be an API call)
        localStorage.setItem('projects', JSON.stringify(projects));
    }
}

function getStatusFromDropZone(dropZoneId) {
    switch(dropZoneId) {
        case 'todoTasks': return 'todo';
        case 'inProgressTasks': return 'in-progress';
        case 'doneTasks': return 'done';
        default: return 'todo';
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
    // Set default category to current category
    document.getElementById('newProjectCategory').value = currentCategory;
    new bootstrap.Modal(document.getElementById('addProjectModal')).show();
}

function showAddStoryModal() {
    populateProjectOptions();
    new bootstrap.Modal(document.getElementById('addStoryModal')).show();
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
    
    const newProject = {
        id: projectIdCounter++,
        name: document.getElementById('newProjectName').value,
        description: document.getElementById('newProjectDescription').value,
        category: document.getElementById('newProjectCategory').value,
        status: 'planning',
        priority: document.getElementById('newProjectPriority').value,
        dueDate: '',
        stories: []
    };
    
    projects.push(newProject);
    
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
    
    const projectId = parseInt(document.getElementById('newStoryProject').value);
    const project = projects.find(p => p.id === projectId);
    
    if (!project) return;
    
    const newStory = {
        id: storyIdCounter++,
        title: document.getElementById('newStoryTitle').value,
        description: document.getElementById('newStoryDescription').value,
        status: 'backlog',
        points: parseInt(document.getElementById('newStoryPoints').value),
        priority: 'medium',
        tasks: []
    };
    
    project.stories.push(newStory);
    
    // Update UI if this is the current project
    if (currentProject && currentProject.id === projectId) {
        renderStories();
    }
    
    renderProjects();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addStoryModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Add new task
function addTask() {
    const taskTitle = prompt('Enter task title:');
    if (!taskTitle) return;
    
    const newTask = {
        id: taskIdCounter++,
        title: taskTitle,
        status: 'todo'
    };
    
    currentStory.tasks.push(newTask);
    renderTasks();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
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
        currentProject.status = this.value;
        renderProjects();
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('projectPriority').addEventListener('change', function() {
    if (currentProject) {
        currentProject.priority = this.value;
        renderProjects();
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('projectDueDate').addEventListener('change', function() {
    if (currentProject) {
        currentProject.dueDate = this.value;
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

// Save story info changes
document.getElementById('storyPoints').addEventListener('change', function() {
    if (currentStory) {
        currentStory.points = parseInt(this.value);
        renderStories();
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('storyPriority').addEventListener('change', function() {
    if (currentStory) {
        currentStory.priority = this.value;
        renderStories();
        localStorage.setItem('projects', JSON.stringify(projects));
    }
});

document.getElementById('storyStatus').addEventListener('change', function() {
    if (currentStory) {
        currentStory.status = this.value;
        renderStories();
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
