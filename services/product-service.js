const listaProductos = () => fetch("http://localhost:5000/inventario").then((respuesta) => respuesta.json());
const listaCategorias = async () => {
    try {
        const respuesta = await fetch("http://localhost:5000/inventario");
        const inventario = await respuesta.json();

        // Crear un conjunto (Set) para almacenar categorías únicas
        const categoriasUnicas = new Set();

        // Recorrer los datos del inventario y agregar categorías al conjunto
        inventario.forEach((producto) => {
            categoriasUnicas.add(producto.category);
        });

        // Convertir el conjunto a un array para devolver
        return Array.from(categoriasUnicas);
    } catch (error) {
        console.error("Error al obtener las categorías:", error);
        return [];
    }
};
const crearProducto = (img, title, price, category,descripcion) => {
    return fetch("http://localhost:5000/inventario", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({category, img, title, descripcion, price, id: uuid.v4() })
    })
};

const eliminarProducto = (id) => {
    return fetch(`http://localhost:5000/inventario/${id}`, {
        method: "DELETE"
    })
}

const detalleProducto = (id) => {
    return fetch(`http://localhost:5000/inventario/${id}`).then((respuesta) => respuesta.json());
}

const actualizarProducto = (img,title,price,category,descripcion, id) => {
    return fetch(`http://localhost:5000/inventario/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ img,title,price,category,descripcion, id })
    }).then(respuesta => respuesta).catch(err => console.log("Ocurrio un error" + err));
}

export const productService = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    listaCategorias
};