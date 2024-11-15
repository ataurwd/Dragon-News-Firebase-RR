import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import User from '../assets/user.png'
import { FormContext } from '../Context/FIrebaseContext';

const NavBar = () => {
    const navigate = useNavigate()
    const {user, signOutUser} = useContext(FormContext)
    const handelUserLogout = () => {
        signOutUser()
        navigate('/')
    }
    return (
        <nav className='flex justify-between mt-5 items-center'>
            <div className='font-bold'>
                {
                    user ? user.displayName : ''
                }
            </div>
            <div className='space-x-5'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/carrear">Carrear</NavLink>
            </div>
            <div className='flex space-x-2'>
                {
                    user?
                    <img src={user.photoURL} className='rounded-full w-10 h-10' />
                    :
                    <img src={User} alt='User' className='rounded-full w-10 h-10' />
                }
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