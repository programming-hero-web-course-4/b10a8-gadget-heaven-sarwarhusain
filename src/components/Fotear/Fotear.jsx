import React from 'react';

const Fotear = () => {
    return (
        <footer className="bg-white mt-32">
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className='text-3xl font-semibold'>Gadget Heaven</h2>
                    <p className="mx-auto mt-2 max-w-md leading-relaxed text-gray-500 text-md">
                        Leading the way in cutting-edge technology and innovation.
                    </p>
                </div>


                <div className="divider"></div>
                <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-x-24">

                    <ul className="text-gray-700 transition  text-lg" > <span className='font-semibold'>Services</span>
                        <li className='text-gray-500 text-md py-1'>Product Support</li>
                        <li className='text-gray-500 text-md py-1'>Order Tracking</li>
                        <li className='text-gray-500 text-md py-1'>Shipping & Delivery</li>
                        <li className='text-gray-500 text-md py-1'>Returns</li>
                    </ul>
                    <ul className="text-gray-700 transition  py-1 text-lg" > <span className='font-semibold'>Company</span>
                        <li className='text-gray-500 text-md py-1'>About Us</li>
                        <li className='text-gray-500 text-md py-1'>Careers</li>
                        <li className='text-gray-500 text-md py-1'>Contact</li>
                    </ul>
                    <ul className="text-gray-700 transition  py-1 text-lg" > <span className='font-semibold'>Legal</span>
                        <li className='text-gray-500 text-md py-1'> Terms of Service</li>
                        <li className='text-gray-500 text-md py-1'>Privacy Policy</li>
                        <li className='text-gray-500 text-md py-1'>Cookie Policy</li>
                    </ul>

                </div>

               
            </div>
        </footer>
    );
};

export default Fotear;