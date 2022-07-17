import React, { useState } from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom'
import { FiHexagon, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import Blogcontent from "../components/Blogcontent";
import Comments from "../components/Comments";
import DropComment from "../components/DropComment";
import Footer from "../components/Footer";
import { useBlogContext } from '../context/blogContext';
import { useEffect } from 'react';
import {DateTime} from "luxon"
import { useCommentContext } from '../context/commentContext';

const Post = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { handleSetComments, comments } = useCommentContext()
    const { blogs } = useBlogContext()

    const [blog, setBlog] = useState(null)




    useEffect(() => {
        !id && navigate("/")
    }, [])

    useEffect(() => {
        setBlog(blogs?.find(_blog => _blog._id === id))
        handleSetComments(id)
    }, [blogs])

    return (
        <>
            <div className={'w-full bg-gray-100'}>
                <div className={'w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 h-10'}></div>
                <div className={'w-full flex flex-col justify-center items-center py-20 px-8 md:px-32'}>
                    <Link to='/' className={'text-4xl text-center'}>{ blog?.title }</Link>
                    <div className={'flex gap-2 items-center text-md text-slate-400 mt-3'}>
                        <span>{ DateTime.fromISO(blog?.createdAt).toLocaleString(DateTime.TIME_SIMPLE) }</span>
                        <FiHexagon />
                        <span>{ DateTime.fromISO(blog?.createdAt).toFormat('dd LLL yyyy') }</span>
                    </div>

                    <div className={'flex gap-2 items-center text-sm text-slate-400 mt-3'}>
                        <FiFacebook className={'cursor-pointer bg-gradient-to-r from-purple-400 to-pink-400 p-1 rounded-full text-white hover:p-2 ease-in duration-300'} size={24} />
                        <FiTwitter className={'cursor-pointer bg-gradient-to-r from-purple-400 to-pink-400 p-1 rounded-full text-white hover:p-2 ease-in duration-300'} size={24} />
                        <FiLinkedin className={'cursor-pointer bg-gradient-to-r from-purple-400 to-pink-400 p-1 rounded-full text-white hover:p-2 ease-in duration-300'} size={24} />
                    </div>

                    {/* Content starts here */}

                    <div className={'w-full content text-center md:text-left py-5'}>
                        <div className={'bg-indigo-400 md:w-full h-80 rounded-md'}>
                            <img src={blog?.image} className={"w-full h-full"}  />
                        </div>
                        <p className={'text-md mt-7'}>
                            { blog?.content }
                        </p>
                        <hr className={'mt-10 mb-5'}/>

                        <div className={'flex gap-2 items-center text-md mt-3 text-purple-600 font-black'}>
                            <h4>Comments</h4>
                            <FiHexagon size={10} />
                        </div>

                    {/*    Comments */}
                        <div className={'w-full grid md:grid-cols-2 gap-5'}>
                            {
                                comments && comments.length ? 
                                    comments?.map((comment) => (
                                        <Comments {...comment} key={comment._id} />
                                    )) : (
                                        <h3 className="p-4 text-gray-400 text-sm">No comments</h3>
                                    )
                            }
                        </div>

                    {/*    Drop Comment */}
                        <DropComment id={id} />
                    </div>

                </div>
                <Footer />
            </div>
        </>
    );
};

export default Post;
