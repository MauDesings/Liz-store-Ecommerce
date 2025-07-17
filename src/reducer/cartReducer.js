function cartReducer(state,action) {
    switch (action.type) {
        case 'ADD_TO_CART':{
            const {id,amount,dataProducts} = action.payload;
            const newItem = dataProducts.find(item => item.id === id);
            const existe = state.cart.some(item => item.id === newItem.id);

            return (existe) ?
            { ...state,
                cart: state.cart.map(item => item.id === newItem.id
                    ? {...item, quantity: item.quantity + amount}
                    : item
                )

            } :

            {
                ...state,
                cart: [...state.cart, {...newItem, quantity: amount}]
            }
        }
        
        case 'REMOVED_FROM_CART':{
            const id = action.payload;
            const itemFilter = state.cart.filter(item => item.id !== id);
            return {
                ...state,
                cart: itemFilter
            }
        }

        case 'INCREMENT_ONE_ITEM_FROM_CART':{
            const id = action.payload;
            const updateProduct = state.cart.map(item=> {
                if (item.id === id) {
                    let increItem = item.quantity + 1;
                    return {...item, quantity: increItem}
                } else {
                    return item;
                }
            })

            return {
                ...state,
                cart: updateProduct
            }
        }

        case 'DECREMENT_ONE_ITEM_FROM_CART':{
            const id = action.payload;
            const updateProduct = state.cart.map(item=> {
                if (item.id === id) {
                    let decreItem = item.quantity - 1;
                    if (decreItem <= 1) {
                        decreItem = 1;
                    }
                    return {...item, quantity: decreItem}
                } else {
                    return item;
                }
            })

            return {
                ...state,
                cart: updateProduct
            }
        }

        case 'TOTAL_ITEMS_CART':{
            const itemsTotal = state.cart.reduce((acc,item)=> acc + item.quantity, 0)
            return {
                ...state,
                totalItems:itemsTotal
            }
        }

        case 'TOTAL_PRICE_OF_PRODUCTS':{
            let priceTotal = state.cart.reduce((acc,item)=> acc + item.price * item.quantity, 0)
                priceTotal = Number(priceTotal.toFixed(2));
            return {
                ...state,
                totalPrice: priceTotal
            }
        }

        case 'CLEAR_CART':{
            return {
                ...state,
                cart:[],
                totalItems: 0,
                totalPrice: 0,
            }
        }
           
    
        default:
            state;
    }
}

export default cartReducer;