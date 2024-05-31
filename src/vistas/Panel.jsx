import TablasPendientes from "../componentes/TablasPendientes"
import TablasResueltos from "../componentes/TablasResueltos"

function Panel() {

    return (
      <>
        <main className="container mt-5">
    <h1>Administración de incidencias</h1>
    <h2 className="mt-5">Tickets pendientes</h2>
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      {
        <TablasPendientes/>
      }
    </table>
    <h2 className="mt-5">Tickets resueltos</h2>
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
        </tr>
      </thead>
      {
        <TablasResueltos></TablasResueltos>
      }
    </table>
  </main>
      </>
    )
  }
  
  export default Panel