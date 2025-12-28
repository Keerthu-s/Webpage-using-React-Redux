import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.count += 1
    },
    addTwoItems: (state) => {
      state.count += 2
    },
    removeItem: (state) => {
      if (state.count > 0) {
        state.count -= 1
      }
    },
    clearCart: (state) => {
      state.count = 0
    },
  },
})

export const { addToCart, addTwoItems, removeItem, clearCart } =
  cartSlice.actions

export default cartSlice.reducer