import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Home from './Componenets/Home.jsx'
import About from './Componenets/About.jsx'
import Skills from './Componenets/Skills.jsx'
import Projects from './Componenets/Projects/Project.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/skills" ,
        element: <Skills/>
      },
      {
        path: "/projects" ,
        element: <Projects/>
      }
    ]
  }
])
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
