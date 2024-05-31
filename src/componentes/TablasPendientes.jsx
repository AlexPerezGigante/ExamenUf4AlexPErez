import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


function TablasPendientes() {
    const {dadesPendientes, setDadesPendientes} = useContext(GlobalContext)
    return (
      <>
<tbody>
    {
        dadesPendientes.map((element)=>{
            return(
                <tr key={element.codigo}>
                    <td>{element.codigo}</td>
                    <td>{element.fecha}</td>
                    <td>{element.aula}</td>
                    <td>{element.grupo}</td>
                    <td>{element.ordenador}</td>
                    <td>{element.descripcion}</td>
                    <td>{element.alumno}</td>
                    <td><button className="btn btn-success" title="Resolver ticket">Resolver</button></td>
                    <td><button className="btn btn-warning" title="Añadir comentario"><i className="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                    </button>
                    </td>
                    <td><button className="btn btn-info" title="Ver comentarios"><i className="bi bi-chat-left-text"></i>
                    </button></td>
                    <td><button className="btn btn-danger" title="Eliminar ticket"><i className="bi bi-trash3"></i>
                    </button></td>
                </tr>
            )
        })
    }
      </tbody>
      </>
    )
  }
  
  export default TablasPendientes

