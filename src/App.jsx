import Header from "./Componenets/Header"
import Footer from "./Componenets/footer"
import { Outlet } from "react-router"
function App() {
  // const [count, setCount] = useState(0)

  return (
   
    <div  >
    
   <Header/>

   <Outlet/>

   <Footer/>
   </div>
  )
}

export default App
