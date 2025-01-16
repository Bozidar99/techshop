import React from 'react'
import { useState } from 'react'

//compoennts
import HeaderComponent from "./HeaderComponent"
import SearchCompnent from './SearchCompnent'
import CategoryComponent from './CategoryComponent'

//IMAGES
import logo from '../assets/logo.png'
import { IoPersonCircleOutline, IoCart } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

//CLERK
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function NavBarComponent() {
  const [toggleHeader, setToggleHeader] = useState(true)
  return (
    <div>
      {toggleHeader && <HeaderComponent setToggleHeader={setToggleHeader} />}
      <div className='bg-mainBlue h-full py-[10px] lg:h-[100px]' >
        <div className='container mx-auto flex items-center justify-between h-full flex-col lg:flex-row gap-[15px]'>
          <img src={logo} alt="logo" />

          {/*Search bar compnent*/}
          <SearchCompnent />

          <div className='flex items-center gap-[30px]'>
            <div className='flex items-center gap-[10px] text-whiteColor text-lg'>
              <IoPersonCircleOutline size={38} />
              {/*Da se ulogujes*/}
              <SignedOut>
                <SignInButton />
              </SignedOut>

              {/*Kad se ulogujes*/}
              <SignedIn>
                <UserButton showName/>
              </SignedIn>
            </div>
            <div className='flex items-center gap-[10px] text-whiteColor text-lg'>
              <MdFavoriteBorder size={38} />

              <strong><span className='bg-mainYellow rounded-full px-[5px]'>0</span></strong>
              <strong><span>Favorites</span></strong>
            </div>
            <div className='flex items-center gap-[10px] text-whiteColor text-lg'>
              <IoCart size={38} />
              <strong><span className='bg-mainYellow rounded-full px-[5px]'>0</span></strong>
              <strong><span>Cart</span></strong>
            </div>
          </div>
        </div>
      </div>

      {/*Categories */}
      <CategoryComponent />
    </div>
  )
}

export default NavBarComponent
