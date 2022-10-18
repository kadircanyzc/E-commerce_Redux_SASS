import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-clice";
import loginSlice from "./login-slice";


const store = configureStore({
    reducer:{
        login:loginSlice.reducer,
        cart:cartSlice.reducer,
       

    }
})

export default store;