import React from 'react'
import Cart from './Cart'
import User from './user'
import WishList from './wishlist'
import './style.css'

function App() {
  return (
    <div className="app-layout">
    
      <div className="header">
        <h1>Simple Shop Website</h1>
        <User />
      </div>

      <div className="container">
        <Cart />
        <WishList />
      </div>
    </div>
  )
}

export default App;
