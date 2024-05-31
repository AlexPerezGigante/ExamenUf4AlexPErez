import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useNavigate } from "react-router-dom"


function TablasPendientes() {
    const {dadesPendientes, setDadesPendientes} = useContext(GlobalContext)
    const {dadesResueltas, setDadesResueltas} = useContext(GlobalContext)
    const {dades, setDades} = useContext(GlobalContext)
    const navigate = useNavigate()

    function borrarTicket(id){
        console.log(id)
        async function borrarTicketPendiente(){
            const url = new URL('https://json-server-examenuf4-alex-perez.vercel.app/ticketsPendientes')
            const urlDelStr = 'https://json-server-examenuf4-alex-perez.vercel.app/ticketsPendientes/'+id
            const urlDel = new URL(urlDelStr)
            await fetch(urlDel, {
              method: 'DELETE',
            })
    
            const usuarios = await fetch(url)
             
            setDadesPendientes(await usuarios.json())
          }

          borrarTicketPendiente()
        }

        function resolverTicket(element){
            async function borrarTicketPendiente(){
                const url = new URL('https://json-server-examenuf4-alex-perez.vercel.app/ticketsPendientes')
                const urlDelStr = 'https://json-server-examenuf4-alex-perez.vercel.app/ticketsPendientes/'+element.id
                const urlDel = new URL(urlDelStr)
                await fetch(urlDel, {
                  method: 'DELETE',
                })
        
                const usuarios = await fetch(url)
                 
                setDadesPendientes(await usuarios.json())
              }

              async function insertarTicketResuelto(){
                const url = new URL('https://json-server-examenuf4-alex-perez.vercel.app/ticketsResueltos')
                await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(element)
                })

                const usuarios = await fetch(url)
         
                setDadesResueltas(await usuarios.json())
              }
              borrarTicketPendiente()
              insertarTicketResuelto()
            }
            
            function editarTicket(element){
                setDades(element)
                navigate('/form')
            }


    return (
      <>
<tbody>
    {
        dadesPendientes.map((element)=>{
            return(
                <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.fecha}</td>
                    <td>{element.aula}</td>
                    <td>{element.grupo}</td>
                    <td>{element.ordenador}</td>
                    <td>{element.descripcion}</td>
                    <td>{element.alumno}</td>
                    <td><button className="btn btn-success" title="Resolver ticket" onClick={()=>{resolverTicket(element)}}>Resolver</button></td>
                    <td><button className="btn btn-warning" title="Añadir comentario" onClick={()=>{editarTicket(element)}}><i className="bi  bi-pencil" ></i>
                    </button>
                    </td>
                    <td><button className="btn btn-info" title="Ver comentarios"><i className="bi bi-chat-left-text"></i>
                    </button></td>
                    <td><button className="btn btn-danger" title="Eliminar ticket" onClick={()=>{borrarTicket(element.id)}}><i className="bi bi-trash3"></i>
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

