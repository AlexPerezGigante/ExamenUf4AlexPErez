import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


function Form() {
    const {dades, setDades} = useContext(GlobalContext)
    return (
      <>

        <div className="mb-3">
            <h2>{dades.id}</h2>
            <label htmlFor="exampleInputEmail1" className="form-label">Fecha</label>
            <input type="date" className="form-control" defaultValue={dades.fecha} />
           
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Aula</label>
            <input type="text" className="form-control" defaultValue={dades.aula}/>
        </div>
        <div className="mb-3 form-check">
        <label htmlFor="exampleInputEmail1" className="form-label">Grupo</label>
            <input type="text" className="form-control" defaultValue={dades.grupo}/>
        </div>
        <div className="mb-3 form-check">
        <label htmlFor="exampleInputEmail1" className="form-label">Ordenador</label>
            <input type="text" className="form-control" defaultValue={dades.ordenador}/>
        </div>
        <div className="mb-3 form-check">
        <label htmlFor="exampleInputEmail1" className="form-label">Descripcion</label>
            <input type="text" className="form-control" defaultValue={dades.descripcion}/>
        </div>
        <div className="mb-3 form-check">
        <label htmlFor="exampleInputEmail1" className="form-label">Alumno</label>
            <input type="text" className="form-control" defaultValue={dades.alumno}/>
        </div>
        <button className="btn btn-primary">Submit</button>

      </>
    )
  }
  
  export default Form
  