import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : 'product',
    initialState: {
        allProducts: [],
        loading: false,
        selectCategory: ''
    },
    reducers: {
        saveAllProductsAction: (state, action) => {
            state.allProducts = action.payload
            state.loading = true
            
        },

        saveSelectCategoryAction: (state, action) => {
            state.selectCategory = action.payload
        }

    }
})

export const {saveAllProductsAction, saveSelectCategoryAction} = productSlice.actions
export default productSlice.reducer