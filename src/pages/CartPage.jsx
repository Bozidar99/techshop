import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

function CartPage() {

  const[activeCode, setActiveCode] = useState('')

  const { cart, totalPrice } = useSelector(state => state.cartStore)

  const couponRef = useRef()

  function handleApplyCoupon() {
     setActiveCode(couponRef.current.value)


     couponRef.current.value = ''

  }

  return (
    <div className='mt-[50px]'>
      <div className='container mx-auto flex flex-col lg:flex-row gap-[20px]'>
        <TableContainer component={Paper} className='w-full lg:w-[70%]'>
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead className='bg-mainBlue'>
              <TableRow>
                <TableCell style={{ color: 'white' }} className='text-textWhite'>Products</TableCell>
                <TableCell style={{ color: 'white' }} align="left">Price</TableCell>
                <TableCell style={{ color: 'white' }} align="left">Quantity</TableCell>
                <TableCell style={{ color: 'white' }} align="right">Subtotal</TableCell>
                <TableCell style={{ color: 'white' }} align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product, index) => (
                <TableRow

                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={product.thumbnail} alt="" className='w-[90px] h-[90px] border border-mainBlue rounded-lg object-cover ' />
                  </TableCell>
                  <TableCell align="left">${product.price}</TableCell>
                  <TableCell align="left">
                    <div className='flex items-center'>
                      <button className='px-[8px] py-[4px] bg-slate-300 text-[18px]' onClick={() => dispatch(setPriceHendlerAction({ index, increment: -1 }))}>-</button>
                      <span className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>{product.count}</span>
                      <button className='px-[8px] py-[4px] bg-slate-300 text-[18px]' onClick={() => dispatch(setPriceHendlerAction({ index, increment: +1 }))}>+</button>
                    </div>
                  </TableCell>
                  <TableCell align="right">${product.cartTotal}</TableCell>
                  <TableCell align="right">
                    <button className='text-red-400' onClick={() => handleRemoveProduct(product)}>Remove</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        {/*CART TOTAL */}
        <div className='w-full lg:w-[30%] '>
          <h2 className='text-whiteColor bg-mainBlue py-[16px] text-center rounded-[5px]'>CART TOTAL</h2>
          <span className='text-center text-[28px] font-extrabold'>Total price: ${activeCode === 'alphabozo' ? totalPrice / 2 : totalPrice}</span>
          <div className='flex flex-col '>
            <input 
              ref={couponRef}
              type='text' placeholder='Insert cupuon'
              className='p-[10px] border border-gray-500 rounded-lg placeholder:text-textColor outline-none mt-[25px]'
              //value={activeCode}
              //onChange={(e) => setActiveCode(e.target.value)}
            />
            <span className='text-[13px] text-gray-500'>Insert cupon for 50% discount</span>
            <button className= {activeCode === 'alphabozo' ? 
            'bg-gray-500 hover:bg-gray-600 text-whiteColor px-[15px] py-[7px] rounded-lg transition-all duration-300 cursor-pointer mt-[30px]' : 
            'bg-mainBlue hover:bg-mainYellow text-whiteColor px-[15px] py-[7px] rounded-lg transition-all duration-300 cursor-pointer mt-[30px]'}
            onClick={handleApplyCoupon}
            disabled = {activeCode === 'alphabozo' ? true : false}
            >
              {activeCode === 'alphabozo' ? 'Coupun applyed' : 'Apply Cupun'}
            </button>
          </div>

        </div>

      </div>


    </div>

  );
}

export default CartPage
