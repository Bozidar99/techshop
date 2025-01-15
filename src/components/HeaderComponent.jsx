import React from 'react'
import { CiLocationOn, CiDeliveryTruck } from 'react-icons/ci'
import { IoMdClose } from 'react-icons/io'

function HeaderComponent({setToggleHeader}) {

  function handleCloseHeader() {
      setToggleHeader(false)

  }
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between container mx-auto h-[90px] py-[15px]'>
      <div >
        <p>Need help? Call us: <a href="tel:+(+98) 0234 456 789">(+98) 0234 456 789 </a></p>
      </div>

      {/*right side*/}
      <div className="flex items-center gap-[30px] ">
        <div className="flex items-center gap-[10px]">
          {/*icon*/}
          <CiLocationOn size={28} /> 
          {/*text */}
          <span>Our store</span>
        </div>
        <div className="flex items-center gap-[10px]">
          {/*icon*/}
          <CiDeliveryTruck size={28} />
          {/*text */}
          <span>Track your order</span>
        </div>

        <IoMdClose size={28} onClick={handleCloseHeader}/>

      </div>

    </div>
  )
}

export default HeaderComponent
