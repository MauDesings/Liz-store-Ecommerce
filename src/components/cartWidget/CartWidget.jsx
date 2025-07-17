import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import './cartWidget.css'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {
  const {state} = useCartContext();

  return (
    <div className='cartWidget'>
      <span className='cartWidget__number'>{state.totalItems}</span>
      <FaShoppingCart className='cartWidget__icon-cart'/>
    </div>
  )
}

export default CartWidget
