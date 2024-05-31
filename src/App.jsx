import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header'
import Panel from './vistas/Panel'
import Registro from './vistas/Registro'
import Login from './vistas/login'
import { GlobalContextProvider } from './context/GlobalContext'

function App() {

  return (
    <>
    <GlobalContextProvider>
      <Header></Header>
      <Routes>
                  <Route path='/' element={<Panel/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/registro' element={<Registro/>}/>
      </Routes>
    </GlobalContextProvider>
    
    </>
  )
}

export default App
