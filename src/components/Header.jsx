import React from 'react';
import Logo from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    const formattedDate = moment("2025-11-27").format("dddd, MMMM D, YYYY");
    return (
        <div className='flex flex-col items-center space-y-2 lg:mt-8 md:mt-4 mt-2'>
            <img src={Logo} alt="" />
            <h1>Journalism Without Fear or Favour</h1>
            <p>{formattedDate}</p>
        </div>
    );
};

export default Header;