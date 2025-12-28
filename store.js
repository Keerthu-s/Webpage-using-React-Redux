import { configureStore} from "@reduxjs/toolkit";
import CartReducer  from './Feature/cartSlice';
import UserReducer from './Feature/userSlice';
import WishReducer from './Feature/wishlistSlice';

export const store = configureStore({
    reducer :{
         cart : CartReducer,
         user: UserReducer,
         wishlist :WishReducer,
    },    
})