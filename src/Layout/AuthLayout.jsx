import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <header className='w-4/5 mx-auto'>
                <NavBar/>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;