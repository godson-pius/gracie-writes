import React from 'react';

const Search = () => {
    return (
        <>
            <div className={'w-full flex justify-center px-20 py-7'}>
                <input className={'w-full text-center ring-2 ring-slate-200 focus:border-0 focus:outline-none focus:ring-2 focus:ring-purple-400 rounded-full py-1 text-sm appearance-none leading-6'} type="text" name="search" id="search" placeholder="search gracie post"/>
            </div>
        </>
    );
};

export default Search;
