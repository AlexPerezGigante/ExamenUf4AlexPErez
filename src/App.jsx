import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componentes/Header'
import Panel from './vistas/Panel'
import Registro from './vistas/Registro'
import Login from './vistas/login'
import Form from './vistas/form'
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
                  <Route path='/form' element={<Form/>}/>
      </Routes>
    </GlobalContextProvider>
    
    </>
  )
}

export default App
