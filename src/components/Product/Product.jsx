import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { product_title, product_img, price, product_id } = product
    return (
        <div className="block rounded-lg p-4 shadow-2xl shadow-indigo-300 m-3">
            <div className='border rounded-xl bg-red-500'>
                <img className=' w-auto'
                    alt=""
                    src={product_img}
                />
            </div>
            <div className="mt-2">
                <div>
                    <div>
                        <h2 className="">Price: ${price}</h2>
                    </div>
                    <div>
                        <h2 className="sr-only">Address</h2>
                        <p className="font-medium">123 Wallaby Avenue, Park Road</p>
                    </div>
                    <Link to={`/details/${product_id}`}>
                        <button
                            className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                            href="#"
                        >
                            <span
                                className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                            >View Details</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;

