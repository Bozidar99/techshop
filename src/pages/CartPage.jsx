import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'

function CartPage() {

  const {cart} = useSelector(state => state.cartStore)
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
            {cart.map((product,index) => (
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
                    <button className='px-[8px] py-[4px] bg-slate-300 text-[18px]' onClick={() => dispatch(setPriceHendlerAction({index, increment: -1}))}>-</button>
                    <span className='px-[8px] py-[4px] bg-slate-300 text-[18px]'>{product.count}</span>
                    <button className='px-[8px] py-[4px] bg-slate-300 text-[18px]' onClick={() => dispatch(setPriceHendlerAction({index, increment: +1}))}>+</button>
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
      </div>

      {/*CART TOTAL */}
    </div>
  );
}

export default CartPage
