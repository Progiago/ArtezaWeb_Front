import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './pages/Home/Home.jsx'


export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/></Route>
    </Routes>
  </BrowserRouter>
  )
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
