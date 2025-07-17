import { createContext, useContext, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";
import { useProducts } from "../hooks/useProducts";

const initialState = {
    cart:[],
    totalItems: 0,
    totalPrice: 0,
    user: {name:'', email:'', fhone:'', addres:''}
}

const CartContext = createContext();

const CartProvider = ({children}) => {
    const {dataProducts} = useProducts();
    const [state,dispatch] = useReducer(cartReducer,initialState);

    function handleAdd(id,amount,setAmount) {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {id,amount,dataProducts}
        })
        setAmount(1);
        handleTotalItems();
        handleTotalPrice()
    }

    function handleDeleted(id) {
        dispatch({
            type: 'REMOVED_FROM_CART',
            payload: id
        })
        handleTotalItems();
        handleTotalPrice()
    }

    function handleIncrement(id) {
        dispatch({
            type:'INCREMENT_ONE_ITEM_FROM_CART',
            payload: id
        })
        handleTotalItems();
        handleTotalPrice()
    }

    function handleDecrement(id) {
        dispatch({
            type:'DECREMENT_ONE_ITEM_FROM_CART',
            payload: id
        })
        handleTotalItems();
        handleTotalPrice()
    }

    function handleTotalItems() {
        dispatch({type:'TOTAL_ITEMS_CART'})
    }

    function handleTotalPrice() {
        dispatch({type:'TOTAL_PRICE_OF_PRODUCTS'})
    }

    function handleClearCart() {
        dispatch({type:'CLEAR_CART'})
    }


    return (
        <CartContext.Provider value={{state,handleAdd,handleDeleted,handleIncrement,handleDecrement,handleClearCart}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => useContext(CartContext);

export {CartProvider,useCartContext};