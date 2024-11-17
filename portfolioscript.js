const projects = [
    { id: 1, image: 'image/15.png', description: '$850K - $1.5M', buttonLabel:'Custom-Homes' },
    { id: 2, image: 'image/22.png', description: 'Description of Project 2', buttonLabel:'WareHouse' },
    { id: 3, image: 'image/28.png', description: 'Description of Project 3', buttonLabel:'Home Additions' },
    { id: 4, image: 'image/39.png', description: 'Description of Project 4', buttonLabel:'Basement renovations' },
    { id: 5, image: 'project5.jpg', description: 'Description of Project 5', buttonLabel:'Home Renovation' },
    { id: 6, image: 'project6.jpg', description: 'Description of Project 6', buttonLabel:'Landscaping and Fencing ' },
    { id: 7, image: 'project7.jpg', description: 'Description of Project 7', buttonLabel:'Other Renovations' },
    { id: 8, image: 'project8.jpg', description: 'Description of Project 8', buttonLabel:'Custom-Homes' }
];

let currentPage = 1;
const projectsPerPage = 4;

function displayProjects(page) {
    const start = (page - 1) * projectsPerPage;
    const end = start + projectsPerPage;
    const projectsToDisplay = projects.slice(start, end);

    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    projectsToDisplay.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <img src="${project.image}" alt="Project ${project.id}">
            <button class="view-button" onclick="viewProject(${project.id})">${project.buttonLabel}</button>

        `;
        projectsGrid.appendChild(projectElement);
    });
}

function viewProject(id) {
    const project = projects.find(p => p.id === id);
    document.getElementById('project-description').innerText = project.description;
    document.getElementById('modal').style.display = 'block';
}

document.getElementById('close-button').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

function nextPage() {
    if (currentPage < Math.ceil(projects.length / projectsPerPage)) {
        currentPage++;
        displayProjects(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayProjects(currentPage);
    }
}

// Initial display
displayProjects(currentPage);
