import { RiDeleteBin6Line } from 'react-icons/ri';
import './itemCart.css'
import { useCartContext } from '../../context/CartContext';

const ItemCart = (item) => {
    const {image,title,price,id,quantity} = item;
    const {handleDeleted,handleIncrement,handleDecrement} = useCartContext();
    const resulSubTotal = price * quantity;
  return (
    <div className='item-cart'>

        <img className='item-cart__img-column' src={image} alt={title} />

        <div className='item-cart__info-column'>
            <div className='item-cart__head'>
                <h3 className='item-cart__title'>{title}</h3>
                <p className='item-cart__price'>$ {price}</p>
            </div>

            <div className='item-cart__body'>
                <p className='item-cart__subtotal'>subtotal: $ {Number(resulSubTotal.toFixed(2))}</p>
                <div className='item-cart__quantity-content'>
                    <div className='item-cart__quantity-control'>
                        <button className='item-cart__btn' onClick={()=> handleDecrement(id)}>-</button>
                        <input className='item-cart__input' type="text" value={quantity} onChange={(e)=> e.target.value}  />
                        <button className='item-cart__btn' onClick={()=> handleIncrement(id)}>+</button>
                    </div>
                    <RiDeleteBin6Line className='item-cart__delete' onClick={()=> handleDeleted(id)} />
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default ItemCart
