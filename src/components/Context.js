
/*import React,  { useReducer} from 'react'
import { useContext } from 'react'


export const CartStateContext = React.createContext(null)
export const CartDispatchContext = React.createContext(null)

const initialState = {
    cart : []
}


export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        case 'DELETE_ITEM_CART':
            const filteredCart = state.cart.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cart: filteredCart,
            };

        default:
            return state;
    }
}


export function CartProvider({children}){

    const [state,dispatch] = useReducer(reducer,initialState)
    return(
   <CartStateContext.Provider value={state}>
    <CartDispatchContext.Provider value={dispatch}>
    {children}
    </CartDispatchContext.Provider>
   </CartStateContext.Provider>
       
      
    )
}

    
export function useDispatch(){
    return useContext(CartDispatchContext)

}
export function useCartState(){
return useContext(CartStateContext)
}*/

import React, { useReducer, useContext } from 'react';

// Create the context for cart state and dispatch
export const CartStateContext = React.createContext(null);
export const CartDispatchContext = React.createContext(null);

// Initial state
const initialState = {
    cart: [],
};

// Reducer function
export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            if (itemInCart) {
                // If the item is already in the cart, increase its quantity
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                // If the item is not in the cart, add it with quantity 1
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }],
                };
            }

        case 'DELETE_ITEM_CART':
            const filteredCart = state.cart.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cart: filteredCart,
            };

        case 'INCREMENT_ITEM_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };

        case 'DECREMENT_ITEM_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };

        default:
            return state;
    }
}

// CartProvider component
export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    );
}

// Custom hooks to use cart state and dispatch
export function useDispatch() {
    return useContext(CartDispatchContext);
}

export function useCartState() {
    return useContext(CartStateContext); // Correctly exporting useCartState
}
