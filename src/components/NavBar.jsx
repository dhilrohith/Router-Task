import React from 'react';
import { Link } from "react-router-dom";
const NavBar = ({count}) => {
    return (
        <div className="navBar bg-black text-white">
            <div className="navItems flex justify-between items-center w-[90%] m-[auto] p-5">

                <Link to="/">
                    <h3 className="text-[22px] font-bold active:text-gray-400 outline-none">
                        Shopping Cart
                    </h3>
                </Link>

                <Link to="/cart">
                    <h3 className="flex gap-5 rounded-2xl bg-blue-700 items-center justify-center
                        p-3 relative active:bg-blue-700 hover:bg-blue-600">
                        <p className="text-[] font-semibold">Add To Cart</p>
                        <svg className="h-[25px]" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 902.86 902.86" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
                        <div className="w-[14px] h-[14px] rounded-full flex-shrink-0 
                                         flex justify-center items-center bg-white
                                         text-black absolute 
                                         right-8 top-1" >
                            <p className="text-[10px] font-bold">
                                {count}
                            </p>
                        </div>
                    </h3>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;