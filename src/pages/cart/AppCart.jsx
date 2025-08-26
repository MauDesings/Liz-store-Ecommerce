import { useCartContext } from '../../context/CartContext'
import ItemCart from '../../components/itemCart/ItemCart';
import './appCart.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const AppCart = () => {
  const {state,handleClearCart} = useCartContext();
  const totalItemsCart = state.totalItems > 1 ? `${state.totalItems} items` : `${state.totalItems} item`;
  const navigate = useNavigate();
  const {user} = useAuthContext();

  const handleCheckout = () => {
    if (user) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='cart'>
        {
            state.cart.length ? (
                <>
                    <ul className='cart__products-column'>
                        <li className='cart__head'>
                            <h3>CART <span>({totalItemsCart})</span></h3>
                        </li>

                        <li className='cart__body'>
                            {
                            state.cart.map(item => (
                                <ItemCart key={item.id} {...item} /> 
                            ))
                            }
                        </li>
                        
                        <li className='cart__footer'>
                            <NavLink to='/productos'>
                                <button className='cart__footer-btn'>Atráz</button>
                            </NavLink>
                            
                            <button className='cart__footer-btn' onClick={handleClearCart}>Vaciar carrito</button>
                        </li>
                    </ul>

                    <div className='cart__sumary-column'>
                        <h3 className='cart__sumary-title'>Resumen del pedido</h3>
                        <div className='cart__sumary-info'>
                            <p className='cart__sumary-subtitle'>Productos ({state.totalItems})</p>
                            <h4 className='cart__sumary-price'>TOTAL: $ {state.totalPrice}</h4>
                            <button className='cart__sumary-btn' onClick={handleCheckout}>Ir a pagar</button>
                        </div>
                    </div>
                </>
            ) : (
                <div className='cart__empty-content'>
                    <h3 className='cart__empty-message'>Tu carrito esta vacío</h3>
                    <NavLink to='/productos'>
                        <button className='cart__empty-btn'>Ir a productos</button>
                    </NavLink>
                </div>
            )
        }
    </div>
  )
}

export default AppCart
