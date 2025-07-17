import { useSingleProduct } from '../../hooks/useSingleProduct'
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './appSingleProduct.css'
import { useCount } from '../../hooks/useCount';
import { useCartContext } from '../../context/CartContext';

const AppSingleProduct = () => {
    const {handleAdd} = useCartContext();
    const {amount,setAmount,increase,decrease} = useCount();
    const {getSingleParams, singleProduct, isSingleLoading, isSingleError,singleError} = useSingleProduct();
    const {ID} = useParams();
    const {image,title,price,description,category,id} = singleProduct;

    useEffect(()=>{
        if (ID) {
            getSingleParams(ID);
        }
    },[])

    if (isSingleLoading) return <p className='loading'>Cargando...</p>
    if (isSingleError) return <p className='title'>Error {singleError}</p>

  return (
    <div className='product-single'>

        <div className='product-single__img-column'>
            <img className='product-single__image' src={image} alt={title} />
        </div>
        
        <div className='product-single__info-column'>
            <div className='product-single__header'>
                <h3 className='product-single__category'>{category}</h3>
                <h2 className='product-single__title'>{title}</h2>
            </div>

            <p className='product-single__price'>$ {price}</p>

            <div className='product-single__body'>
                <p className='product-single__description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum amet obcaecati repudiandae aspernatur est tempore dolor in vero quia neque hic repellat nulla quidem laboriosam, praesentium ducimus quasi cum atque.</p>

                <div className='product-single__quantity-control'>
                    <button className='product-single__btn' onClick={decrease}>-</button>
                    <input className='product-single__input' name='quantity' type="text" value={amount} onChange={(e)=>e.target.value} />
                    <button className='product-single__btn' onClick={increase}>+</button>
                </div>
                <div className='product-single__actions'>
                    <button className='product-single__action-btn' onClick={()=> handleAdd(id,amount,setAmount)}>Agregar producto</button>
                    <NavLink to='/Cart'>
                        <button className='product-single__action-btn'>Ir al carrito</button>
                    </NavLink>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AppSingleProduct
