import { Outlet } from "react-router-dom"
//COMPONENTS
import  NavBarComponent  from "./components/NavBarComponent"

function App() {

  return (
    <div>
      <NavBarComponent />
      <Outlet /> 
    </div>
  )
}

export default App
