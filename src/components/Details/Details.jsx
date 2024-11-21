import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AddToStoreCartList, AddToStoreWishList } from '../Utilitiess/Utilitiess';


const Details = () => {
    const { product_id } = useParams()
    const data = useLoaderData()

    const id = parseInt(product_id)
    const product = data.find(product => product.product_id === id)

    const { product_id: CurrentProductId, product_img, product_title, price, available, description, specification, rating } = product;

    const handleCart = (id) => {
        AddToStoreCartList(id)
    }

    const handleWish = (id) => {
        AddToStoreWishList(id)
    }


    return (
        <div className="hero border mt-10 px-14 w-2/3 mx-40 rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <img className='w-64'
                    alt=""
                    src={product_img}
                />
                <div className=''>
                    <div>
                        <h1 className="text-4xl font-bold mt-3">{product_title}</h1>
                        <p className='font-semibold'>
                            price: ${price}
                        </p>
                        <div className='my-2'>
                            {
                                available ? <button className='border rounded-full m-1 p-1 bg-green-100'>in Stoke </button> : <button className='border rounded-full m-1 p-1 bg-green-100'>out Of Stoke</button>

                            }                        </div>
                        <p className='my-3 text-gray-500'>{description}</p>
                        <div><span className='font-bold'>Specification:</span>
                            <div className='text-gray-500'>
                                {specification}
                            </div>
                        </div>
                        <div className='mt-2'>
                            <div className='flex my-2'>
                                <h2 className='font-semibold '>Rating</h2>
                                <input type="" name="rating-4" className="-ml-20 mask mask-star-2 bg-yellow-500" />
                            </div>
                            <div className='flex'>
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-500" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-100" />
                                </div>
                                <div className='border rounded-full mx-1 p-1'>{rating}</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex mt-5'>

                        <button onClick={() => handleCart(product_id)}
                            className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                            href="#"
                        ><span
                            className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                        ><span className='flex'>Add to Cart <img className='w-4 mx-2' src="https://img.icons8.com/?size=48&id=3337&format=png" alt="" /></span></span>
                        </button>
                        <button onClick={() => handleWish(product_id)} className='border rounded-full mx-2 p-4'> <h3 className='bg-white rounded-full'><img className='w-3' src="https://img.icons8.com/?size=48&id=85033&format=png" alt="" /></h3></button>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;