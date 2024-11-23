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
            {/* <p>data: {products.data.length}</p> */}
            <div className='flex mt-6 gap-6'>
                <div className='border w-36 h-96 rounded-md'>
                    <button className='btn'>Products</button>
                    <button className='btn'>Laptop</button>
                    <button className='btn'>Laptop</button>
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