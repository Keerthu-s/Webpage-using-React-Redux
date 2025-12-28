import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addWishList, addTwoWish, removeList, clearList } from '../Feature/wishlistSlice'

function WishList() {

  const wish = useSelector((state) => state.wishlist.list)
  const dispatch = useDispatch()

  return (
    <div  className="card wishlist">
      <h2>Wishlist Items</h2>
      <p>Wishlist Count: {wish}</p>

      <button onClick={() => dispatch(addWishList())}>
        Add Wishlist
      </button>

      <button onClick={() => dispatch(addTwoWish())}>
        Add Two Wishlist
      </button>

      <button onClick={() => dispatch(removeList())}>
        Remove Wishlist
      </button>

      <button onClick={() => dispatch(clearList())}>
        Clear Wishlist
      </button>
    </div>
  )
}

export default WishList
