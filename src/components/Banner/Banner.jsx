import React from 'react';
import { useLocation } from 'react-router-dom';

const Banner = () => {
    const location = useLocation()
    const isHomePage = location.pathname === "/";
    const isDashPage = location.pathname === "/dashboard";
    return (
        <div className="text-white" >
            <div className={`mx-auto max-w-screen-xl bg-[#9538E2] px-4 py-32 rounded-xl   lg:items-center ${isHomePage ? "-mt-16" : ""}`}>
                <div className="mx-auto text-center">
                    <h1 className="text-3xl font-extrabold sm:text-4xl -mt-5">
                        {
                            isHomePage ? "Upgrade Your Tech Accessorize with Gadget Heaven Accessories" : `${isDashPage ? "DashBoard" : "Statistics"}`
                        }
                    </h1>

                    <p className="mt-4 sm:text-base/relaxed">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to  <br /> the coolest accessories, we have it all!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        {
                            isHomePage ? <button
                                className="group inline-block rounded-full bg-gradient-to-r from-purple-200 via-purple-500 to-yellow-200 p-[2px] hover:text-black focus:outline-none focus:ring active:text-opacity-75 mb-5"
                            >
                                <span
                                    className="block rounded-full bg-indigo-100 px-8 py-3 text-sm font-medium text-black group-hover:bg-transparent"
                                >Shop</span>
                            </button> : ""
                        }
                    </div>
                </div>
            </div>
            {
                isHomePage ? <div className='absolutes  border w-3/6 h-3/6 mx-auto border-gray-300 p-5 shadow-2xl rounded-2xl  -mt-32'>
                    <img className=' rounded-md' src="https://i.ibb.co.com/zs7FDvv/banner.jpg" alt="" />
                </div> : ""
            }

        </div >
    );
};

export default Banner;


//img className=' w-1/2 h-1/2' src="https://i.ibb.co.com/6R3fYYs/banner.jpg" alt="" />