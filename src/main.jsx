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
import ProjectDesc from './Componenets/Projects/ProjectDesc.jsx'
import ReactGA from "react-ga4";
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
      }, 
      {
        path:"/projectdescDesign-it",
        element: <ProjectDesc/>
      },
      {
        path:"/projectdescBlog-App",
        element: <ProjectDesc/>
      },
      {
        path:"/projectdescNotes",
        element: <ProjectDesc/>
      },
      {
        path:"/projectdescChat-Backend",
        element: <ProjectDesc/>
      }
    ]
  }
])
  
ReactGA.initialize("G-LCXRDL1G7F");
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)