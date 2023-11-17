import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import NuevoCliente,{action as NuevoClienteAction} from './pages/NuevoCliente.jsx'
import Index, {loader as clientesLoader} from './pages/Index.jsx'
import ErrorPage from './components/ErrorPage'


const router = createBrowserRouter(
  [{
         path:'/',
         element:<Layout/>,
         children:[
          {
            index: true,
            element:<Index />,
            loader:clientesLoader,
            errorElement:<ErrorPage />
          },
          {
            path:'/clientes/nuevo',
            element:<NuevoCliente />,
            action:NuevoClienteAction
          }
         ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
    router={router}
    />
  </React.StrictMode>,
)
