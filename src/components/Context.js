
import React,  { useReducer} from 'react'
import { useContext } from 'react'


export const CartStateContext = React.createContext(null)
export const CartDispatchContext = React.createContext(null)

const initialState = {
    cart : []
}

export function reducer(state,action){
    switch(action.type){
        case 'ADD_TO_CART' :
            return{ ...state, cart : [...state.cart , action.payload]}
            case 'DELETE_TIEM_CART':
                const newCart = [...state.cart]
               const updatedCart= newCart.filter(item => item .id !== action.payload.id)
               return{
                ...state ,
                cart : updatedCart
               }
                return {}
            default :
            return state
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
}