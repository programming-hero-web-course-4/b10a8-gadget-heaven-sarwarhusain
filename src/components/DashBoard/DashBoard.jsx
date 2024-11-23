
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getStoreCartList, getStoreWishList } from '../Utilitiess/Utilitiess';
import Cart from '../Cart/Cart';
import Wish from '../Wish/Wish';
import Banner from '../Banner/Banner';

const DashBoard = () => {

    const [cart, setCart] = useState([])
    const [wish, setWish] = useState([])
    const [sort, setSort] = useState()
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

    // sorted
    const handleCart = (sortType) => {
        setSort(sortType)

        //

        if (sortType === 'Sorted') {
            const sortedCartList = [...cart].sort((a, b) => b.price - a.price)
            setCart(sortedCartList)
        }

    }
    const handleWish = (sortType) => {
        setSort(sortType)

        if (sortType === 'Sorted') {
            const sortedWishList = [...wish].sort((a, b) => b.price - a.price)
            setWish(sortedWishList)
        }

    }



    return (
        <div className="">

            <Tabs>
                <Banner></Banner>
                <TabList className="flex gap-3 justify-center py-7 -mt-44 bg-red">
                    <Tab className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"><span
                        className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                    >Cart</span></Tab>
                    <Tab className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"><span
                        className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                    >WishList</span></Tab>


                </TabList>

                <TabPanel className="bg-gray-100 pt-12 pb-12">
                    <div className='lg:flex justify-between '>
                        <h2 className='text-2xl font-semibold lg:ml-56'>Cart</h2>
                        <h2>Total Cost: </h2>
                        <button onClick={() => handleCart('Sorted')}
                            className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-black focus:outline-none focus:ring active:text-opacity-75"

                        >
                            <span
                                className="block rounded-full bg-indigo-100 px-8 py-3 text-sm font-medium text-black group-hover:bg-transparent"
                            >
                                {
                                    sort ? ` ${sort} ` : 'Sort By Price'
                                }
                            </span>
                        </button>
                        <button
                            className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-black focus:outline-none focus:ring active:text-opacity-75"

                        >
                            <span
                                className="block rounded-full bg-indigo-100 px-8 py-3 text-sm font-medium text-black group-hover:bg-transparent"
                            >Purchase</span>
                        </button>
                    </div>
                    <div className=''>
                        {
                            cart.map((product) => <Cart key={product.product_id} product={product}></Cart>)
                        }
                    </div>

                </TabPanel>
                <TabPanel className="bg-gray-100">
                    <div className='lg:flex justify-between '>
                        <h2 className='text-2xl font-semibold lg:ml-56'>WishList</h2>
                        <h2>Total Cost: </h2>
                        <button onClick={() => handleWish('Sorted')}
                            className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-black focus:outline-none focus:ring active:text-opacity-75"

                        >
                            <span
                                className="block rounded-full bg-indigo-100 px-8 py-3 text-sm font-medium text-black group-hover:bg-transparent"
                            >
                                {
                                    sort ? ` ${sort} ` : 'Sort By Price'
                                }
                            </span>
                        </button>

                        <button
                            className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-black focus:outline-none focus:ring active:text-opacity-75"

                        >
                            <span
                                className="block rounded-full bg-indigo-100 px-8 py-3 text-sm font-medium text-black group-hover:bg-transparent"
                            >Purchase</span>
                        </button>

                    </div>
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
