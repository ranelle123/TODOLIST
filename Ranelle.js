
let tasks = [];
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');


taskForm.addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const newTask = {
        titre: document.getElementById('titre').value,
        sousTitre: document.getElementById('sousTitre').value,
        message: document.getElementById('message').value,
        email: document.getElementById('email').value,
        date: document.getElementById('date').value,
        completed: false
    };

    
    tasks.push(newTask);
    
    
    taskForm.reset();
    renderTasks();
});


function renderTasks() {
    taskList.innerHTML = ""; 

    tasks.forEach((task, index) => {
        const card = document.createElement('div');
        card.className = `card ${task.completed ? 'completed' : ''}`;

        card.innerHTML = `
            <h3>${task.titre}</h3>
            <h4>${task.sousTitre}</h4>
            <p>${task.message}</p>
            <small>${task.email} | ${task.date}</small>
            <br><br>
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})"> Complétée
            <button onclick="deleteTask(${index})">Supprimer</button>
        `;

        taskList.appendChild(card);
    });
}


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}


function deleteTask(index) {
    tasks.splice(index, 1); 
    renderTasks();   
}