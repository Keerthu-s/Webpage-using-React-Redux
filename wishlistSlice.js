import { createSlice } from '@reduxjs/toolkit'


const wishListSlice = createSlice({
  name: "wishlist",
  initialState:{
     list : 0,
  },
  reducers: {
      addWishList :(state) => {
        state.list += 1;
      },
      addTwoWish:(state) => {
        state.list += 2;
      },
      removeList :(state) => {
        if(state.list > 0){
            state.list -= 1;
        }
      },
      clearList : (state) => {
        state.list = 0;
      }
  }
});

export const {addTwoWish,addWishList,removeList,clearList} = wishListSlice.actions

export default wishListSlice.reducer
