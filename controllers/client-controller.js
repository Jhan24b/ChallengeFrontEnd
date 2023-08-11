import { clientService } from "../services/client-service.js";
const crearLinea= (nombre,email,id)=>{
    const linea = document.createElement("tr");
    const cod = `<tr>
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
            id=${id}
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  </tr>`;
  linea.innerHTML=cod;
  const boton = linea.querySelector("button");
  boton.addEventListener("click",()=>{
    const id = boton.id;
    clientService.eliminarCliente(id).then((respuesta)=>{
      console.log("se elimino: " + id);
    }).catch(err => alert("ocurrio un error: " + err));
  })
  return linea;
}

const table = document.querySelector("[data-table]");
clientService.listaClientes().then((data) => {
    data.forEach(({nombre,email,id}) => {
        const newLine = crearLinea(nombre,email,id);
        table.appendChild(newLine);
    });
}).catch((error) => alert("Ocurrio un error" + error));