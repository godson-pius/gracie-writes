import React from 'react';

const Footer = () => {
    return (
        <>
            <div className={'w-full flex flex-col text-center py-3 px-20'}>
                <hr className={'mb-3'}/>
                <h1 className={'text-2xl font-bold'}>Gracie Blog</h1>
                <p className={'text-[0.750rem] text-purple-300'}>Designed & Developed by <a className={'text-purple-400 hover:text-purple-600 ease-in duration-300'} href="https://www.worldbraintechnology.com" target="_blank">World Brain Technology Ltd.</a></p>
            </div>
        </>
    );
};

export default Footer;
