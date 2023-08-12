import { productService } from "../services/product-service.js";

const crearLinea = (opcat)=>{
    const item = document.createElement("option");
    const cod = `
        ${opcat}
    `;
    item.value = opcat;
    item.innerHTML = cod;
    return item;
}

const listaCategorias = document.querySelector("[listaCategorias]");
productService.listaCategorias().then((lista) =>{
    lista.forEach((categoriatitle) =>{
        const newLine = crearLinea(categoriatitle);
        listaCategorias.appendChild(newLine);
    })
}).catch((e) => {
    alert("Ocurrio un error en la lista de categorias");
    console.log("Error: ", e);
});