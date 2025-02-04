import React, { useContext } from 'react'
import './Cart.css'
const Cart = () => {
  const {cartItems,food_list,removeFromCart} = useContext(storeContext);

  return (
    <div className='cart'>
      <div className='cart-items'>

      </div>
    </div>
  )
}

export default Cart
