import React from 'react'
import { useState } from 'react'

//compoennts
import  HeaderComponent  from "./HeaderComponent"

function NavBarComponent() {
    const [toggleHeader, setToggleHeader] = useState(true)
  return (
    <div>
      {toggleHeader && <HeaderComponent setToggleHeader={setToggleHeader}/>}
      <h3>NavBarComponent</h3>
    </div>
  )
}

export default NavBarComponent
