let formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let username = document.querySelector('#username').value;
    let pass = document.querySelector('#pass').value;

    if (username === "" || pass === ""){
        alert('Todos los campos son obligatorios');

    } else{
        alert('Bienvenido ' + username);
    }
})