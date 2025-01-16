import { Outlet } from "react-router-dom"
//COMPONENTS
import  NavBarComponent  from "./components/NavBarComponent"

//axios
import axios from "axios"

//axis default BaseURL Settings..
axios.defaults.baseURL = 'https://dummyjson.com'

function App() {

  return (
    <div>
      <NavBarComponent />
      <Outlet /> 
    </div>
  )
}

export default App
