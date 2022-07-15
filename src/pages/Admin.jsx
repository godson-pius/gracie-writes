import React from 'react';
import { FiHome, FiBookOpen, FiUploadCloud, FiLogOut, FiMessageCircle } from 'react-icons/fi'
import {Link} from "react-router-dom";
import AdminMobile from "../components/AdminMobile";
import PostsAdminMobile from "../components/PostsAdminMobile";

const Admin = () => {
    return (
        <>
            <div className={'w-full bg-gray-100'}>
                <div className={'w-full flex items-center'}>
                    <div className={'bg-gradient-to-t from-purple-500 to-pink-500 w-52 h-screen rounded-r-3xl py-10 px-5 hidden md:block    '}>
                        <div className={'flex flex-col text-white gap-5'}>
                            <div className={'flex items-center gap-5'}>
                                <FiHome />
                                <Link className={'text-xs md:text-sm font-bold'} to="/">Home</Link>
                            </div>

                            <div className={'flex items-center gap-5'}>
                                <FiUploadCloud />
                                <Link className={'text-xs md:text-sm font-bold'} to="/">Create post</Link>
                            </div>

                            <div className={'flex items-center gap-5'}>
                                <FiBookOpen />
                                <Link className={'text-xs md:text-sm font-bold'} to="/">Posts</Link>
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
                    </div> {/*    End of first grid*/}

                    {/* For mobile */}
                    <AdminMobile />
                    {/* End of admin mobile */}

                    <div className={'w-full h-screen md:p-20 p-6'}>
                        <div className={'grid md:grid-cols-2 gap-5'}>
                            <div className={'bg-white shadow h-36 rounded-md p-5 justify-center flex flex-col hover:scale-105 duration-300'}>
                                <h1 className={'text-3xl font-bold'}>53</h1>
                                <p className={'text-sm text-pink-500'}>Number of posts on Gracie</p>
                            </div>
                            <div className={'bg-white shadow h-36 rounded-md p-5 justify-center flex flex-col hover:scale-105 duration-300'}>
                                <h1 className={'text-3xl font-bold'}>103</h1>
                                <p className={'text-sm text-pink-500'}>Number of comments on Gracie</p>
                            </div>
                        </div>

                        <h2 className={'mt-5 mb-5 uppercase text-xs font-black'}>All posts</h2>
                        <div className="overflow-auto rounded-lg shadow hidden md:block">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b-2 border-gray-200">
                                <tr>
                                    <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Contents</th>
                                    <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Title</th>
                                    <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Date</th>
                                    <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Actions</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                <tr className="bg-white">
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <a href="#" className="font-bold text-blue-500 hover:underline">10001</a>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        Kring New Fit office chair, mesh + PU, black...
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
              className="p-1.5 text-sm font-black tracking-wider text-black rounded-lg">Obi Visits</span>
                                    </td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">12 July, 2022</td>
                                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span className={'cursor-pointer bg-blue-400 p-2 rounded mr-2 text-white hover:bg-blue-500'}>Edit</span>
                                        <span className={'cursor-pointer bg-pink-400 p-2 rounded hover:bg-pink-500 text-white'}>Delete</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    {/*    Mobile Posts */}
                        <PostsAdminMobile />


                    </div> {/*    End of second div*/}
                </div>
            </div>
        </>
    );
};

export default Admin;
