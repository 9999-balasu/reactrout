

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


 /*import { useDispatch, useCartState } from './Context'; // Correct import

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

export default ProductCart;*/




/*2 import { useDispatch, useCartState } from './Context'; // Correct import

const ProductCart = ({ id, title, price, image, rating }) => {
    const dispatch = useDispatch();
    const { cart } = useCartState(); // Accessing the cart state

    // Calculate subtotal, shipping fee, and total
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = 5.00; // Example static shipping fee
    const total = subtotal + shippingFee;

    const product = cart.find(item => item.id === id);
    const quantity = product ? product.quantity : 0;

    const handleCheckout = () => {
        // Add your checkout logic here, like navigating to a checkout page
        alert('Proceeding to checkout');
    };

    if (cart.length === 0) {
        return <h2>Your cart is empty.</h2>;
    }

    return (
        <div>
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

            {/* Cart Summary */
           /* <div style={{ marginTop: '20px' }}>
                <h2>Cart Summary</h2>
                <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
                <h3>Shipping Fee: ${shippingFee.toFixed(2)}</h3>
                <h3>Total: ${total.toFixed(2)}</h3>

                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleCheckout}
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default ProductCart;*/


/*import React, { useState } from 'react';
import { useDispatch, useCartState } from './Context'; // Correct import

const ProductCart = ({ id, title, price, image, rating }) => {
    const dispatch = useDispatch();
    const { cart } = useCartState(); // Accessing the cart state

    // State for delivery information
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    // Calculate subtotal, shipping fee, and total
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = 5.00; // Example static shipping fee
    const total = subtotal + shippingFee;

    const product = cart.find(item => item.id === id);
    const quantity = product ? product.quantity : 0;

    const handleCheckout = () => {
        // Add your checkout logic here, like navigating to a checkout page
        alert('Proceeding to checkout');
    };

    const handlePlaceOrder = () => {
        if (!deliveryAddress || !contactNumber) {
            alert('Please fill in all delivery information.');
            return;
        }
        
        // Here you can add logic to place the order, e.g., send to backend
        console.log('Order placed:', {
            cart,
            total,
            deliveryAddress,
            contactNumber,
        });

        alert('Your order has been placed successfully!');
        // Optionally, you can clear the cart here after placing the order
        // dispatch({ type: 'CLEAR_CART' });
    };

    if (cart.length === 0) {
        return <h2>Your cart is empty.</h2>;
    }

    return (
        <div>
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

            {/* Cart Summary */
            /*<div style={{ marginTop: '20px' }}>
                <h2>Cart Summary</h2>
                <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
                <h3>Shipping Fee: ${shippingFee.toFixed(2)}</h3>
                <h3>Total: ${total.toFixed(2)}</h3>

                {/* Delivery Information Section */
               /* <div style={{ marginTop: '20px' }}>
                    <h2>Delivery Information</h2>
                    <input
                        type="text"
                        placeholder="Delivery Address"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="border rounded px-2 py-1"
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Contact Number"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className="border rounded px-2 py-1 mt-2"
                    />
                </div>

                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handlePlaceOrder}
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default ProductCart;*/




/*import React, { useState } from 'react';
import { useDispatch, useCartState } from './Context'; // Correct import

const ProductCart = () => {
    const dispatch = useDispatch();
    const { cart } = useCartState(); // Accessing the cart state

    // State for delivery information
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [orders, setOrders] = useState([]); // State to hold placed orders

    // Calculate subtotal, shipping fee, and total
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = 5.00; // Example static shipping fee
    const total = subtotal + shippingFee;

    const handlePlaceOrder = () => {
        if (!deliveryAddress || !contactNumber) {
            alert('Please fill in all delivery information.');
            return;
        }

        // Create an order object
        const order = {
            cart,
            total,
            deliveryAddress,
            contactNumber,
            orderDate: new Date().toLocaleString(), // Add date of order
        };

        // Update orders state with new order
        setOrders([...orders, order]);

        // Optionally clear the cart
        // dispatch({ type: 'CLEAR_CART' });

        alert('Your order has been placed successfully!');

        // Clear delivery information
        setDeliveryAddress('');
        setContactNumber('');
    };

    if (cart.length === 0) {
        return <h2>Your cart is empty.</h2>;
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {cart.map(item => (
                    <div key={item.id} style={{ marginRight: '20px' }}>
                        <img src={item.image} alt={item.title} width={100} height={100} />
                        <h2>{item.title}</h2>
                        <h3>${item.price}</h3>
                        <h3>Quantity: {item.quantity}</h3>

                        <button
                            className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                            onClick={() =>
                                dispatch({ type: 'INCREMENT_ITEM_QUANTITY', payload: { id: item.id } })
                            }
                        >
                            +
                        </button>

                        <button
                            className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 ml-2"
                            onClick={() =>
                                dispatch({ type: 'DECREMENT_ITEM_QUANTITY', payload: { id: item.id } })
                            }
                        >
                            -
                        </button>

                        <button
                            className="mt-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                            onClick={() =>
                                dispatch({ type: 'DELETE_ITEM_CART', payload: { id: item.id } })
                            }
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {/* Cart Summary */
           /* <div style={{ marginTop: '20px' }}>
                <h2>Cart Summary</h2>
                <h3>Subtotal: ${subtotal.toFixed(2)}</h3>
                <h3>Shipping Fee: ${shippingFee.toFixed(2)}</h3>
                <h3>Total: ${total.toFixed(2)}</h3>

                {/* Delivery Information Section */
               /* <div style={{ marginTop: '20px' }}>
                    <h2>Delivery Information</h2>
                    <input
                        type="text"
                        placeholder="Delivery Address"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="border rounded px-2 py-1"
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Contact Number"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className="border rounded px-2 py-1 mt-2"
                    />
                </div>

                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handlePlaceOrder}
                >
                    Place Order
                </button>
            </div>

            {/* My Orders Section */
           /* <div style={{ marginTop: '40px' }}>
                <h2>My Orders</h2>
                {orders.length === 0 ? (
                    <p>No orders placed yet.</p>
                ) : (
                    orders.map((order, index) => (
                        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <h3>Order #{index + 1}</h3>
                            <h4>Order Date: {order.orderDate}</h4>
                            <h4>Delivery Address: {order.deliveryAddress}</h4>
                            <h4>Contact Number: {order.contactNumber}</h4>
                            <h4>Total: ${order.total.toFixed(2)}</h4>
                            <h4>Items:</h4>
                            <ul>
                                {order.cart.map((item) => (
                                    <li key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={item.image} alt={item.title} width={50} height={50} style={{ marginRight: '10px' }} />
                                        <span>{item.title} - ${item.price} x {item.quantity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductCart;*/




import React, { useState } from 'react';
import { useDispatch, useCartState } from './Context'; // Correct import

const ProductCart = () => {
    const dispatch = useDispatch();
    const { cart } = useCartState(); // Accessing the cart state

    // State for delivery information
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [orders, setOrders] = useState([]); // State to hold placed orders

    // Calculate subtotal, shipping fee, and total
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = 5.00; // Example static shipping fee
    const total = subtotal + shippingFee;

    const handlePlaceOrder = () => {
        if (!deliveryAddress || !contactNumber) {
            alert('Please fill in all delivery information.');
            return;
        }

        // Create an order object
        const order = {
            cart,
            total,
            deliveryAddress,
            contactNumber,
            orderDate: new Date().toLocaleString(), // Add date of order
        };

        // Update orders state with new order
        setOrders([...orders, order]);

        // Optionally clear the cart
        // dispatch({ type: 'CLEAR_CART' });

        alert('Your order has been placed successfully!');

        // Clear delivery information
        setDeliveryAddress('');
        setContactNumber('');
    };

    if (cart.length === 0) {
        return <h2 className="text-xl font-semibold">Your cart is empty.</h2>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cart.map(item => (
                    <div key={item.id} className="border rounded-lg shadow-md p-4 flex flex-col items-center">
                        <img src={item.image} alt={item.title} className="w-32 h-32 object-cover mb-2" />
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <h3 className="text-lg text-gray-700">${item.price}</h3>
                        <h3 className="text-sm text-gray-600">Quantity: {item.quantity}</h3>

                        <div className="flex space-x-2 mt-2">
                            <button
                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                                onClick={() =>
                                    dispatch({ type: 'INCREMENT_ITEM_QUANTITY', payload: { id: item.id } })
                                }
                            >
                                +
                            </button>

                            <button
                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                                onClick={() =>
                                    dispatch({ type: 'DECREMENT_ITEM_QUANTITY', payload: { id: item.id } })
                                }
                            >
                                -
                            </button>

                            <button
                                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                onClick={() =>
                                    dispatch({ type: 'DELETE_ITEM_CART', payload: { id: item.id } })
                                }
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-6 p-4 border rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">Cart Summary</h2>
                <h3>Subtotal: <span className="font-semibold">${subtotal.toFixed(2)}</span></h3>
                <h3>Shipping Fee: <span className="font-semibold">${shippingFee.toFixed(2)}</span></h3>
                <h3>Total: <span className="font-semibold">${total.toFixed(2)}</span></h3>

                {/* Delivery Information Section */}
                <div className="mt-4">
                    <h2 className="text-lg font-bold mb-2">Delivery Information</h2>
                    <input
                        type="text"
                        placeholder="Delivery Address"
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        className="border rounded px-2 py-1 mb-2 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Contact Number"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        className="border rounded px-2 py-1 mb-2 w-full"
                    />
                </div>

                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={handlePlaceOrder}
                >
                    Place Order
                </button>
            </div>

            {/* My Orders Section */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-2">My Orders</h2>
                {orders.length === 0 ? (
                    <p>No orders placed yet.</p>
                ) : (
                    orders.map((order, index) => (
                        <div key={index} className="border p-4 mb-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold">Order #{index + 1}</h3>
                            <h4>Order Date: {order.orderDate}</h4>
                            <h4>Delivery Address: {order.deliveryAddress}</h4>
                            <h4>Contact Number: {order.contactNumber}</h4>
                            <h4>Total: <span className="font-semibold">${order.total.toFixed(2)}</span></h4>
                            <h4 className="font-bold mt-2">Items:</h4>
                            <ul className="list-disc ml-5">
                                {order.cart.map((item) => (
                                    <li key={item.id} className="flex items-center">
                                        <img src={item.image} alt={item.title} className="w-12 h-12 object-cover mr-2 m-2" />
                                        <span>{item.title} - ${item.price} x {item.quantity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductCart;
