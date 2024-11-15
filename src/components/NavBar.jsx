import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import User from '../assets/user.png'
import { FormContext } from '../Context/FIrebaseContext';

const NavBar = () => {
    const {user, signOutUser} = useContext(FormContext)
    const handelUserLogout = () => {
        signOutUser()
    }
    return (
        <nav className='flex justify-between mt-5 items-center'>
            <div>
                {
                    user ? user.email : ''
                }
            </div>
            <div className='space-x-5'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/carrear">Carrear</NavLink>
            </div>
            <div className='flex space-x-2'>
                <img className='w-8' src={User} alt="" />
                {
                    user ?
                    <Link onClick={handelUserLogout} to={'/auth/login'} className='bg-black px-3 py-1 text-white'>Logout</Link>
                    :
                    <Link to={'/auth/login'} className='bg-black px-3 py-1 text-white'>Login</Link>
                }
            </div>
        </nav>
    );
};

export default NavBar;