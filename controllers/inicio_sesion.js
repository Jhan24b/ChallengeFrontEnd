const usuarios = [
    { username: 'user1@gmail.com', password: 'user1' },
    { username: 'user2@gmail.com', password: 'user2' },
];

// Función para el inicio de sesión
// Obtenemos el formulario y los campos de usuario y contraseña
const loginForm = document.getElementById("loginForm");
const usuarioInput = document.getElementById("usuario");
const contrasenaInput = document.getElementById("contrasena");

// Función para manejar el inicio de sesión
function iniciarSesion(event) {
    event.preventDefault(); // Prevenir envío del formulario

    // Obtener los valores de usuario y contraseña
    const usuario = usuarioInput.value;
    const contrasena = contrasenaInput.value;
    let stado = false;
    console.log(usuario,contrasena);
    usuarios.forEach(({username,password}) =>{
        if(usuario === username && contrasena === password){
            stado = true;
        }
    });
    stado ? window.location.href = "principal.html" : alert("Error en las credenciales");
}
