import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


function TablasResueltos() {
    const {dadesResueltos, setDadesResueltos} = useContext(GlobalContext)

    function borrarTicket(id){
        console.log(id)
        async function borrarTicketResuelto(){
            const url = new URL('https://json-server-examenuf4-alex-perez.vercel.app/ticketsResueltos')
            const urlDelStr = 'https://json-server-examenuf4-alex-perez.vercel.app/ticketsResueltos/'+id
            const urlDel = new URL(urlDelStr)
            await fetch(urlDel, {
              method: 'DELETE',
            })
    
            const usuarios = await fetch(url)
             
            setDadesResueltos(await usuarios.json())
          }

          borrarTicketResuelto()
        }
    return (
      <>
<tbody>
    {
        dadesResueltos.map((element)=>{
            return(
                <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.fecha}</td>
                    <td>{element.fecha_resuelto}</td>
                    <td>{element.aula}</td>
                    <td>{element.grupo}</td>
                    <td>{element.ordenador}</td>
                    <td>{element.descripcion}</td>
                    <td>{element.alumno}</td>
                    <td><button className="btn btn-info" title="Ver comentarios" onClick={()=>{
                        borrarTicket(element.id)
                    }}><i className="bi bi-chat-left-text"></i>
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

