import { productService } from "../services/product-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () =>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if(id === null){
        window.location.href = "../screens/error.html";
    }
    
    const img = document.querySelector("[data-url]");
    const title = document.querySelector("[data-nombre]");
    const price = document.querySelector("[data-precio]");
    const category = document.querySelector("[listaCategorias]");
    const descripcion = document.querySelector("[data-descripcion]");
    try {
        const product = await productService.detalleProducto(id);
        if(product.title && product.img && product.price && product.category && product.descripcion){
            img.value = product.img;
            title.value = product.title;
            price.value = product.price;
            category.value = product.category;
            descripcion.value = product.descripcion;
        }else{
            throw new Error();
        }  
    } catch (error) {
        console.log("Ocurrio un error: ", error);
        window.location.href = "../screens/error.html";
    }
};

formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const img = document.querySelector("[data-url]").value;
    const title = document.querySelector("[data-nombre]").value;
    const price = document.querySelector("[data-precio]").value;
    const category = document.querySelector("[listaCategorias]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    productService.actualizarProducto(img,title,price,category,descripcion, id)
    .then(()=>{
        window.location.href = "../screens/edicion_concluida.html"
    });
});

obtenerInformacion();