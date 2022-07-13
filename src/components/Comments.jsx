import React from 'react';
import {FiHexagon} from "react-icons/fi";

const Comments = () => {
    return (
        <>
            <div className={'w-full py-5'}>
                <h1 className={'text-md text-left font-black'}>Timothy Elvis</h1>
                <div className={'flex gap-2 items-center text-sm text-purple-400 mt-1'}>
                    <span>12:40pm</span>
                    <FiHexagon />
                    <span>2 July, 2022</span>
                </div>
                <p className={'text-sm mt-2 text-slate-600 text-left'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores itaque nesciunt nihil numquam temporibus totam unde! Cumque cupiditate eligendi fuga illo placeat quos recusandae ut vitae! Debitis illum possimus vitae.</p>
            </div>
        </>
    );
};

export default Comments;
