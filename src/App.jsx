import Header from "./Componenets/Header"
import Footer from "./Componenets/footer"
import Home from "./Componenets/Home"
import About from "./Componenets/About"
import { Outlet } from "react-router"
function App() {
  // const [count, setCount] = useState(0)

  return (
   
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default App
