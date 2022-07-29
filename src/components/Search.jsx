import React from 'react';
import { useBlogContext } from '../context/blogContext';

const Search = () => {
    const { setSearch, search, handleSearch } = useBlogContext()
    return (
        <>
            <div className={'w-full flex justify-center px-20 py-7'}>
                <input className={'w-full text-center ring-2 ring-slate-200 focus:border-0 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-full py-1 text-sm appearance-none leading-6'} value={search} onChange={(e) => setSearch(e.target.value)} type="text" name="search" id="search" placeholder="search gracie post" />
                <button onClick={handleSearch} className="text-sm px-4 bg-pink-500 text-white rounded-full">Search</button>
            </div>
        </>
    );
};

export default Search;
