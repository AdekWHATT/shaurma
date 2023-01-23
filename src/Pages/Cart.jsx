import React from 'react';

const Cart = ({ cart, handleRemoveFromCart, handleQuantityChange }) => {

    return (
        <div className='cart-container'>
            <h2>My Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>
                                <input
                                    type='number'
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.product, e.target.value)}
                                />
                            </td>
                            <td>{item.product.price * item.quantity}</td>
                            <td>
                                <button onClick={() => handleRemoveFromCart(item.product)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='total'>
                Total: ${cart.reduce((total, item) => total + item.product.price * item.quantity, 0)}
            </div>
        </div>
    );
};

export default Cart;
