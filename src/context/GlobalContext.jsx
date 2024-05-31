import { createContext, useState } from "react";
import { useEffect } from "react"



// creamos el contexto (la bolsa donde meter los estados)
export const GlobalContext = createContext()



// creamos el proveedor del contexto 

export function GlobalContextProvider({ children }){

    const [dadesPendientes, setDadesPendientes] = useState([])   
    const [dadesResueltos, setDadesResueltos] = useState([])
    const [dades, setDades] = useState({
        id: "",
      fecha: "",
      aula: "",
      grupo: "",
      ordenador: "",
      descripcion: "",
      alumno: ""
    })
    
    const urlPendientes = new URL('https://json-server-examenuf4-alex-perez.vercel.app/ticketsPendientes')
    const urlResueltos = new URL('https://json-server-examenuf4-alex-perez.vercel.app/ticketsResueltos')
    let ticketsPendientes = []
    let ticketsResueltos = []

    async function start(){

        const ticketsP = await fetch(urlPendientes)
         
        ticketsPendientes = await ticketsP.json()

        const ticketsR = await fetch(urlResueltos)
         
        ticketsResueltos = await ticketsR.json()

        const ticketsROrdenados =  ticketsResueltos.sort((a,b)=> b.fecha - a.fecha)
        const ticketsPOrdenados =  ticketsPendientes.sort((a,b)=> b.fecha - a.fecha)
        

        setDadesPendientes(ticketsPOrdenados)
        setDadesResueltos(ticketsROrdenados)

    }
    
    start()

    

    const [historias, setHistorias] = useState([])
    const [dataHistoria, setDataHistoria] = useState({
        id: '',
        titulo: '',
        experiencia: '',
        comentario: '',
        imagen: '',
        fecha: ''
    })

  
     

    return(
        <GlobalContext.Provider value={{
            dadesPendientes, setDadesPendientes,
            dadesResueltos, setDadesResueltos,
            dades, setDades
        }}>
            {children}
        </GlobalContext.Provider>
    )

}