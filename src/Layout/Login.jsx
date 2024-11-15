import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../Context/FIrebaseContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Login = () => {
    const [password, setPassword] = useState(false);
    const {signInWithEmail} = useContext(FormContext)
    const handelLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmail(email,password)
        .then(()=> {
            toast.success('Login successful')
        })
    }
    return (
        <div className="mx-auto w-full max-w-md space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 dark:border-zinc-700 dark:bg-zinc-900 mt-[10vh]">
        <h1 className="text-3xl font-semibold tracking-tight text-center">Login your account</h1>
        <div className='border-b-[2px]'></div>

        <form onSubmit={handelLogin} action="#" className="space-y-6">
            <div className="space-y-2 text-sm">
                <label htmlFor="username" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                    Email
                </label>
                <input
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                    id="username"
                    placeholder="Enter username"
                    name="email"
                    type="email"
                    required
                />
            </div>
            <div className="space-y-2 text-sm relative">
                <label htmlFor="password" className="block text-zinc-700 dark:text-zinc-300 font-medium">
                    Password
                </label>
                <input
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-zinc-700"
                    id="password"
                    placeholder="Enter password"
                    name="password"
                    type={password ? "text" : "password" }
                    required
                />
                    <div onClick={() => setPassword(!password)}>
                    {
                        password ? <p className='absolute top-10 right-5'><FaEyeSlash size={18}/></p>
                        : 
                        <p className='absolute top-10 right-5'><FaEye  size={18}/></p>
                    }
                    </div>
                
                <div className="flex justify-end text-xs">
                    <a href="#" className="text-zinc-700 hover:underline dark:text-zinc-300">
                        Forgot Password?
                    </a>
                </div>
            </div>
            <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700 w-full">Login</button>
        </form>
        <p className="text-center text-sm text-zinc-700 dark:text-zinc-300">
            Don&apos;t have an account?
            <Link to={'/auth/signup'} className="font-semibold underline">
                Signup
            </Link>
        </p>
    </div>
    );
};

export default Login;