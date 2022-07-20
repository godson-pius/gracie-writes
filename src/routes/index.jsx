import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from "../components/404";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Admin from "../pages/Admin";
import SignIn from "../pages/SignIn";

const Index = () => {
    return (
        <Routes>
            <Route path='/' exact element={ <Home />} />
            <Route path='/gracie/:id' element={ <Post /> } />
            <Route path='/gracie' element={ <Admin /> } />
            <Route path='/gracie-login' element={ <SignIn /> } />
            <Route path='*' element={ <Error /> } />
        </Routes>
    )
}

export default Index
