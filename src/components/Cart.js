
//import React, { useContext } from 'react'
import { useCartState } from './Context'

import ProductCart from '../components/productCart.js'

const Cart = () => {

 // const state = useContext(CartStateContext)
 const state = useCartState()
  return (
    <div>
       <h1>I am Cart page</h1>

       {state.cart.map(product => <ProductCart key={product.id}
        id ={product.id}
        title ={product.title}
        price={product.price}
        image={product.image}
        rating={product.rating.rate} />)}
    </div>
  )
}

export default Cart
