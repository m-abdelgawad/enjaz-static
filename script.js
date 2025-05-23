
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
    },
    {
        id: 6,
        name: "Freelance Website Project",
        description: "Build e-commerce website for local business",
        area: "freelance",
        status: "in_progress",
        priority: "high",
        start_date: "2024-01-10",
        due_date: "2024-02-28",
        notes: "Client prefers WordPress with WooCommerce",
        created_at: "2024-01-08T11:30:00",
        updated_at: "2024-01-10T09:15:00",
        stories: []
    },
    {
        id: 7,
        name: "5K Training Plan",
        description: "Prepare for spring charity 5K run",
        area: "fitness",
        status: "in_progress",
        priority: "medium",
        start_date: "2024-01-05",
        due_date: "2024-04-15",
        notes: "Race day: April 15, 2024",
        created_at: "2024-01-02T14:25:00",
        updated_at: "2024-01-05T08:15:00",
        stories: []
    },
    {
        id: 8,
        name: "Nutrition Plan",
        description: "Develop balanced meal plan to support fitness goals",
        area: "fitness",
        status: "in_progress",
        priority: "high",
        start_date: "2024-01-03",
        due_date: "2024-01-17",
        notes: "Focus on high protein and complex carbs",
        created_at: "2023-12-30T16:20:00",
        updated_at: "2024-01-03T10:45:00",
        stories: []
    },
    {
        id: 9,
        name: "Meditation Practice",
        description: "Establish regular meditation routine",
        area: "personal",
        status: "not_started",
        priority: "medium",
        start_date: "2024-01-15",
        due_date: null,
        notes: "Start with 5 minutes per day",
        created_at: "2024-01-10T20:15:00",
        updated_at: "2024-01-10T20:15:00",
        stories: []
    },
    {
        id: 10,
        name: "Strength Training Program",
        description: "Progressive strength training program",
        area: "fitness",
        status: "not_started",
        priority: "medium",
        start_date: "2024-02-01",
        due_date: "2024-04-30",
        notes: "Focus on compound movements",
        created_at: "2024-01-15T11:20:00",
        updated_at: "2024-01-15T11:20:00",
        stories: []
    }
];

let currentCategory = 'work';
let currentProject = null;
let currentStory = null;
let taskIdCounter = 10;
let storyIdCounter = 5;
let projectIdCounter = 11;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Get current page
    const currentPage = getCurrentPage();
    
    // Initialize based on current page
    switch (currentPage) {
        case 'index':
            initDashboard();
            break;
        case 'projects':
            initProjectsPage();
            break;
        case 'tasks':
            initTasksPage();
            break;
        case 'work-center':
            initWorkCenter();
            break;
        case 'personal-center':
            initPersonalCenter();
            break;
        case 'freelance-center':
            initFreelanceCenter();
            break;
        case 'fitness-center':
            initFitnessCenter();
            break;
    }
    
    // Common initializations
    updateNavigationBadges();
    populateProjectOptions();
});

// Helper function to get current page
function getCurrentPage() {
    const path = window.location.pathname;
    const pageName = path.split('/').pop().split('.')[0];
    return pageName || 'index';
}

// API Utilities for future Django REST API integration
const API = {
    baseUrl: '/api/v1',
    
    // Projects
    async getProjects() {
        // In future, this will fetch from the Django API
        // return await fetch(`${this.baseUrl}/projects/`).then(res => res.json());
        return projects;
    },
    
    async getProjectsByArea(area) {
        // In future, this will fetch from the Django API with query params
        // return await fetch(`${this.baseUrl}/projects/?area=${area}`).then(res => res.json());
        return projects.filter(p => p.area === area);
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
    },

    async getTasksByStatus(status) {
        // In future, this will fetch from the Django API with query params
        // return await fetch(`${this.baseUrl}/tasks/?status=${status}`).then(res => res.json());
        let tasks = [];
        
        projects.forEach(project => {
            project.stories.forEach(story => {
                story.tasks.forEach(task => {
                    if (task.status === status || !status) {
                        tasks.push({
                            ...task,
                            project_id: project.id,
                            project_name: project.name,
                            story_id: story.id,
                            story_name: story.title,
                            area: project.area
                        });
                    }
                });
            });
        });
        
        return tasks;
    },
    
    async getAllTasks() {
        // In future, this will fetch from the Django API
        // return await fetch(`${this.baseUrl}/tasks/`).then(res => res.json());
        return this.getTasksByStatus(null);
    },
    
    async getTasksByArea(area) {
        // In future, this will fetch from the Django API with query params
        // return await fetch(`${this.baseUrl}/tasks/?project__area=${area}`).then(res => res.json());
        const allTasks = await this.getAllTasks();
        return allTasks.filter(task => task.area === area);
    },
    
    async getUpcomingDeadlines(limit = 5, area = null) {
        // In future, this will fetch from the Django API with query params
        /*
        const url = new URL(`${this.baseUrl}/deadlines/`);
        if (area) url.searchParams.append('area', area);
        url.searchParams.append('limit', limit);
        return await fetch(url).then(res => res.json());
        */
        
        let items = [];
        
        // Add projects with due dates
        const filteredProjects = area ? projects.filter(p => p.area === area) : projects;
        filteredProjects.forEach(project => {
            if (project.due_date) {
                items.push({
                    id: project.id,
                    name: project.name,
                    type: 'project',
                    area: project.area,
                    due_date: project.due_date,
                    status: project.status,
                    priority: project.priority
                });
            }
            
            // Add stories with due dates
            project.stories.forEach(story => {
                if (story.due_date) {
                    items.push({
                        id: story.id,
                        name: story.title,
                        type: 'story',
                        project_id: project.id,
                        project_name: project.name,
                        area: project.area,
                        due_date: story.due_date,
                        status: story.status,
                        priority: story.priority
                    });
                }
                
                // Add tasks with due dates
                story.tasks.forEach(task => {
                    if (task.due_date) {
                        items.push({
                            id: task.id,
                            name: task.title,
                            type: 'task',
                            story_id: story.id,
                            story_name: story.title,
                            project_id: project.id,
                            project_name: project.name,
                            area: project.area,
                            due_date: task.due_date,
                            status: task.status,
                            priority: task.priority
                        });
                    }
                });
            });
        });
        
        // Sort by due date (ascending)
        items.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
        
        // Return only upcoming deadlines (not past)
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const upcomingItems = items.filter(item => {
            const dueDate = new Date(item.due_date);
            dueDate.setHours(0, 0, 0, 0);
            return dueDate >= today;
        });
        
        return upcomingItems.slice(0, limit);
    }
};

// Update sidebar badges
function updateNavigationBadges() {
    const categoryCounts = {
        work: projects.filter(p => p.area === 'work').length,
        personal: projects.filter(p => p.area === 'personal').length,
        freelance: projects.filter(p => p.area === 'freelance').length,
        fitness: projects.filter(p => p.area === 'fitness').length
    };
    
    Object.keys(categoryCounts).forEach(category => {
        const links = document.querySelectorAll(`[href="${category}-center.html"]`);
        links.forEach(link => {
            const badge = link.querySelector('.badge');
            if (badge) {
                badge.textContent = categoryCounts[category];
            }
        });
    });
}

// Dashboard page initialization
function initDashboard() {
    renderRecentProjects();
    renderUpcomingDeadlines();
    renderDashboardStats();
}

function renderRecentProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    // Sort projects by updated_at date (descending)
    const sortedProjects = [...projects]
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 4); // Take only the 4 most recent projects
    
    grid.innerHTML = sortedProjects.map(project => renderProjectCard(project)).join('');
}

function renderDashboardStats() {
    // All projects stats
    const totalProjects = projects.length;
    const activeProjects = projects.filter(p => p.status === 'in_progress').length;
    
    // All tasks stats
    let totalTasks = 0;
    let completedTasks = 0;
    
    projects.forEach(project => {
        project.stories.forEach(story => {
            totalTasks += story.tasks.length;
            completedTasks += story.tasks.filter(task => task.status === 'completed').length;
        });
    });
    
    // Update dashboard stat elements if they exist
    updateElementText('totalProjectsCount', totalProjects);
    updateElementText('activeProjectsCount', activeProjects);
    updateElementText('totalTasksCount', totalTasks);
    updateElementText('completedTasksCount', completedTasks);
}

function updateElementText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) element.textContent = text;
}

async function renderUpcomingDeadlines() {
    const deadlinesTable = document.getElementById('deadlinesTable');
    if (!deadlinesTable) return;
    
    const deadlines = await API.getUpcomingDeadlines(5);
    
    if (deadlines.length === 0) {
        deadlinesTable.innerHTML = `
            <tr>
                <td colspan="5" class="text-center py-3">No upcoming deadlines</td>
            </tr>
        `;
        return;
    }
    
    deadlinesTable.innerHTML = deadlines.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${capitalizeFirstLetter(item.area)}</td>
            <td>${formatDate(item.due_date)}</td>
            <td><span class="badge status-${item.status}">${formatStatus(item.status)}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="viewDeadlineItem('${item.type}', ${item.id})">
                    View
                </button>
            </td>
        </tr>
    `).join('');
}

function viewDeadlineItem(type, id) {
    if (type === 'project') {
        openProject(id);
    } else if (type === 'story') {
        // Find the project that contains this story
        let foundProject = null;
        let foundStory = null;
        
        for (const project of projects) {
            const story = project.stories.find(s => s.id === id);
            if (story) {
                foundProject = project;
                foundStory = story;
                break;
            }
        }
        
        if (foundProject) {
            currentProject = foundProject;
            openStory(id);
        }
    } else if (type === 'task') {
        // Find the task and open appropriate modals
        let foundTask = null;
        let foundStory = null;
        let foundProject = null;
        
        for (const project of projects) {
            for (const story of project.stories) {
                const task = story.tasks.find(t => t.id === id);
                if (task) {
                    foundTask = task;
                    foundStory = story;
                    foundProject = project;
                    break;
                }
            }
            if (foundTask) break;
        }
        
        if (foundProject && foundStory && foundTask) {
            currentProject = foundProject;
            currentStory = foundStory;
            openTask(id);
        }
    }
}

// Projects page initialization
function initProjectsPage() {
    // Display projects on all tabs
    renderAllProjectsTab();
    renderWorkProjectsTab();
    renderPersonalProjectsTab();
    renderFreelanceProjectsTab();
    renderFitnessProjectsTab();
}

function renderAllProjectsTab() {
    const projectsGrid = document.getElementById('allProjectsGrid');
    if (!projectsGrid) return;
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = renderEmptyState('No projects yet', 'Create your first project to get started!');
        return;
    }
    
    projectsGrid.innerHTML = projects.map(project => renderProjectCard(project)).join('');
}

function renderWorkProjectsTab() {
    renderAreaProjectsTab('work', 'workProjectsGrid');
}

function renderPersonalProjectsTab() {
    renderAreaProjectsTab('personal', 'personalProjectsGrid');
}

function renderFreelanceProjectsTab() {
    renderAreaProjectsTab('freelance', 'freelanceProjectsGrid');
}

function renderFitnessProjectsTab() {
    renderAreaProjectsTab('fitness', 'fitnessProjectsGrid');
}

function renderAreaProjectsTab(area, gridId) {
    const projectsGrid = document.getElementById(gridId);
    if (!projectsGrid) return;
    
    const areaProjects = projects.filter(p => p.area === area);
    
    if (areaProjects.length === 0) {
        projectsGrid.innerHTML = renderEmptyState(
            `No ${area} projects yet`, 
            `Create your first ${area} project to get started!`
        );
        return;
    }
    
    projectsGrid.innerHTML = areaProjects.map(project => renderProjectCard(project)).join('');
}

function renderEmptyState(title, message, buttonAction = 'showAddProjectModal()') {
    return `
        <div class="col-12 text-center">
            <div class="empty-state py-5">
                <i class="fas fa-folder-open fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">${title}</h4>
                <p class="text-muted">${message}</p>
                <button class="btn btn-primary mt-3" onclick="${buttonAction}">
                    <i class="fas fa-plus me-2"></i>Create Project
                </button>
            </div>
        </div>
    `;
}

// Tasks page initialization
function initTasksPage() {
    renderTasksKanban();
}

async function renderTasksKanban() {
    const todoTasks = document.getElementById('todoTasks');
    const inProgressTasks = document.getElementById('inProgressTasks');
    const completedTasks = document.getElementById('completedTasks');
    
    if (!todoTasks || !inProgressTasks || !completedTasks) return;
    
    // Clear existing tasks
    todoTasks.innerHTML = '';
    inProgressTasks.innerHTML = '';
    completedTasks.innerHTML = '';
    
    // Get tasks by status
    const backlogTasks = await API.getTasksByStatus('backlog');
    const notStartedTasks = await API.getTasksByStatus('not_started');
    const onHoldTasks = await API.getTasksByStatus('on_hold');
    const blockedTasks = await API.getTasksByStatus('blocked');
    const inProgressTasksList = await API.getTasksByStatus('in_progress');
    const completedTasksList = await API.getTasksByStatus('completed');
    
    // Group "To Do" column tasks
    const todoTasksList = [...backlogTasks, ...notStartedTasks, ...onHoldTasks, ...blockedTasks];
    
    // Render task groups
    todoTasks.innerHTML = todoTasksList.length > 0 
        ? todoTasksList.map(task => renderTaskCard(task)).join('')
        : '<div class="text-center py-3 text-muted">No tasks</div>';
        
    inProgressTasks.innerHTML = inProgressTasksList.length > 0 
        ? inProgressTasksList.map(task => renderTaskCard(task)).join('')
        : '<div class="text-center py-3 text-muted">No tasks</div>';
        
    completedTasks.innerHTML = completedTasksList.length > 0 
        ? completedTasksList.map(task => renderTaskCard(task)).join('')
        : '<div class="text-center py-3 text-muted">No tasks</div>';
}

function renderTaskCard(task) {
    // Determine which buttons to show based on status
    let actionButtons = '';
    
    if (task.status === 'backlog' || task.status === 'not_started' || task.status === 'on_hold' || task.status === 'blocked') {
        actionButtons = `
            <button class="status-action-btn move-next" onclick="updateTaskStatus(${task.id}, 'in_progress')">
                Start
            </button>
            <button class="status-action-btn move-next" onclick="updateTaskStatus(${task.id}, 'completed')">
                Complete
            </button>
        `;
    } else if (task.status === 'in_progress') {
        actionButtons = `
            <button class="status-action-btn move-prev" onclick="updateTaskStatus(${task.id}, 'on_hold')">
                Pause
            </button>
            <button class="status-action-btn move-next" onclick="updateTaskStatus(${task.id}, 'completed')">
                Complete
            </button>
        `;
    } else if (task.status === 'completed') {
        actionButtons = `
            <button class="status-action-btn move-prev" onclick="updateTaskStatus(${task.id}, 'in_progress')">
                Reopen
            </button>
        `;
    }
    
    return `
        <div class="task-item priority-${task.priority}">
            <div class="task-title">${task.title}</div>
            <div class="task-meta mb-2">
                <span>Project: ${task.project_name}</span> | 
                <span>Story: ${task.story_name}</span>
            </div>
            <div class="task-meta">
                <span>Priority: ${formatPriority(task.priority)}</span>
                ${task.due_date ? `<span>Due: ${formatDate(task.due_date)}</span>` : ''}
            </div>
            <div class="mt-2">
                ${actionButtons}
                <button class="btn btn-sm btn-outline-primary" onclick="openTask(${task.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
            </div>
        </div>
    `;
}

async function updateTaskStatus(taskId, newStatus) {
    await API.updateTask(taskId, { status: newStatus });
    
    // Refresh the kanban board
    await renderTasksKanban();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

function openTask(taskId) {
    let foundTask = null;
    let foundStory = null;
    let foundProject = null;
    
    // Find the task across all projects and stories
    for (const project of projects) {
        for (const story of project.stories) {
            const task = story.tasks.find(t => t.id === taskId);
            if (task) {
                foundTask = task;
                foundStory = story;
                foundProject = project;
                break;
            }
        }
        if (foundTask) break;
    }
    
    if (!foundTask) return;
    
    // Set current context
    currentProject = foundProject;
    currentStory = foundStory;
    
    // Update modal fields
    document.getElementById('taskTitle').value = foundTask.title;
    document.getElementById('taskStatus').value = foundTask.status;
    document.getElementById('taskPriority').value = foundTask.priority;
    document.getElementById('taskStartDate').value = foundTask.start_date || '';
    document.getElementById('taskDueDate').value = foundTask.due_date || '';
    document.getElementById('taskNotes').value = foundTask.notes || '';
    
    // Populate story dropdown
    populateAllStories('taskStory', foundStory.id);
    
    // Show modal
    const modal =  new bootstrap.Modal(document.getElementById('taskModal'));
    modal.show();
    
    // Setup form submission handler
    document.getElementById('editTaskForm').onsubmit = function(e) {
        e.preventDefault();
        updateTask(taskId);
    };
}

async function updateTask(taskId) {
    const taskData = {
        title: document.getElementById('taskTitle').value,
        status: document.getElementById('taskStatus').value,
        priority: document.getElementById('taskPriority').value,
        start_date: document.getElementById('taskStartDate').value || null,
        due_date: document.getElementById('taskDueDate').value || null,
        notes: document.getElementById('taskNotes').value
    };
    
    const storyId = parseInt(document.getElementById('taskStory').value);
    
    // If story has changed, move task to new story
    if (storyId !== currentStory.id) {
        // Remove from current story
        const taskIndex = currentStory.tasks.findIndex(t => t.id === taskId);
        if (taskIndex !== -1) {
            currentStory.tasks.splice(taskIndex, 1);
        }
        
        // Add to new story
        for (const project of projects) {
            const newStory = project.stories.find(s => s.id === storyId);
            if (newStory) {
                newStory.tasks.push({
                    ...currentStory.tasks.find(t => t.id === taskId),
                    ...taskData,
                    updated_at: new Date().toISOString()
                });
                break;
            }
        }
    } else {
        // Just update the task in place
        await API.updateTask(taskId, taskData);
    }
    
    // Close modal
    bootstrap.Modal.getInstance(document.getElementById('taskModal')).hide();
    
    // Refresh kanban board if on the tasks page
    if (getCurrentPage() === 'tasks') {
        renderTasksKanban();
    }
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Work Center initialization
function initWorkCenter() {
    renderWorkProjectsSection();
    renderWorkTasksSection();
    renderWorkDeadlinesSection();
    updateWorkCenterStats();
    populateWorkProjectsDropdown();
}

function renderWorkProjectsSection() {
    const projectsGrid = document.getElementById('workProjectsGrid');
    if (!projectsGrid) return;
    
    const workProjects = projects.filter(p => p.area === 'work');
    
    if (workProjects.length === 0) {
        projectsGrid.innerHTML = renderEmptyState(
            'No work projects yet', 
            'Create your first work project to get started!', 
            'showAddWorkProject()'
        );
        return;
    }
    
    projectsGrid.innerHTML = workProjects.map(project => renderProjectCard(project)).join('');
}

async function renderWorkTasksSection() {
    const tasksTable = document.getElementById('workTasksTable');
    if (!tasksTable) return;
    
    const workTasks = await API.getTasksByArea('work');
    
    if (workTasks.length === 0) {
        tasksTable.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-3">No work tasks yet</td>
            </tr>
        `;
        return;
    }
    
    // Sort by status (not completed first) and then by due date
    const sortedTasks = workTasks.sort((a, b) => {
        // First sort by completion status
        if (a.status === 'completed' && b.status !== 'completed') return 1;
        if (a.status !== 'completed' && b.status === 'completed') return -1;
        
        // Then by due date if both have one
        if (a.due_date && b.due_date) {
            return new Date(a.due_date) - new Date(b.due_date);
        }
        
        // Tasks with due dates come before tasks without
        if (a.due_date && !b.due_date) return -1;
        if (!a.due_date && b.due_date) return 1;
        
        return 0;
    });
    
    tasksTable.innerHTML = sortedTasks.slice(0, 10).map(task => `
        <tr>
            <td>${task.title}</td>
            <td>${task.project_name}</td>
            <td>${task.story_name}</td>
            <td><span class="badge status-${task.status}">${formatStatus(task.status)}</span></td>
            <td>${task.due_date ? formatDate(task.due_date) : 'No date'}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="openTask(${task.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
            </td>
        </tr>
    `).join('');
}

async function renderWorkDeadlinesSection() {
    const deadlinesTable = document.getElementById('workDeadlinesTable');
    if (!deadlinesTable) return;
    
    const deadlines = await API.getUpcomingDeadlines(5, 'work');
    
    if (deadlines.length === 0) {
        deadlinesTable.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-3">No upcoming work deadlines</td>
            </tr>
        `;
        return;
    }
    
    deadlinesTable.innerHTML = deadlines.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${capitalizeFirstLetter(item.type)}</td>
            <td>${formatDate(item.due_date)}</td>
            <td><span class="badge status-${item.status}">${formatStatus(item.status)}</span></td>
            <td><span class="badge priority-${item.priority}">${formatPriority(item.priority)}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="viewDeadlineItem('${item.type}', ${item.id})">
                    View
                </button>
            </td>
        </tr>
    `).join('');
}

function updateWorkCenterStats() {
    const workProjects = projects.filter(p => p.area === 'work');
    const activeWorkProjects = workProjects.filter(p => p.status === 'in_progress');
    
    let workTasks = 0;
    let completedWorkTasks = 0;
    
    workProjects.forEach(project => {
        project.stories.forEach(story => {
            workTasks += story.tasks.length;
            completedWorkTasks += story.tasks.filter(task => task.status === 'completed').length;
        });
    });
    
    updateElementText('workProjectsCount', workProjects.length);
    updateElementText('activeWorkProjectsCount', activeWorkProjects.length);
    updateElementText('workTasksCount', workTasks);
    updateElementText('completedWorkTasksCount', completedWorkTasks);
}

// Personal Center initialization
function initPersonalCenter() {
    renderPersonalProjectsSection();
    renderPersonalTasksSection();
    renderPersonalDeadlinesSection();
    updatePersonalCenterStats();
    populatePersonalProjectsDropdown();
}

function renderPersonalProjectsSection() {
    const projectsGrid = document.getElementById('personalProjectsGrid');
    if (!projectsGrid) return;
    
    const personalProjects = projects.filter(p => p.area === 'personal');
    
    if (personalProjects.length === 0) {
        projectsGrid.innerHTML = renderEmptyState(
            'No personal projects yet', 
            'Create your first personal project to get started!', 
            'showAddPersonalProject()'
        );
        return;
    }
    
    projectsGrid.innerHTML = personalProjects.map(project => renderProjectCard(project)).join('');
}

async function renderPersonalTasksSection() {
    const tasksTable = document.getElementById('personalTasksTable');
    if (!tasksTable) return;
    
    const personalTasks = await API.getTasksByArea('personal');
    
    if (personalTasks.length === 0) {
        tasksTable.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-3">No personal tasks yet</td>
            </tr>
        `;
        return;
    }
    
    // Sort by status and due date
    const sortedTasks = personalTasks.sort((a, b) => {
        if (a.status === 'completed' && b.status !== 'completed') return 1;
        if (a.status !== 'completed' && b.status === 'completed') return -1;
        
        if (a.due_date && b.due_date) {
            return new Date(a.due_date) - new Date(b.due_date);
        }
        
        if (a.due_date && !b.due_date) return -1;
        if (!a.due_date && b.due_date) return 1;
        
        return 0;
    });
    
    tasksTable.innerHTML = sortedTasks.slice(0, 10).map(task => `
        <tr>
            <td>${task.title}</td>
            <td>${task.project_name}</td>
            <td>${task.story_name}</td>
            <td><span class="badge status-${task.status}">${formatStatus(task.status)}</span></td>
            <td>${task.due_date ? formatDate(task.due_date) : 'No date'}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="openTask(${task.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
            </td>
        </tr>
    `).join('');
}

async function renderPersonalDeadlinesSection() {
    const deadlinesTable = document.getElementById('personalDeadlinesTable');
    if (!deadlinesTable) return;
    
    const deadlines = await API.getUpcomingDeadlines(5, 'personal');
    
    if (deadlines.length === 0) {
        deadlinesTable.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-3">No upcoming personal deadlines</td>
            </tr>
        `;
        return;
    }
    
    deadlinesTable.innerHTML = deadlines.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${capitalizeFirstLetter(item.type)}</td>
            <td>${formatDate(item.due_date)}</td>
            <td><span class="badge status-${item.status}">${formatStatus(item.status)}</span></td>
            <td><span class="badge priority-${item.priority}">${formatPriority(item.priority)}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="viewDeadlineItem('${item.type}', ${item.id})">
                    View
                </button>
            </td>
        </tr>
    `).join('');
}

function updatePersonalCenterStats() {
    const personalProjects = projects.filter(p => p.area === 'personal');
    const activePersonalProjects = personalProjects.filter(p => p.status === 'in_progress');
    
    let personalTasks = 0;
    let completedPersonalTasks = 0;
    
    personalProjects.forEach(project => {
        project.stories.forEach(story => {
            personalTasks += story.tasks.length;
            completedPersonalTasks += story.tasks.filter(task => task.status === 'completed').length;
        });
    });
    
    updateElementText('personalProjectsCount', personalProjects.length);
    updateElementText('activePersonalProjectsCount', activePersonalProjects.length);
    updateElementText('personalTasksCount', personalTasks);
    updateElementText('completedPersonalTasksCount', completedPersonalTasks);
}

// Freelance Center initialization
function initFreelanceCenter() {
    renderFreelanceProjectsSection();
    renderFreelanceTasksSection();
    renderFreelanceDeadlinesSection();
    updateFreelanceCenterStats();
    populateFreelanceProjectsDropdown();
}

function renderFreelanceProjectsSection() {
    const projectsGrid = document.getElementById('freelanceProjectsGrid');
    if (!projectsGrid) return;
    
    const freelanceProjects = projects.filter(p => p.area === 'freelance');
    
    if (freelanceProjects.length === 0) {
        projectsGrid.innerHTML = renderEmptyState(
            'No freelance projects yet', 
            'Create your first freelance project to get started!', 
            'showAddFreelanceProject()'
        );
        return;
    }
    
    projectsGrid.innerHTML = freelanceProjects.map(project => renderProjectCard(project)).join('');
}

async function renderFreelanceTasksSection() {
    const tasksTable = document.getElementById('freelanceTasksTable');
    if (!tasksTable) return;
    
    const freelanceTasks = await API.getTasksByArea('freelance');
    
    if (freelanceTasks.length === 0) {
        tasksTable.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-3">No freelance tasks yet</td>
            </tr>
        `;
        return;
    }
    
    // Sort by status and due date
    const sortedTasks = freelanceTasks.sort((a, b) => {
        if (a.status === 'completed' && b.status !== 'completed') return 1;
        if (a.status !== 'completed' && b.status === 'completed') return -1;
        
        if (a.due_date && b.due_date) {
            return new Date(a.due_date) - new Date(b.due_date);
        }
        
        if (a.due_date && !b.due_date) return -1;
        if (!a.due_date && b.due_date) return 1;
        
        return 0;
    });
    
    tasksTable.innerHTML = sortedTasks.slice(0, 10).map(task => `
        <tr>
            <td>${task.title}</td>
            <td>${task.project_name}</td>
            <td>${task.story_name}</td>
            <td><span class="badge status-${task.status}">${formatStatus(task.status)}</span></td>
            <td>${task.due_date ? formatDate(task.due_date) : 'No date'}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="openTask(${task.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
            </td>
        </tr>
    `).join('');
}

async function renderFreelanceDeadlinesSection() {
    const deadlinesTable = document.getElementById('freelanceDeadlinesTable');
    if (!deadlinesTable) return;
    
    const deadlines = await API.getUpcomingDeadlines(5, 'freelance');
    
    if (deadlines.length === 0) {
        deadlinesTable.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-3">No upcoming freelance deadlines</td>
            </tr>
        `;
        return;
    }
    
    deadlinesTable.innerHTML = deadlines.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${capitalizeFirstLetter(item.type)}</td>
            <td>${formatDate(item.due_date)}</td>
            <td><span class="badge status-${item.status}">${formatStatus(item.status)}</span></td>
            <td><span class="badge priority-${item.priority}">${formatPriority(item.priority)}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="viewDeadlineItem('${item.type}', ${item.id})">
                    View
                </button>
            </td>
        </tr>
    `).join('');
}

function updateFreelanceCenterStats() {
    const freelanceProjects = projects.filter(p => p.area === 'freelance');
    const activeFreelanceProjects = freelanceProjects.filter(p => p.status === 'in_progress');
    
    let freelanceTasks = 0;
    let completedFreelanceTasks = 0;
    
    freelanceProjects.forEach(project => {
        project.stories.forEach(story => {
            freelanceTasks += story.tasks.length;
            completedFreelanceTasks += story.tasks.filter(task => task.status === 'completed').length;
        });
    });
    
    updateElementText('freelanceProjectsCount', freelanceProjects.length);
    updateElementText('activeFreelanceProjectsCount', activeFreelanceProjects.length);
    updateElementText('freelanceTasksCount', freelanceTasks);
    updateElementText('completedFreelanceTasksCount', completedFreelanceTasks);
}

// Fitness Center initialization
function initFitnessCenter() {
    renderFitnessProjectsSection();
    renderFitnessTasksSection();
    renderFitnessDeadlinesSection();
    updateFitnessCenterStats();
    populateFitnessProjectsDropdown();
}

function renderFitnessProjectsSection() {
    const projectsGrid = document.getElementById('fitnessProjectsGrid');
    if (!projectsGrid) return;
    
    const fitnessProjects = projects.filter(p => p.area === 'fitness');
    
    if (fitnessProjects.length === 0) {
        projectsGrid.innerHTML = renderEmptyState(
            'No fitness projects yet', 
            'Create your first fitness project to get started!', 
            'showAddFitnessProject()'
        );
        return;
    }
    
    projectsGrid.innerHTML = fitnessProjects.map(project => renderProjectCard(project)).join('');
}

async function renderFitnessTasksSection() {
    const tasksTable = document.getElementById('fitnessTasksTable');
    if (!tasksTable) return;
    
    const fitnessTasks = await API.getTasksByArea('fitness');
    
    if (fitnessTasks.length === 0) {
        tasksTable.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-3">No fitness tasks yet</td>
            </tr>
        `;
        return;
    }
    
    // Sort by status and due date
    const sortedTasks = fitnessTasks.sort((a, b) => {
        if (a.status === 'completed' && b.status !== 'completed') return 1;
        if (a.status !== 'completed' && b.status === 'completed') return -1;
        
        if (a.due_date && b.due_date) {
            return new Date(a.due_date) - new Date(b.due_date);
        }
        
        if (a.due_date && !b.due_date) return -1;
        if (!a.due_date && b.due_date) return 1;
        
        return 0;
    });
    
    tasksTable.innerHTML = sortedTasks.slice(0, 10).map(task => `
        <tr>
            <td>${task.title}</td>
            <td>${task.project_name}</td>
            <td>${task.story_name}</td>
            <td><span class="badge status-${task.status}">${formatStatus(task.status)}</span></td>
            <td>${task.due_date ? formatDate(task.due_date) : 'No date'}</td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="openTask(${task.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
            </td>
        </tr>
    `).join('');
}

async function renderFitnessDeadlinesSection() {
    const deadlinesTable = document.getElementById('fitnessDeadlinesTable');
    if (!deadlinesTable) return;
    
    const deadlines = await API.getUpcomingDeadlines(5, 'fitness');
    
    if (deadlines.length === 0) {
        deadlinesTable.innerHTML = `
            <tr>
                <td colspan="6" class="text-center py-3">No upcoming fitness deadlines</td>
            </tr>
        `;
        return;
    }
    
    deadlinesTable.innerHTML = deadlines.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${capitalizeFirstLetter(item.type)}</td>
            <td>${formatDate(item.due_date)}</td>
            <td><span class="badge status-${item.status}">${formatStatus(item.status)}</span></td>
            <td><span class="badge priority-${item.priority}">${formatPriority(item.priority)}</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" onclick="viewDeadlineItem('${item.type}', ${item.id})">
                    View
                </button>
            </td>
        </tr>
    `).join('');
}

function updateFitnessCenterStats() {
    const fitnessProjects = projects.filter(p => p.area === 'fitness');
    const activeFitnessProjects = fitnessProjects.filter(p => p.status === 'in_progress');
    
    let fitnessTasks = 0;
    let completedFitnessTasks = 0;
    
    fitnessProjects.forEach(project => {
        project.stories.forEach(story => {
            fitnessTasks += story.tasks.length;
            completedFitnessTasks += story.tasks.filter(task => task.status === 'completed').length;
        });
    });
    
    updateElementText('fitnessProjectsCount', fitnessProjects.length);
    updateElementText('activeFitnessProjectsCount', activeFitnessProjects.length);
    updateElementText('fitnessTasksCount', fitnessTasks);
    updateElementText('completedFitnessTasksCount', completedFitnessTasks);
}

// Common UI Components
function renderProjectCard(project) {
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

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
    
    // Setup update button handler
    document.getElementById('updateProjectBtn').onclick = function() {
        updateProject(projectId);
    };
    
    // Show modal
    new bootstrap.Modal(document.getElementById('projectModal')).show();
}

function updateProject(projectId) {
    const projectData = {
        status: document.getElementById('projectStatus').value,
        priority: document.getElementById('projectPriority').value,
        start_date: document.getElementById('projectStartDate').value || null,
        due_date: document.getElementById('projectDueDate').value || null,
        notes: document.getElementById('projectNotes').value
    };
    
    API.updateProject(projectId, projectData);
    
    // Close modal
    bootstrap.Modal.getInstance(document.getElementById('projectModal')).hide();
    
    // Update UI based on current page
    refreshCurrentPageUI();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

function refreshCurrentPageUI() {
    const currentPage = getCurrentPage();
    
    switch (currentPage) {
        case 'index':
            renderRecentProjects();
            renderUpcomingDeadlines();
            renderDashboardStats();
            break;
        case 'projects':
            renderAllProjectsTab();
            renderWorkProjectsTab();
            renderPersonalProjectsTab();
            renderFreelanceProjectsTab();
            renderFitnessProjectsTab();
            break;
        case 'work-center':
            renderWorkProjectsSection();
            renderWorkTasksSection();
            renderWorkDeadlinesSection();
            updateWorkCenterStats();
            break;
        case 'personal-center':
            renderPersonalProjectsSection();
            renderPersonalTasksSection();
            renderPersonalDeadlinesSection();
            updatePersonalCenterStats();
            break;
        case 'freelance-center':
            renderFreelanceProjectsSection();
            renderFreelanceTasksSection();
            renderFreelanceDeadlinesSection();
            updateFreelanceCenterStats();
            break;
        case 'fitness-center':
            renderFitnessProjectsSection();
            renderFitnessTasksSection();
            renderFitnessDeadlinesSection();
            updateFitnessCenterStats();
            break;
    }
    
    // Always update navigation badges
    updateNavigationBadges();
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
    renderStoryTasks();
    
    // Show modal
    new bootstrap.Modal(document.getElementById('storyModal')).show();
}

function renderStoryTasks() {
    // This function will need to be implemented if we have a task list in the story modal
    // For now, it's a placeholder
}

// Modal functions
function showAddProjectModal() {
    // Reset form
    document.getElementById('newProjectName').value = '';
    document.getElementById('newProjectDescription').value = '';
    document.getElementById('newProjectCategory').value = currentCategory || 'work';
    document.getElementById('newProjectStatus').value = 'not_started';
    document.getElementById('newProjectPriority').value = 'medium';
    document.getElementById('newProjectStartDate').value = '';
    document.getElementById('newProjectDueDate').value = '';
    document.getElementById('newProjectNotes').value = '';
    
    new bootstrap.Modal(document.getElementById('addProjectModal')).show();
}

function showAddStoryModal() {
    populateProjectOptions();
    
    // Reset form
    document.getElementById('newStoryTitle').value = '';
    document.getElementById('newStoryDescription').value = '';
    document.getElementById('newStoryStatus').value = 'backlog';
    document.getElementById('newStoryPriority').value = 'medium';
    document.getElementById('newStoryStartDate').value = '';
    document.getElementById('newStoryDueDate').value = '';
    document.getElementById('newStoryNotes').value = '';
    
    new bootstrap.Modal(document.getElementById('addStoryModal')).show();
}

function showAddTaskModal() {
    populateAllStories('newTaskStory');
    
    // Reset form
    document.getElementById('newTaskTitle').value = '';
    document.getElementById('newTaskStatus').value = 'backlog';
    document.getElementById('newTaskPriority').value = 'medium';
    document.getElementById('newTaskStartDate').value = '';
    document.getElementById('newTaskDueDate').value = '';
    document.getElementById('newTaskNotes').value = '';
    
    new bootstrap.Modal(document.getElementById('addTaskModal')).show();
}

function populateProjectOptions() {
    const select = document.getElementById('newStoryProject');
    if (!select) return;
    
    select.innerHTML = projects.map(project => 
        `<option value="${project.id}">${project.name}</option>`
    ).join('');
    
    if (currentProject) {
        select.value = currentProject.id;
    }
}

function populateAllStories(selectId, selectedStoryId = null) {
    const select = document.getElementById(selectId);
    if (!select) return;
    
    select.innerHTML = '';
    
    // Group stories by project
    projects.forEach(project => {
        if (project.stories.length > 0) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = project.name;
            
            project.stories.forEach(story => {
                const option = document.createElement('option');
                option.value = story.id;
                option.textContent = story.title;
                optgroup.appendChild(option);
            });
            
            select.appendChild(optgroup);
        }
    });
    
    if (selectedStoryId) {
        select.value = selectedStoryId;
    }
}

// Area-specific modal functions and utilities
function showAddWorkProject() {
    // Reset form
    document.getElementById('newWorkProjectName').value = '';
    document.getElementById('newWorkProjectDescription').value = '';
    document.getElementById('newWorkProjectStatus').value = 'not_started';
    document.getElementById('newWorkProjectPriority').value = 'medium';
    document.getElementById('newWorkProjectStartDate').value = '';
    document.getElementById('newWorkProjectDueDate').value = '';
    document.getElementById('newWorkProjectNotes').value = '';
    
    new bootstrap.Modal(document.getElementById('addWorkProjectModal')).show();
}

function showAddPersonalProject() {
    // Reset form
    document.getElementById('newPersonalProjectName').value = '';
    document.getElementById('newPersonalProjectDescription').value = '';
    document.getElementById('newPersonalProjectStatus').value = 'not_started';
    document.getElementById('newPersonalProjectPriority').value = 'medium';
    document.getElementById('newPersonalProjectStartDate').value = '';
    document.getElementById('newPersonalProjectDueDate').value = '';
    document.getElementById('newPersonalProjectNotes').value = '';
    
    new bootstrap.Modal(document.getElementById('addPersonalProjectModal')).show();
}

function showAddFreelanceProject() {
    // Reset form
    document.getElementById('newFreelanceProjectName').value = '';
    document.getElementById('newFreelanceProjectDescription').value = '';
    document.getElementById('newFreelanceProjectStatus').value = 'not_started';
    document.getElementById('newFreelanceProjectPriority').value = 'medium';
    document.getElementById('newFreelanceProjectStartDate').value = '';
    document.getElementById('newFreelanceProjectDueDate').value = '';
    document.getElementById('newFreelanceProjectNotes').value = '';
    
    new bootstrap.Modal(document.getElementById('addFreelanceProjectModal')).show();
}

function showAddFitnessProject() {
    // Reset form
    document.getElementById('newFitnessProjectName').value = '';
    document.getElementById('newFitnessProjectDescription').value = '';
    document.getElementById('newFitnessProjectStatus').value = 'not_started';
    document.getElementById('newFitnessProjectPriority').value = 'medium';
    document.getElementById('newFitnessProjectStartDate').value = '';
    document.getElementById('newFitnessProjectDueDate').value = '';
    document.getElementById('newFitnessProjectNotes').value = '';
    
    new bootstrap.Modal(document.getElementById('addFitnessProjectModal')).show();
}

function showAddWorkTask() {
    populateWorkProjectsDropdown();
    populateWorkStories();
    
    // Reset form
    document.getElementById('newWorkTaskTitle').value = '';
    document.getElementById('newWorkTaskStatus').value = 'backlog';
    document.getElementById('newWorkTaskPriority').value = 'medium';
    document.getElementById('newWorkTaskStartDate').value = '';
    document.getElementById('newWorkTaskDueDate').value = '';
    document.getElementById('newWorkTaskNotes').value = '';
    
    new bootstrap.Modal(document.getElementById('addWorkTaskModal')).show();
}

function showAddPersonalTask() {
    populatePersonalProjectsDropdown();
    populatePersonalStories();
    
    // Reset form
    document.getElementById('newPersonalTaskTitle').value = '';
    document.getElementById('newPersonalTaskStatus').value = 'backlog';
    document.getElementById('newPersonalTaskPriority').value = 'medium';
    document.getElementById('newPersonalTaskStartDate').value = '';
    document.getElementById('newPersonalTaskDueDate').value = '';
    document.getElementById('newPersonalTaskNotes').value = '';
    
    new bootstrap.Modal(document.getElementById('addPersonalTaskModal')).show();
}

function showAddFreelanceTask() {
    populateFreelanceProjectsDropdown();
    populateFreelanceStories();
    
    // Reset form
    document.getElementById('newFreelanceTaskTitle').value = '';
    document.getElementById('newFreelanceTaskStatus').value = 'backlog';
    document.getElementById('newFreelanceTaskPriority').value = 'medium';
    document.getElementById('newFreelanceTaskStartDate').value = '';
    document.getElementById('newFreelanceTaskDueDate').value = '';
    document.getElementById('newFreelanceTaskNotes').value = '';
    
    new bootstrap.Modal(document.getElementById('addFreelanceTaskModal')).show();
}

function showAddFitnessTask() {
    populateFitnessProjectsDropdown();
    populateFitnessStories();
    
    // Reset form
    document.getElementById('newFitnessTaskTitle').value = '';
    document.getElementById('newFitnessTaskStatus').value = 'backlog';
    document.getElementById('newFitnessTaskPriority').value = 'medium';
    document.getElementById('newFitnessTaskStartDate').value = '';
    document.getElementById('newFitnessTaskDueDate').value = '';
    document.getElementById('newFitnessTaskNotes').value = '';
    
    new bootstrap.Modal(document.getElementById('addFitnessTaskModal')).show();
}

function populateWorkProjectsDropdown() {
    const select = document.getElementById('newWorkTaskProject');
    if (!select) return;
    
    const workProjects = projects.filter(p => p.area === 'work');
    
    select.innerHTML = workProjects.map(project => 
        `<option value="${project.id}">${project.name}</option>`
    ).join('');
}

function populatePersonalProjectsDropdown() {
    const select = document.getElementById('newPersonalTaskProject');
    if (!select) return;
    
    const personalProjects = projects.filter(p => p.area === 'personal');
    
    select.innerHTML = personalProjects.map(project => 
        `<option value="${project.id}">${project.name}</option>`
    ).join('');
}

function populateFreelanceProjectsDropdown() {
    const select = document.getElementById('newFreelanceTaskProject');
    if (!select) return;
    
    const freelanceProjects = projects.filter(p => p.area === 'freelance');
    
    select.innerHTML = freelanceProjects.map(project => 
        `<option value="${project.id}">${project.name}</option>`
    ).join('');
}

function populateFitnessProjectsDropdown() {
    const select = document.getElementById('newFitnessTaskProject');
    if (!select) return;
    
    const fitnessProjects = projects.filter(p => p.area === 'fitness');
    
    select.innerHTML = fitnessProjects.map(project => 
        `<option value="${project.id}">${project.name}</option>`
    ).join('');
}

function populateWorkStories() {
    const projectSelect = document.getElementById('newWorkTaskProject');
    const storySelect = document.getElementById('newWorkTaskStory');
    
    if (!projectSelect || !storySelect) return;
    
    const projectId = parseInt(projectSelect.value);
    const project = projects.find(p => p.id === projectId);
    
    if (project) {
        if (project.stories.length === 0) {
            storySelect.innerHTML = '<option value="">No stories available - create one first</option>';
            return;
        }
        
        storySelect.innerHTML = project.stories.map(story => 
            `<option value="${story.id}">${story.title}</option>`
        ).join('');
    }
}

function populatePersonalStories() {
    const projectSelect = document.getElementById('newPersonalTaskProject');
    const storySelect = document.getElementById('newPersonalTaskStory');
    
    if (!projectSelect || !storySelect) return;
    
    const projectId = parseInt(projectSelect.value);
    const project = projects.find(p => p.id === projectId);
    
    if (project) {
        if (project.stories.length === 0) {
            storySelect.innerHTML = '<option value="">No stories available - create one first</option>';
            return;
        }
        
        storySelect.innerHTML = project.stories.map(story => 
            `<option value="${story.id}">${story.title}</option>`
        ).join('');
    }
}

function populateFreelanceStories() {
    const projectSelect = document.getElementById('newFreelanceTaskProject');
    const storySelect = document.getElementById('newFreelanceTaskStory');
    
    if (!projectSelect || !storySelect) return;
    
    const projectId = parseInt(projectSelect.value);
    const project = projects.find(p => p.id === projectId);
    
    if (project) {
        if (project.stories.length === 0) {
            storySelect.innerHTML = '<option value="">No stories available - create one first</option>';
            return;
        }
        
        storySelect.innerHTML = project.stories.map(story => 
            `<option value="${story.id}">${story.title}</option>`
        ).join('');
    }
}

function populateFitnessStories() {
    const projectSelect = document.getElementById('newFitnessTaskProject');
    const storySelect = document.getElementById('newFitnessTaskStory');
    
    if (!projectSelect || !storySelect) return;
    
    const projectId = parseInt(projectSelect.value);
    const project = projects.find(p => p.id === projectId);
    
    if (project) {
        if (project.stories.length === 0) {
            storySelect.innerHTML = '<option value="">No stories available - create one first</option>';
            return;
        }
        
        storySelect.innerHTML = project.stories.map(story => 
            `<option value="${story.id}">${story.title}</option>`
        ).join('');
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
    refreshCurrentPageUI();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addProjectModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Create area-specific projects
function createWorkProject(e) {
    e.preventDefault();
    
    const projectData = {
        name: document.getElementById('newWorkProjectName').value,
        description: document.getElementById('newWorkProjectDescription').value,
        area: 'work',
        status: document.getElementById('newWorkProjectStatus').value,
        priority: document.getElementById('newWorkProjectPriority').value,
        start_date: document.getElementById('newWorkProjectStartDate').value || null,
        due_date: document.getElementById('newWorkProjectDueDate').value || null,
        notes: document.getElementById('newWorkProjectNotes').value
    };
    
    API.createProject(projectData);
    
    // Update UI
    refreshCurrentPageUI();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addWorkProjectModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

function createPersonalProject(e) {
    e.preventDefault();
    
    const projectData = {
        name: document.getElementById('newPersonalProjectName').value,
        description: document.getElementById('newPersonalProjectDescription').value,
        area: 'personal',
        status: document.getElementById('newPersonalProjectStatus').value,
        priority: document.getElementById('newPersonalProjectPriority').value,
        start_date: document.getElementById('newPersonalProjectStartDate').value || null,
        due_date: document.getElementById('newPersonalProjectDueDate').value || null,
        notes: document.getElementById('newPersonalProjectNotes').value
    };
    
    API.createProject(projectData);
    
    // Update UI
    refreshCurrentPageUI();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addPersonalProjectModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

function createFreelanceProject(e) {
    e.preventDefault();
    
    const projectData = {
        name: document.getElementById('newFreelanceProjectName').value,
        description: document.getElementById('newFreelanceProjectDescription').value,
        area: 'freelance',
        status: document.getElementById('newFreelanceProjectStatus').value,
        priority: document.getElementById('newFreelanceProjectPriority').value,
        start_date: document.getElementById('newFreelanceProjectStartDate').value || null,
        due_date: document.getElementById('newFreelanceProjectDueDate').value || null,
        notes: document.getElementById('newFreelanceProjectNotes').value
    };
    
    API.createProject(projectData);
    
    // Update UI
    refreshCurrentPageUI();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addFreelanceProjectModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

function createFitnessProject(e) {
    e.preventDefault();
    
    const projectData = {
        name: document.getElementById('newFitnessProjectName').value,
        description: document.getElementById('newFitnessProjectDescription').value,
        area: 'fitness',
        status: document.getElementById('newFitnessProjectStatus').value,
        priority: document.getElementById('newFitnessProjectPriority').value,
        start_date: document.getElementById('newFitnessProjectStartDate').value || null,
        due_date: document.getElementById('newFitnessProjectDueDate').value || null,
        notes: document.getElementById('newFitnessProjectNotes').value
    };
    
    API.createProject(projectData);
    
    // Update UI
    refreshCurrentPageUI();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addFitnessProjectModal')).hide();
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
    
    refreshCurrentPageUI();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addStoryModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Create new task
function createTask(e) {
    e.preventDefault();
    
    const storyId = parseInt(document.getElementById('newTaskStory').value);
    if (!storyId) {
        alert('Please select a story for this task.');
        return;
    }
    
    const taskData = {
        story_id: storyId,
        title: document.getElementById('newTaskTitle').value,
        status: document.getElementById('newTaskStatus').value,
        priority: document.getElementById('newTaskPriority').value,
        start_date: document.getElementById('newTaskStartDate').value || null,
        due_date: document.getElementById('newTaskDueDate').value || null,
        notes: document.getElementById('newTaskNotes').value
    };
    
    API.createTask(taskData);
    
    // Update UI
    refreshCurrentPageUI();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addTaskModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Create area-specific tasks
function createWorkTask(e) {
    e.preventDefault();
    
    const storyId = parseInt(document.getElementById('newWorkTaskStory').value);
    if (!storyId) {
        alert('Please select a story for this task.');
        return;
    }
    
    const taskData = {
        story_id: storyId,
        title: document.getElementById('newWorkTaskTitle').value,
        status: document.getElementById('newWorkTaskStatus').value,
        priority: document.getElementById('newWorkTaskPriority').value,
        start_date: document.getElementById('newWorkTaskStartDate').value || null,
        due_date: document.getElementById('newWorkTaskDueDate').value || null,
        notes: document.getElementById('newWorkTaskNotes').value
    };
    
    API.createTask(taskData);
    
    // Update UI
    refreshCurrentPageUI();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addWorkTaskModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

function createPersonalTask(e) {
    e.preventDefault();
    
    const storyId = parseInt(document.getElementById('newPersonalTaskStory').value);
    if (!storyId) {
        alert('Please select a story for this task.');
        return;
    }
    
    const taskData = {
        story_id: storyId,
        title: document.getElementById('newPersonalTaskTitle').value,
        status: document.getElementById('newPersonalTaskStatus').value,
        priority: document.getElementById('newPersonalTaskPriority').value,
        start_date: document.getElementById('newPersonalTaskStartDate').value || null,
        due_date: document.getElementById('newPersonalTaskDueDate').value || null,
        notes: document.getElementById('newPersonalTaskNotes').value
    };
    
    API.createTask(taskData);
    
    // Update UI
    refreshCurrentPageUI();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addPersonalTaskModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

function createFreelanceTask(e) {
    e.preventDefault();
    
    const storyId = parseInt(document.getElementById('newFreelanceTaskStory').value);
    if (!storyId) {
        alert('Please select a story for this task.');
        return;
    }
    
    const taskData = {
        story_id: storyId,
        title: document.getElementById('newFreelanceTaskTitle').value,
        status: document.getElementById('newFreelanceTaskStatus').value,
        priority: document.getElementById('newFreelanceTaskPriority').value,
        start_date: document.getElementById('newFreelanceTaskStartDate').value || null,
        due_date: document.getElementById('newFreelanceTaskDueDate').value || null,
        notes: document.getElementById('newFreelanceTaskNotes').value
    };
    
    API.createTask(taskData);
    
    // Update UI
    refreshCurrentPageUI();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addFreelanceTaskModal')).hide();
    e.target.reset();
    
    // Save to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
}

function createFitnessTask(e) {
    e.preventDefault();
    
    const storyId = parseInt(document.getElementById('newFitnessTaskStory').value);
    if (!storyId) {
        alert('Please select a story for this task.');
        return;
    }
    
    const taskData = {
        story_id: storyId,
        title: document.getElementById('newFitnessTaskTitle').value,
        status: document.getElementById('newFitnessTaskStatus').value,
        priority: document.getElementById('newFitnessTaskPriority').value,
        start_date: document.getElementById('newFitnessTaskStartDate').value || null,
        due_date: document.getElementById('newFitnessTaskDueDate').value || null,
        notes: document.getElementById('newFitnessTaskNotes').value
    };
    
    API.createTask(taskData);
    
    // Update UI
    refreshCurrentPageUI();
    
    // Close modal and reset form
    bootstrap.Modal.getInstance(document.getElementById('addFitnessTaskModal')).hide();
    e.target.reset();
    
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
