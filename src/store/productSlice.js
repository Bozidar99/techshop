import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : 'product',
    initialState: {
        allProducts: [],
        loading: false,
        selectCategory: '',
        searchProduct: ''
    },
    reducers: {
        saveAllProductsAction: (state, action) => {
            state.allProducts = action.payload
            state.loading = true
            
        },

        saveSelectCategoryAction: (state, action) => {
            state.selectCategory = action.payload
        },

        saveSearchProductAction: (state, action) => {
            state.searchProduct = action.payload
        }

    }
})

export const {saveAllProductsAction, saveSelectCategoryAction, saveSearchProductAction} = productSlice.actions
export default productSlice.reducer