import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from "../components/404";
import Home from "../pages/Home";
import Post from "../pages/Post";

const Index = () => {
    return (
        <Routes>
            <Route path='/' exact element={ <Home />} />
            <Route path='/gracie/:title' element={ <Post /> } />
            <Route path='*' element={ <Error /> } />
        </Routes>
    )
}

export default Index
