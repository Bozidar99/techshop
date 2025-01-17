import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : 'product',
    initialState: {
        allProducts: [],
        loading: false
        
    },
    reducers: {
        saveAllProductsAction: (state, action) => {
            state.allProducts = action.payload
            state.loading = true
        }

    }
})

export const {saveAllProductsAction} = productSlice.actions
export default productSlice.reducer