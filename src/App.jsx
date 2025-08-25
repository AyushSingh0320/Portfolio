import Header from "./Componenets/Header"
import Footer from "./Componenets/footer"
import { Outlet } from "react-router"
import { Themeprovider } from "./Contexts/theme"
import { useEffect, useState } from "react"
import Home from "./Componenets/Home"
import About from "./Componenets/About"
import Skills from "./Componenets/Skills"
import Projects from "./Componenets/Projects/Project"
import { useLocation } from "react-router"



function App() {
 const location = useLocation();
const [ thememode , setThememode] = useState("dark")

function lightTheme(){
  setThememode("light")
}
function darkTheme(){
  setThememode("dark")
}
 
useEffect( () => {
  const ThemeChange = document.querySelector("html")
  ThemeChange.classList.remove("light" , "dark")
  ThemeChange.classList.add(thememode)
} , [thememode])

useEffect(() => {
  // Map route paths to section IDs
  const sectionMap = {
    "/": "home",
    "/about": "about",
    "/projects": "projects",
    "/skills": "skills",
  };
  const sectionId = sectionMap[location.pathname];
  if (sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);

  return (
   <Themeprovider  value = {{thememode , lightTheme , darkTheme }}>
    <div className="flex flex-col min-h-screen">
    <div className="sticky top-0 z-30 bg-white dark:bg-gray-900 pb-4">
      <Header/>
      </div>
      <div className="flex-1 dark:bg-gray-900">
    
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
    
      </div>
      <Footer/>
    </div>
    </Themeprovider>
  )
}

export default App
