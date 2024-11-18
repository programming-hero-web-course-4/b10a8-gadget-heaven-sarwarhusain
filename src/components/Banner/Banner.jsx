import React from 'react';

const Banner = () => {
    return (
        <section section className="bg-[#9538E2] rounded-md -mt-16 text-white" >
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:h-screen lg:items-center">
                <div className="mx-auto text-center">
                    <h1 className="text-3xl font-extrabold sm:text-4xl">
                        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                    </h1>

                    <p className="mt-4 sm:text-base/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                        numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <button
                            className="block w-full rounded-full bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-yellow-100 focus:outline-none focus:ring active:bg-white sm:w-auto"
                            href="#"
                        >
                            Shop
                        </button>
                    </div>
                </div>
            </div>
          
        </section >
    );
};

export default Banner;


//img className=' w-1/2 h-1/2' src="https://i.ibb.co.com/6R3fYYs/banner.jpg" alt="" />