import React, { useState } from 'react'
import Hero from "../components/Hero";
import Search from "../components/Search";
import Blog from "../components/Blog";
import Contents from "../components/Contents";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import { useBlogContext } from '../context/blogContext';

const Home = () => {
    const { searchResult, blogs } = useBlogContext()
    return (
        <>
            <Hero />
            <Search />
            {
                searchResult.length ? (
                    <Contents data={searchResult} />
                ) : (
                    <>
                        <Blog />
                        <Contents data={blogs} />
                        <Pagination />
                    </>
                )
            }
            <Footer />
        </>
    )
}

export default Home
