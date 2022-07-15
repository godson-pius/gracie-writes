import React from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SignIn = () => {

    // Function for signing user in
    const handleSubmit = (e) => {
        //Process Code...
        e.preventDefault()
        window.location.href = '/gracie'
    }

    const handleForgotPassword = () => {
        toast.info('This feature will be added soon!'   )
    }

    return (
        <>
            <ToastContainer />
            <div className={'w-full px-10 flex flex-col items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-center'}>
                <div className={'bg-gradient-to-r from-purple-400 to-pink-400 p-16 text-center rounded-md'}>
                    <h1 className={'text-4xl font-bold'}>Sign In</h1>
                    <div className={'form'}>
                        <form onSubmit={handleSubmit}>
                            <input className={'w-full mt-3 rounded-sm focus:ring-2 focus:ring-purple-400 outline-none ease-in-out duration-500 p-2 text-sm'} type="email" name="email" id="email" placeholder=" Enter email address"/>

                            <input className={'w-full mt-3 rounded-sm focus:ring-2 focus:ring-purple-400 outline-none ease-in-out duration-500 p-2 text-sm'} type="password" name="password" id="password" placeholder=" Enter password"/>

                            <button className={'bg-pink-200 mt-3 p-2 w-full rounded-sm hover:bg-pink-400 hover:text-white hover:shadow-lg ease-in duration-300'} type="submit">Sign In</button>
                        </form>
                        <p className={'text-sm mt-3 text-slate-200 cursor-pointer'}>forgot password? <a className={'hover:text-indigo-500'} onClick={handleForgotPassword}>click here</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
