import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Product = ({ products, addToCart }) => {
    return (
        <div className="bg-slate-200 pt-10">

            <div className="
            w-[85%] m-[auto] sm:grid grid-cols-2 gap-2
            md:grid md:grid-cols-4">
                    {
                        products.map((product) => (
                            <div key={product.id}>
                                <ProductCard product={product} addToCart={addToCart} />
                            </div>
                        ))
                    }
            </div>
        </div>
    );
};

export default Product;