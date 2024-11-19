import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const links =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/statistics">Statistics</NavLink></li>
            <li><a>Dashboard</a></li>
        </>

    return (
        <div className="navbar text-white bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="  text-xl">Gadget Haven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex gap-2 '>
                    <h2 className='bg-white rounded-full p-1'><img className='w-4' src="https://img.icons8.com/?size=48&id=3337&format=png" alt="" /></h2>
                    <h3 className='bg-white rounded-full p-1'><img className='w-4' src="https://img.icons8.com/?size=48&id=85033&format=png" alt="" /></h3>
                </div>
            </div>
        </div>
    );
};

export default NavBar;