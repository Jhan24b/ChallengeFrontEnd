import { productService } from "../services/product-service.js";
const crearLinea= (img,title,price)=>{
    const item = document.createElement("div");
    const cod = `
    <img src=${img}>
    <div class="descripcion">
    <span class="item__title">${title}</span>
    <span class="item__precio">${price}</span>
    <span class="item__detalles"><a href="#">Ver producto</a></span>
    <div/>`;
  item.className="item";
  item.innerHTML=cod;
  return item;
}

const crearDivCategoria = (categoria) =>{
    const cat = document.createElement("div");
    const cod = `
    <div class="encabezado">
        <h2 class="categoria__titulo">${categoria}</h2>
        <span class="more">Ver Todo -></span>
    </div>

    <div class="productos" id=${categoria}>
    </div>
    `;
    cat.className="categoria";
    cat.innerHTML=cod;
    return cat;
}

const categorias = document.querySelector("[inventarios]");
productService.listaCategorias().then((lista) =>{
    lista.forEach((l)=>{
        const newcat = crearDivCategoria(Object.keys(l).toString());
        categorias.appendChild(newcat);
        const doc = document.getElementById(Object.keys(l).toString());
        Object.values(l).forEach((val) => {
            Object.values(val).forEach(({ img, title, price }) => {
                const newLine = crearLinea(img, title, price);
                doc.appendChild(newLine);
            });
        });        
    });
}).catch((er)=>{   
    alert("Ocurrio un error", er);
    console.log("here",er)
});

