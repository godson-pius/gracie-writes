import React, { useState } from 'react';
import { FiHexagon } from 'react-icons/fi'
import {Link} from "react-router-dom";
import { useBlogContext } from '../context/blogContext';
import Blogcontent from "./Blogcontent";

const Contents = () => {
    const { blogs } = useBlogContext()
    return (
        <>
            <div className={'w-full grid md:grid-cols-2 px-6 md:px-20 py-10 gap-6'}>
                { 
                    blogs && blogs.length ? blogs.map(blog => (
                        <Blogcontent key={blog._id} {...blog} />
                    )) : (
                       <h3 className="py-5 text-center text-gray-400">No Blogs found</h3>
                    )
                }

            </div>
        </>
    );
};

export default Contents;
