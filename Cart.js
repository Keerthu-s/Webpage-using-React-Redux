import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, addTwoItems, removeItem, clearCart } from '../Feature/cartSlice'

function Cart() {
  const cartCount = useSelector((state) => state.cart.count)
  const dispatch = useDispatch()

  return (
    <div className="card cart">
      <h2>Cart</h2>
      <p>Items: {cartCount}</p>

      <button onClick={() => dispatch(addToCart())}>Add Item</button>
      <button onClick={() => dispatch(addTwoItems())}>Add Two Items</button>
      <button onClick={() => dispatch(removeItem())}>Remove Item</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  )
}

export default Cart