import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import User from '../assets/user.png'

const NavBar = () => {
    return (
        <nav className='flex justify-between mt-5 items-center'>
            <div></div>
            <div className='space-x-5'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink>Career</NavLink>
            </div>
            <div className='flex space-x-2'>
                <img className='w-8' src={User} alt="" />
                <button className='bg-black px-3 py-1 text-white'>Login</button>
            </div>
        </nav>
    );
};

export default NavBar;