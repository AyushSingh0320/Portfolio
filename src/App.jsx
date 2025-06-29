import Header from "./Componenets/Header"
import Footer from "./Componenets/footer"
import { Outlet } from "react-router"
import { Themeprovider } from "./Contexts/theme"
import { useEffect, useState } from "react"


function App() {
 
const [ thememode , setThememode] = useState("light")

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

  return (
   <Themeprovider  value = {{thememode , lightTheme , darkTheme }}>
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex-1 dark:bg-gray-900">
     <Outlet>
     </Outlet>
      </div>
      <Footer/>
    </div>
    </Themeprovider>
  )
}

export default App
