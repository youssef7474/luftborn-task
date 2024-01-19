import { configureStore } from "@reduxjs/toolkit";
import Products from "./productsSlice"

const store=configureStore({
    reducer:{
        Products
    }
})

export default store