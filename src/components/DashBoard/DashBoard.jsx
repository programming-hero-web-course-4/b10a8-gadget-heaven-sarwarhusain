
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getStoreCartList, getStoreWishList } from '../Utilitiess/Utilitiess';
import Cart from '../Cart/Cart';
import Wish from '../Wish/Wish';

const DashBoard = () => {
    const [cart, setCart] = useState([])
    const [wish, setWish] = useState([])
    const allProducts = useLoaderData()


    useEffect(() => {
        const storeCart = getStoreCartList()
        const storedCartList = storeCart.map(id => parseInt(id))

        const cartProductList = allProducts.filter(product => storedCartList.includes(product.product_id))
        setCart(cartProductList);
    }, [])

    useEffect(() => {
        const storeCart = getStoreWishList()
        const storedCartList = storeCart.map(id => parseInt(id))

        const cartProductList = allProducts.filter(product => storedCartList.includes(product.product_id))
        setWish(cartProductList);
    }, [])

    return (
        <div className="">
            <Tabs>
                <TabList className="flex gap-3 justify-center bg-[#9538E2] py-7 ">
                    <Tab className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"><span
                        className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                    >Cart</span></Tab>
                    <Tab className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"><span
                        className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                    >WishList</span></Tab>


                </TabList>

                <TabPanel className="bg-gray-100">
                    <h2 className='text-2xl font-semibold ml-56'>Cart</h2>
                    <div className=''>
                        {
                            cart.map((product) => <Cart key={product.product_id} product={product}></Cart>)
                        }
                    </div>

                </TabPanel>
                <TabPanel className="bg-gray-100">
                    <h2 className='text-2xl font-semibold ml-56'>WishList</h2>
                    <div className=''>
                        {
                            wish.map(product => <Wish key={product.product_id} product={product}></Wish>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default DashBoard;
