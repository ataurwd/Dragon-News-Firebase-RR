import React, { useContext, useState } from 'react';
import { FormContext } from '../Context/FIrebaseContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.init';

const Register = () => {
    const [password, setPassword] = useState(false);
    // const [error, setError] = useState({});
    const {createUserWithEmail, user, setUser} = useContext(FormContext)
    console.log(user)

    const handelSubmitBtn = (e) => {

        e.preventDefault();
        const name = e.target.name.value;
        const photoURl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        //check validation
        if(name.length < 5){
            toast.error('Name should be at least 5 characters long')
            return
        }

        createUserWithEmail(email,password)
        .then(result => {
            setUser(result.user)
            const profile = {
                displayName: name,
                photoURL: photoURl,
            }

            updateProfile(auth.currentUser, profile)
            .then(() => {})
            toast.success('Registration successful')
            console.log(result.user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(`${errorMessage}`)
          });
        
    }
    return (
<div className="max-w-md mx-auto mt-[5vh] space-y-6 rounded-lg border bg-white p-10 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <div className="flex flex-col space-y-1">
                <h3 className="text-3xl font-bold tracking-tight">Register your account</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Please fill in the form to create an account.</p>
            </div>
            <div>
                <form onSubmit={handelSubmitBtn} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="first_name">
                                Your Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                id="first_name"
                                placeholder="Your Name"
                                name="name"
                                type="text"
                                required
                            />
                        </div>
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="last_name">
                                Photo URL
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                id="last_name"
                                placeholder="Photo URL"
                                name="photo"
                                type="text"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                            id="email"
                            placeholder="Enter your email"
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2 text-sm relative">
                        <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="password_">
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
                    </div>
                    <div className="mb-6 flex items-center space-x-2 accent-sky-600">
                            <input type="checkbox" id="keep_signed_in" />
                            <label className="select-none text-sm font-medium" htmlFor="keep_signed_in">
                            Accept Term & Conditions
                            </label>
                        </div>
                    <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Register;