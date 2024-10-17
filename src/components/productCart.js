

/*import { useDispatch } from "./Context"




const ProductCart = ({id,title,price,image,rating}) => {
   //const dispatch = useContext(CartDispatchContext)
   const dispatch = useDispatch();
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
      <div>
         <img src={image} alt="" width={200} height={200}/>
         </div> 
      <div>
        <h1>{title}</h1>
        <h1>{price}</h1>
        <h1>{rating}</h1>
      

    


<button
                    className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    onClick={() =>
                        dispatch({
                            type: 'DELETE_ITEM_CART',
                            payload: { id, title, price, image, rating }
                        })
                    }
                >
                    Delete
                </button>




        </div> 
    </div>
  )
}

export default ProductCart;*/


/* 2import { useDispatch } from "./Context";

const ProductCart = ({ id, title, price, image, rating, quantity }) => {
   const dispatch = useDispatch();

   return (
     <div style={{ display: "flex", flexDirection: "row" }}>
       <div>
         <img src={image} alt="" width={200} height={200} />
       </div>
       <div>
         <h1>{title}</h1>
         <h1>${price}</h1>
         <h1>{rating}</h1>
         <h1>Quantity: {quantity}</h1>

         <div style={{ display: "flex", alignItems: "center" }}>
           <button
             className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
             onClick={() =>
               dispatch({
                 type: 'INCREMENT_ITEM_QUANTITY',
                 payload: { id },
               })
             }
           >
             +
           </button>

           <button
             className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 ml-2"
             onClick={() =>
               dispatch({
                 type: 'DECREMENT_ITEM_QUANTITY',
                 payload: { id },
               })
             }
           >
             -
           </button>
         </div>

         <button
           className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
           onClick={() =>
             dispatch({
               type: 'DELETE_ITEM_CART',
               payload: { id },
             })
           }
         >
           Delete
         </button>
       </div>
     </div>
   );
};

export default ProductCart;*/


import { useDispatch, useCartState } from './Context'; // Correct import

const ProductCart = ({ id, title, price, image, rating }) => {
    const dispatch = useDispatch();
    const { cart } = useCartState(); // Accessing the cart state

    const product = cart.find(item => item.id === id);
    const quantity = product ? product.quantity : 0;

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
                <img src={image} alt={title} width={200} height={200} />
            </div>
            <div>
                <h1>{title}</h1>
                <h1>${price}</h1>
                <h1>{rating}</h1>
                <h1>Quantity: {quantity}</h1>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                        onClick={() =>
                            dispatch({
                                type: 'INCREMENT_ITEM_QUANTITY',
                                payload: { id },
                            })
                        }
                    >
                        +
                    </button>

                    <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 ml-2"
                        onClick={() =>
                            dispatch({
                                type: 'DECREMENT_ITEM_QUANTITY',
                                payload: { id },
                            })
                        }
                    >
                        -
                    </button>
                </div>

                <button
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() =>
                        dispatch({
                            type: 'DELETE_ITEM_CART',
                            payload: { id },
                        })
                    }
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProductCart;
