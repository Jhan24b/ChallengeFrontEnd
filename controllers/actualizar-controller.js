import { clientService } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log("el id es: " + id);
    if(id == null){
        window.location.href = "../screens/error.html";
    }
    
    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
    try {
        const perfil = await clientService.detalleCliente(id);
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        }else{
            throw new Error();
        }  
    } catch (error) {
        console.log("Ocurrio un error: ", error);
        window.location.href = "../screens/error.html";
    }
    // clientService.detalleCliente(id).then((perfil) => {
    //     nombre.value = perfil.nombre;
    //     email.value = perfil.email;
    // })
};

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clientService.actualizarCliente(nombre,email,id)
    .then(()=>{
        window.location.href = "../screens/edicion_concluida.html"
    });
});

obtenerInformacion();