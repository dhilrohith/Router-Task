import React from 'react';
import CartProduct from '../components/CartProduct';

const Cart = ({ cart, setCart, addQuantity, decreaseQuantity, removeProduct, calculateTotal, count}) => {
    return (
        <div className="">

            <h1 className="text-center mt-3
            text-4xl text-green-500 font-semibold">
                MY CART
            </h1>

            {cart.length === 0 ? (
                <p className="text-center mt-5 text-2xl text-gray-500 font-medium">
                    Your cart is empty
                </p>
            ) : (
                <>
                    <p className="text-3xl text-center font-bold mt-5">
                        Total: $ {calculateTotal}
                    </p>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <CartProduct item={item} setCart={setCart} addQuantity={addQuantity} decreaseQuantity={decreaseQuantity} removeProduct={removeProduct} count={count} />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Cart;