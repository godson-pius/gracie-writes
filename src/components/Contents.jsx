import React from 'react';
import Blogcontent from "./Blogcontent";

const Contents = ({ data }) => {
    return (
        <>
            <div className={'w-full grid md:grid-cols-2 px-6 md:px-20 py-10 gap-6'}>
                { 
                    data.length ? data.map(blog => (
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
