function Header() {

    return (
      <>
        <nav className="navbar navbar-light bg-light fixed-top">
            <div className="container-fluid">
            <a className="navbar-brand">Gestión de incidencias FPLLEFIA</a>
            <div>
                <button className="btn btn-secondary ms-2">PANEL</button>
                <button className="btn btn-secondary ms-2">LOGIN</button>
                <button className="btn btn-secondary ms-2">REGISTRO</button>
            </div>
            <div>
                <span>administrador@fpllefia.com</span>
            </div>
            </div>
        </nav>
      </>
    )
  }
  
  export default Header

