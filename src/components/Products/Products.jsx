import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./productsData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

 
    return (
        <div>
            <h2 className='text-4xl text-center mt-5 font-semibold'>Explore Cutting-Edge Gadgets</h2>
            <div className=' flex mt-6 gap-6'>
                <div className='border h-64  lg:h-64 lg:px-5 '>
                <button
                            className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 my-2"
                        >
                            <span
                                className="block rounded-full bg-white text-sm font-medium group-hover:bg-transparent px-5"
                            >All Products</span>
                        </button>
                        <button
                            className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 my-2"
                        >
                            <span
                                className="block rounded-full bg-white  text-sm font-medium group-hover:bg-transparent px-5"
                            >View Details</span>
                        </button>
                        <button
                            className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 my-2"
                        >
                            <span
                                className="block rounded-full bg-white  text-sm font-medium group-hover:bg-transparent px-5"
                            >View Details</span>
                        </button>
                        <button
                            className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75 my-2"
                        >
                            <span
                                className="block rounded-full bg-white  text-sm font-medium group-hover:bg-transparent px-5"
                            >View Details</span>
                        </button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center'>
                    {
                        products.map((product, idx) => <Product key={idx} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;