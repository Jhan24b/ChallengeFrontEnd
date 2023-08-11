const listaProductos = () =>fetch("http://localhost:5000/productos").then((respuesta) => respuesta.json());
const listaCategorias = () =>fetch("http://localhost:5000/inventario").then((respuesta) => respuesta.json());
const listaProductosPorCategoria = (cat) =>fetch(`http://localhost:5000/inventario/${cat}`).then((respuesta) => respuesta.json());
const crearProducto = (img,title,price,category) => {
    return fetch("http://localhost:5000/productos",{
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({img,title,price,category,id: uuid.v4()})
    })
};

const eliminarProducto = (id) =>{
    return fetch(`http://localhost:5000/productos/${id}`,{
        method: "DELETE"
    })
}

const detalleProducto = (id)=>{
    return fetch(`http://localhost:5000/productos/${id}`).then((respuesta)=>respuesta.json());
}

const actualizarProducto = (img,title,price,category,id)=>{
    return fetch(`http://localhost:5000/productos/${id}`,{
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({img,title,price,category,id})
    }).then(respuesta=>respuesta).catch(err => console.log("Ocurrio un error"+err));
}

export const productService = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    listaCategorias,
    listaProductosPorCategoria
};