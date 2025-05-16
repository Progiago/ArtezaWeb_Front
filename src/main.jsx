import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Cadastro from './pages/Cadastro/Cadastro'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'; 


export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Cadastro' element={<Cadastro/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
