import React from 'react'
import './itemList.css'
import { NavLink } from 'react-router-dom';

const ItemList = (item) => {
    const { title, price, category, image, id } = item;
    
  return (
    <div className='item'>
        <img className='item__img' src={image} alt="" />
        <div className='item__info'>
            <h3 className='item__subtitle'>{title}</h3>
            <p className='item__price'>Precio: $ {price}</p>
            <p className='item__category'>{category}</p>
        </div>

        <NavLink className='item-btn' to={`/singleProduct/${id}`}>
            <button className='item__btn-info'>Más información</button>
        </NavLink>
      
    </div>
  )
}

export default ItemList
