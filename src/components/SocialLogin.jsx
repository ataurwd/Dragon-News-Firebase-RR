import React, { useContext } from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { FormContext } from './../Context/FIrebaseContext';

const SocialLogin = () => {
    const {handelGoogleSignIn} = useContext(FormContext)
    return (
        <div>
            <h2 className='font-bold text-xl'>Login With</h2>
            <div className='w-full'>
                <button onClick={handelGoogleSignIn} className='flex items-center bg-gray-300 mt-3 w-full justify-center py-2 space-x-3'>
                    <FaGoogle></FaGoogle> <h2>Login WIth Google</h2>
                </button>
                <button className='flex items-center bg-gray-300 mt-3 w-full justify-center py-2 space-x-3'>
                    <FaGithub></FaGithub> <h2>Login WIth Github</h2>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;