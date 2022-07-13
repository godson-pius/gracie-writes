import React, { useState } from 'react'
import Typed from 'react-typed'

const Hero = () => {
    return (
        <div className={'w-full justify-center px-16 flex-col flex text-center py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}>
            <div className={'w-full grid md:grid-cols-2 justify-items-center items-center py-10'}>
                <div>
                    <h1 className={'text-7xl font-black'}>GRACIE BLOG</h1>
                    <h3 className={'text-1xl md:text-3xl text-slate-300 p-1'}>
                        GRACE
                        <Typed
                            className={'text-slate-700'}
                            strings={[' WRITES', ' FUN HALL', ' BLOG']}
                            typeSpeed={120}
                            backSpeed={140}
                            loop
                        />
                    </h3>
                </div> {/* End of first row*/}

                <div>
                    <div className={'md:bg-red-400 md:w-[27rem] md:h-[27rem] shadow-lg md:border md:border-amber-50 lg:border-4 border-slate-300 md:rounded-full custom__img'}>

                    </div>
                </div> {/* End of first row*/}

            </div>
            <hr className={'mt-8'}/>
        </div>
    )
}

export default Hero
