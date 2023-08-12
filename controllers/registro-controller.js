import { productService } from "../services/product-service.js";

const formulario  = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    const img = document.querySelector("[data-url]").value;
    const title = document.querySelector("[data-nombre]").value;
    const price = document.querySelector("[data-precio]").value;
    const category = document.querySelector("[listaCategorias]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    productService.crearProducto(img,title,price,category,descripcion,id).then(() =>{
        window.location.href ="../screens/registro_completado.html";
    }).catch(err =>console.log("Ocurrio un error " + err));
});
