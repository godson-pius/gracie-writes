import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuthContext } from '../context/authContext';

const SignIn = () => {
    const { handleAdminAuth, admin } = useAuthContext()
    const navigate = useNavigate()
    const [loginCred, setLoginCred] = useState({
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    // Function for signing user in
    const handleSubmit = async () => {
        if(loginCred.email && loginCred.password){
            setIsLoading(true)
    
            const result = await handleAdminAuth(loginCred)
            if("error" in result || !("token" in result)) {
                toast.error(result.error)
                setIsLoading(false)
                return
            }
    
            // Set toast
            toast.success("Login Successful")
            localStorage.setItem("ADMIN", JSON.stringify(result))
            setIsLoading(true)
            setTimeout(() => navigate('/gracie'), 2000)
        }
    }

    const handleForgotPassword = () => {
        toast.info('This feature will be added soon!'   )
    }

    // REDIRECT IF LOGGED IN
    useEffect(() => {
        admin && navigate("/gracie")
    }, [])

    return (
        <>
            <ToastContainer />
            <div className={'w-full px-10 flex flex-col items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-center'}>
                <div className={'bg-gradient-to-r from-purple-400 to-pink-400 p-16 text-center rounded-md'}>
                    <h1 className={'text-4xl font-bold'}>Sign In</h1>
                    <div className={'form'}>
                        <div>
                            <input 
                                className={'w-full mt-3 rounded-sm focus:ring-2 focus:ring-purple-400 outline-none ease-in-out duration-500 p-2 text-sm'} 
                                type="email" name="email" value={loginCred.email}
                                onChange={(e => setLoginCred(prev => ({ ...prev, email: e.target.value })))} id="email" placeholder=" Enter email address"
                            />

                            <input className={'w-full mt-3 rounded-sm focus:ring-2 focus:ring-purple-400 outline-none ease-in-out duration-500 p-2 text-sm'}
                                value={loginCred.password}
                                onChange={(e => setLoginCred(prev => ({ ...prev, password: e.target.value })))} 
                                type="password" name="password" id="password" placeholder=" Enter password"/>

                            <button onClick={handleSubmit} disabled={isLoading} className={'bg-pink-200 mt-3 p-2 w-full rounded-sm hover:bg-pink-400 hover:text-white hover:shadow-lg ease-in duration-300'} >Sign In</button>
                        </div>
                        <p className={'text-sm mt-3 text-slate-200 cursor-pointer'}>forgot password? <a className={'hover:text-indigo-500'} onClick={handleForgotPassword}>click here</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
