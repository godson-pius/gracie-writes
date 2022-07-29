import React from 'react'
import { FiBookOpen, FiHome, FiLogOut, FiMessageCircle, FiUploadCloud } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className={'bg-gradient-to-t from-purple-500 to-pink-500 w-52 h-screen rounded-r-3xl py-10 px-5 hidden md:block    '}>
            <div className={'flex flex-col text-white gap-5'}>
                <div className={'flex items-center gap-5'}>
                    <FiHome />
                    <Link className={'text-xs md:text-sm font-bold'} to="/">Home</Link>
                </div>

                <div className={'flex items-center gap-5'}>
                    <FiUploadCloud />
                    <Link className={'text-xs md:text-sm font-bold'} to="/create">Create post</Link>
                </div>

                <div className={'flex items-center gap-5'}>
                    <FiBookOpen />
                    <Link className={'text-xs md:text-sm font-bold'} to="/gracie">Posts</Link>
                </div>

                <div className={'flex items-center gap-5'}>
                    <FiMessageCircle />
                    <Link className={'text-xs md:text-sm font-bold'} to="/">Comments</Link>
                </div>

                <div className={'flex items-center gap-5'}>
                    <FiLogOut />
                    <Link className={'text-xs md:text-sm font-bold'} to="/">Sign out</Link>
                </div>
            </div>
        </div> 
    )
}

export default Nav