import React, { useState } from 'react'
import Hero from "../components/Hero";
import Search from "../components/Search";
import Blog from "../components/Blog";
import Contents from "../components/Contents";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Hero />
            <Search />
            <Blog />
            <Contents />
            <Pagination />
            <Footer />
        </>
    )
}

export default Home
