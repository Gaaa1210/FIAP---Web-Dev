import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import Sobre from './pages/Sobre.jsx'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal/index.jsx'
import Servicos from './pages/Servisos.jsx'
import Contato from './pages/Contato.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {index: true, element:<ConteudoPrincipal/>},
      {path: "Sobre", element: <Sobre/>},
      {path: "Servicos", element: <Servicos/>}, 
      {path: "Contato", element: <Contato/>} 
      // Neste caso eu estou usando o Outlet para abrir as paginas. Ele esta falando que caso eu abra o '/' vai aparecer no Outlet automaticamente os outros childrens
    ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
