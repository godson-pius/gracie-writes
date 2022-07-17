import React, {useState} from 'react';
import {FiChevronsLeft, FiChevronsRight} from "react-icons/all";
import { useBlogContext } from '../context/blogContext';

const Pagination = () => {
    const {blogs} = useBlogContext()
    let max = blogs ? blogs.length : 1

    let [num, setNum] = useState(1)
    let [cur, setCur] = useState(1)

    const pages = [
        {page: num},
        {page: num + 1},
        {page: num + 2},
        {page: num + 3},
    ]

    function Next() {
        if(num > max) return
        setNum(++num)
    }

    function back() {
        num > 1 && setNum(--num)
    }

    return (
        <>
            <div className={'w-full flex justify-center py-10'}>
                <div className="flex bg-white rounded-lg">
                    <FiChevronsLeft onClick={back} className={'cursor-pointer h-10 border-2 border-r-0 border-purple-600 px-4 rounded-l-lg hover:bg-purple-600 hover:text-white'} size={50} />

                    {
                        pages.map((pg, i) => (
                            <button key={i} onClick={() => setCur(pg.page)} className={`h-10 border-2 border-r-0 border-purple-600 w-12 ${cur === pg.page && 'bg-purple-600 text-white'} ${pg.page > max && "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>{pg.page}</button>
                        ))
                    }
                    <FiChevronsRight onClick={Next} size={50} className={`cursor-pointer h-10 border-2 border-purple-600 px-4 rounded-r-lg hover:bg-purple-600 hover:text-white ${num >= max && "cursor-not-allowed bg-purple-200 hover:bg-purple-200 text-white"}`} />
                </div>

            </div>
        </>
    );
};

export default Pagination;
