import React from 'react';
import {FiHexagon} from "react-icons/fi";

const DropComment = () => {
    return (
        <>
            <div className={'w-full'}>
                <div className={'flex gap-2 items-center text-md mt-3 text-purple-600'}>
                    <h4>Drop Comment</h4>
                    <FiHexagon size={10} />
                </div>
                <input className={'w-full mt-3 rounded-md focus:ring-2 focus:ring-purple-400 outline-none ease-in-out duration-500 p-2 text-sm'} type="text" name="fullname" id="fullname" placeholder=" Enter Full Name"/>
                <textarea className={'w-full md:h-40 mt-3 rounded-md focus:ring-2 focus:ring-purple-400 outline-none ease-in-out duration-500 p-4'} name="comment" id="comment"></textarea>
                <button className={'text-slate-800 bg-purple-300 p-2 rounded-full ease-in duration-300 hover:text-white text-sm hover:bg-purple-400 mt-2 float-left'}>Submit Comment</button>
            </div>
        </>
    );
};

export default DropComment;
