import React from 'react';

const ProductCard = ({ product, addToCart}) => {
    const maxLen = 100;

    // Function for short the len of description
    const truncateDescription = (description, maxLen) => {
        if (description.length <= maxLen) {
            return description
        }

        const lastIndex = description.lastIndexOf(' ', maxLen)

        return lastIndex != -1
            ? description.substring(0, lastIndex) + "..."
            : description.substring(0, maxLen) + "..."
    }

    // handleOnClick
    return (
        // <div>
        <div className="
        productContainer flex flex-col outline-none
        shadow-lg items-center p-5 bg-white
        mb-5 rounded-md
        sm:h-full">
            <div>
                <img src={product.image} alt="image"
                    className="h-[250px] sm:max-h-[150px]" />
            </div>

            <div className="
            cardDetailContainer flex flex-col gap-4
            mt-3
            sm:h-full sm:justify-between sm:gap-0">
                <p className="
                text-[24px] font-bold
                sm:text-[14px] sm:h-20
                md:h-[5.5rem]">
                    {product.title}
                </p>

                <p className="
                text-gray-400 font-semibold 
                sm:text-[14px]">
                    {truncateDescription(product.description, maxLen)}
                </p>

                <div className="
                text-gray-400 font-semibold flex justify-between
                sm:text-sm sm:mt-5">
                    <p className="">$ {product.price}</p>
                    <span className="
                    rounded-full flex-shrink-0
                    w-[18px] h-[18px] flex justify-center items-center
                    bg-yellow-500 text-white">
                        <p className="text-[10px]">{product.rating.rate}</p>
                    </span>
                </div>

                <div className="flex justify-center">
                <button className="
                bg-purple-500 w-[55%] m-[auto] py-3 text-white 
                rounded-2xl font-semibold hover:bg-purple-600 active:bg-purple-500
                sm:w-[150px] sm:m-0 sm:mt-6 sm:py-2 sm:text-[14px]"
                onClick = {()=> addToCart(product)}>
                    Add To Cart
                </button>
                </div>
                
            </div>
        </div>
        // </div>
    );
};

export default ProductCard;