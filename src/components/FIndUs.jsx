import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FIndUs = () => {
    return (
        <div>
            <h2 className='font-bold text-xl mt-8'>Find Us On</h2>
            <div className='w-full mt-4'>
                <button className='flex items-center border w-full justify-start pl-5 py-3 space-x-3'>
                    <FaFacebook></FaFacebook> <h2>Facebook</h2>
                </button>
                <button className='flex items-center border w-full justify-start pl-5 py-3 space-x-3'>
                    <FaTwitter></FaTwitter> <h2>Twitter</h2>
                </button>
                <button className='flex items-center border w-full justify-start pl-5 py-3 space-x-3'>
                    <FaInstagram></FaInstagram> <h2>Instagram</h2>
                </button>
            </div>
        </div>
    );
};

export default FIndUs;