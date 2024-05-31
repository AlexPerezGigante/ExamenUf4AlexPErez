import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


function TablasResueltos() {
    const {dades, setDades} = useContext(GlobalContext)
    console.log(dades)
    return (
      <>
<tbody>
    {
        dades.ticketsResueltos.map((element)=>{
            return(
                <tr key={element.codigo}>
                    <td>{element.codigo}</td>
                    <td>{element.fecha}</td>
                    <td>{element.fecha_resuelto}</td>
                    <td>{element.aula}</td>
                    <td>{element.grupo}</td>
                    <td>{element.ordenador}</td>
                    <td>{element.descripcion}</td>
                    <td>{element.alumno}</td>
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
  
  export default TablasResueltos

