const listaClientes = () =>fetch("http://localhost:5000/perfil").then((respuesta) => respuesta.json());
// {
//     // con Fetch en 3 lineas
//     console.log("hi");
//     return fetch("http://localhost:3000/perfil").then((respuesta)=>{
//         return respuesta.json();
//     });
//     // const promise = new Promise((resolve,reject) =>{ //los promise devuelven funciones asyncronas
//     //     const http = new XMLHttpRequest();

//     //     // abre el metodo y el url
//     //     http.open("GET","http://localhost:3000/perfil");
        
//     //     http.send();
        
//     //     http.onload = ()=>{
//     //         //conviertes el objeto http a json
//     //         const response= JSON.parse(http.response);    
//     //         if(http.status>=400){
//     //             reject(response);
//     //         }else{
//     //             resolve(response);
//     //         }
//     //     };
//     // });
//     // return promise;
// };

const crearCliente = (nombre,email) => {
    return fetch("http://localhost:3000/perfil",{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({nombre,email,id: uuid.v4()})
    })
};

const eliminarCliente = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "DELETE"
    })
}

const detalleCliente = (id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta)=>respuesta.json());
}

const actualizarCliente = (nombre,email,id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({nombre,email,id})
    }).then(respuesta=>respuesta).catch(err => console.log("Ocurrio un error"+err));
}

export const clientService = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
};