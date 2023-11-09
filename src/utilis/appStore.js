import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cartSlice";
const appStrore = configureStore({
    reducer:{
        cart: cardReducer
    }
});




export default appStrore;