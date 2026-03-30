import { createSlice } from "@reduxjs/toolkit"

// Učitaj stanje iz localStorage ili podesi početne vrijednosti
const initialCart = JSON.parse(localStorage.getItem('cart_item')) || []
const initialTotalProduct = JSON.parse(localStorage.getItem('cart_total')) || 0
const initialTotalPrice = initialCart.reduce((acc, item) => acc + item.cartTotal, 0)

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: initialCart,
    totalProduct: initialTotalProduct,
    totalPrice: initialTotalPrice,
  },
  reducers: {
    addToCart: (state, action) => {
      let copyCart = [...state.cart]

      let findIndex = null

      copyCart.find((item, index) => {
        if (item.id === action.payload.id) {
          findIndex = index
          return true
        }
      })

      if(findIndex === null) {
        copyCart.push({...action.payload, count: 1, cartTotal: action.payload.price})
        state.totalProduct++
        state.totalPrice += action.payload.price
      } else {
        copyCart[findIndex].count++
        copyCart[findIndex].cartTotal += copyCart[findIndex].price
        state.totalPrice += copyCart[findIndex].price
      }

      state.cart = copyCart

      localStorage.setItem('cart_item', JSON.stringify(copyCart))
      localStorage.setItem('cart_total', JSON.stringify(state.totalProduct))
    },

    deleteFromCartAction: (state, action) => {
      let copyCart = [...state.cart]

      let findIndex = null

      copyCart.find((item, index) => {
        if(item.id === action.payload.id){
          findIndex = index
          return true
        }
      })

      if(findIndex != null){
        // smanji totalProduct za count proizvoda koji se uklanja
        state.totalProduct -= copyCart[findIndex].count
        copyCart.splice(findIndex,1)
        state.totalPrice = subTotal(copyCart)
      }

      state.cart = copyCart

      localStorage.setItem('cart_item', JSON.stringify(copyCart))
      localStorage.setItem('cart_total', JSON.stringify(state.totalProduct))
    },

    setPriceHendlerAction(state, action) {
      const { increment, index } = action.payload
      let copyCart = [...state.cart]

      copyCart[index].cartTotal += copyCart[index].price * increment
      state.totalPrice = subTotal(copyCart)

      if (copyCart[index].count === 1 && increment === -1) {
        copyCart.splice(index, 1)
        state.totalProduct--
      } else {
        copyCart[index].count += increment
      }

      state.cart = copyCart

      localStorage.setItem('cart_item', JSON.stringify(copyCart))
      localStorage.setItem('cart_total', JSON.stringify(state.totalProduct))
    }
  }
})

function subTotal(arrayCart) {
  return arrayCart.reduce((acc, current) => acc + current.cartTotal, 0)
}

export const { addToCart, deleteFromCartAction, setPriceHendlerAction } = cartSlice.actions
export default cartSlice.reducer
