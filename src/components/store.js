import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartslicer"

export const Store=configureStore({
    reducer:{
        cartslice:CartReducer,
    }
})