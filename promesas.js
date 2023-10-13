// Función para cargar datos de usuarios desde la API y devolver una promesa
function fetchUsers() {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    reject('Error en la solicitud');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

// Función para mostrar los usuarios en la página
function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
    });
}

// Cargar y mostrar usuarios en la página
fetchUsers()
    .then(users => {
        displayUsers(users);
    })
    .catch(error => {
        console.error('Error:', error);
    });
