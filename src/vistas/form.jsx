import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"


function Form() {
    const {dades, setDades} = useContext(GlobalContext)
    return (
      <>

        <div className="mb-3">
            <h2>{dades.id}</h2>
            <label htmlFor="exampleInputEmail1" className="form-label">Fecha</label>
            <input type="date" className="form-control"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button className="btn btn-primary">Submit</button>

      </>
    )
  }
  
  export default Form
  