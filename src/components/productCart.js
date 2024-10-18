
import React, { useState } from 'react';
import { useDispatch, useCartState } from './Context'; // Correct import

const ProductCart = () => {
    const dispatch = useDispatch();
    const { cart } = useCartState(); // Accessing the cart state

    // State for delivery information
    const [deliveryAddress, setDeliveryAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [orders, setOrders] = useState([]); // State to hold placed orders
    const [paymentMethod, setPaymentMethod] = useState(''); // State for selected payment method

    // Calculate subtotal, shipping fee, and total
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingFee = 5.00; // Example static shipping fee
    const total = subtotal + shippingFee;

    const handlePlaceOrder = () => {
        if (!deliveryAddress || !contactNumber) {
            alert('Please fill in all delivery information.');
            return;
        }

        if (!paymentMethod) {
            alert('Please select a payment method.');
            return;
        }

        // Create an order object
        const order = {
            cart,
            total,
            deliveryAddress,
            contactNumber,
            paymentMethod, // Add payment method to order
            orderDate: new Date().toLocaleString(), // Add date of order
        };

        // Update orders state with new order
        setOrders([...orders, order]);

        // Optionally clear the cart
        // dispatch({ type: 'CLEAR_CART' });

        alert(`Your order has been placed successfully! Payment via ${paymentMethod}.`);

        // Clear delivery information and payment method
        setDeliveryAddress('');
        setContactNumber('');
        setPaymentMethod('');
    };

    const handlePaymentSelection = (method) => {
        setPaymentMethod(method);
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

                {/* Payment Method Section */}
                <div className="mt-4">
                    <h2 className="text-lg font-bold mb-2">Select Payment Method</h2>
                    <div className="flex space-x-4">
                        <button
                            className={`px-4 py-2 rounded ${
                                paymentMethod === 'Paytm' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                            }`}
                            onClick={() => handlePaymentSelection('Paytm')}
                        >
                            Paytm
                        </button>
                        <button
                            className={`px-4 py-2 rounded ${
                                paymentMethod === 'PhonePe' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                            }`}
                            onClick={() => handlePaymentSelection('PhonePe')}
                        >
                            PhonePe
                        </button>
                        <button
                            className={`px-4 py-2 rounded ${
                                paymentMethod === 'Stripe' ? 'bg-blue-500 text-white' : 'bg-gray-300'
                            }`}
                            onClick={() => handlePaymentSelection('Stripe')}
                        >
                            Stripe
                        </button>
                    </div>
                </div>

                <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={handlePlaceOrder}
                >
                    Proceed to Payment
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
                            <h4>Payment Method: {order.paymentMethod}</h4>
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



                   
      
                                
                       