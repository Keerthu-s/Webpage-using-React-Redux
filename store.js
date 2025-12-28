import { configureStore} from "@reduxjs/toolkit";
import CartReducer  from './cartSlice';
import UserReducer from './userSlice';
import WishReducer from './wishlistSlice';

export const store = configureStore({
    reducer :{
         cart : CartReducer,
         user: UserReducer,
         wishlist :WishReducer,
    },    
})
