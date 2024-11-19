import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Fotear from '../Fotear/Fotear';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Fotear></Fotear>
        </div>
    );
};

export default Root;

//max-w-6xl mx-auto