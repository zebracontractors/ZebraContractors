const projects = [
    [
        { title: "Project 1", description: "Detailed description of Project 1", image: "https://via.placeholder.com/300" },
        { title: "Project 2", description: "Detailed description of Project 2", image: "https://via.placeholder.com/300" },
        { title: "Project 3", description: "Detailed description of Project 3", image: "https://via.placeholder.com/300" },
        { title: "Project 4", description: "Detailed description of Project 4", image: "https://via.placeholder.com/300" }
    ],
    [
        { title: "Project 5", description: "Detailed description of Project 5", image: "https://via.placeholder.com/300" },
        { title: "Project 6", description: "Detailed description of Project 6", image: "https://via.placeholder.com/300" },
        { title: "Project 7", description: "Detailed description of Project 7", image: "https://via.placeholder.com/300" },
        { title: "Project 8", description: "Detailed description of Project 8", image: "https://via.placeholder.com/300" }
    ]
];

let currentPage = 0;

function displayProjects(page) {
    const projectsContainer = document.getElementById('projects-container');
    const rows = projectsContainer.children;
    for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = (i === page * 2 || i === page * 2 + 1) ? 'flex' : 'none';
    }
}

function viewProject(page, index) {
    const project = projects[page][index];
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" style="width:100%; height:auto;">
        <p>${project.description}</p>
    `;
    modal.style.display = "block";
}

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        displayProjects(currentPage);
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentPage < projects.length - 1) {
        currentPage++;
        displayProjects(currentPage);
    }
});

// Modal close functionality
const modal = document.getElementBy
