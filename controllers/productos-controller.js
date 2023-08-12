import { productService } from "../services/product-service.js";
const crearLinea = (img, title, price, id) => {
  const item = document.createElement("div");
  const cod = `
    <div class="inventario__item">
        <img class="inventario__item__img" src="../${img}">
        <a href="../screens/editar_producto.html?id=${id}" class="simple-button simple-button--edit"> 
        <img class="icono" src="../assets/img/edit.png" alt="boton editar"></a>
        <button class="simple-button simple-button--delete" type="button" id=${id}>
        <img class="icono" src="../assets/img/boton-eliminar.png" alt="boton eliminar">
        </button>
        <div class="descripcion">
        <span class="item__title">${title}</span>
        <span class="item__precio">${price}</span>
        <span class="item__detalles">id: ${id}</span>
        <div/>
    </div>`;
  item.className = "item";
  item.innerHTML = cod;
  const boton = item.querySelector("button");
  boton.addEventListener("click", () => {
    const id = boton.id;
    productService.eliminarProducto(id).then((respuesta) => {
      console.log("se elimino: " + id);
    }).catch(err => alert("ocurrio un error: " + err));
  })
  return item;
}

const productos = document.querySelector("[inventario]");
productService.listaProductos().then((lista) => {
  lista.forEach(({ img, title, price, id }) => {
    const newLine = crearLinea(img, title, price, id);
    productos.appendChild(newLine);
  })
}).catch((er) => {
  alert("Ocurrio un error", er);
  console.log("here", er)
});