import React from 'react';

const CartProduct = ({ item, setCart, addQuantity, decreaseQuantity, removeProduct, count}) => {
    return (
        <div className="w-[80%] m-auto mt-10">
            
            <div className="productContainer
            flex justify-between mb-10 gap-14">
                <div className="aboutProduct
                w-[50%] flex flex-col gap-4">
                    <img src={item.image} alt="image"
                        className="
                        h-[200px] w-[200px]"/>
                    <div className="
                    flex flex-col gap-4">
                        <p className="font-semibold">
                            {item.title}
                        </p>
                        <p className="font-semibold
                        text-sm text-gray-500">
                            $ {item.price}
                        </p>
                    </div>
                </div>

                <div className="productDetails
                flex flex-col justify-center items-center gap-6">
                    <p>Price ${item.productPrice}</p>
                    <p className="
                    ">{item.productQuantity}</p>
                    <div className="buttonContainer
                    flex gap-4">
                        <button className="
                        h-9 px-[40px]
                        bg-violet-500 
                        rounded-lg
                        hover:bg-violet-700 active:bg-purple-500"
                        onClick={()=>addQuantity(item)}>
                            +
                        </button>
                        <button className="
                        h-9 px-[40px]
                        bg-slate-500 rounded-lg
                        hover:bg-slate-700 active:bg-slate-500"
                        onClick={()=>decreaseQuantity(item)}>
                            -
                        </button>
                    </div>
                    <button className="
                    bg-red-500 rounded-xl
                    px-10 py-2 
                    text-white
                    hover:bg-red-600 active:bg-red-500"
                    onClick={()=>removeProduct(item)}>
                        <p className="text-sm font-semibold">
                            Remove
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;