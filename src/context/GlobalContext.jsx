import { createContext, useState } from "react";
import { useEffect } from "react"
import datos from '../bd/jsonTickets.json'

// creamos el contexto (la bolsa donde meter los estados)
export const GlobalContext = createContext()



// creamos el proveedor del contexto 

export function GlobalContextProvider({ children }){

    

    const [dades, setDades] = useState([])

    const [historias, setHistorias] = useState([])
    const [dataHistoria, setDataHistoria] = useState({
        id: '',
        titulo: '',
        experiencia: '',
        comentario: '',
        imagen: '',
        fecha: ''
    })
    const tickets = datos
    

    useEffect(()=>{
        setDades(tickets)
        console.log(dades)
    }, [])

    return(
        <GlobalContext.Provider value={{
            dades, setDades
        }}>
            {children}
        </GlobalContext.Provider>
    )

}