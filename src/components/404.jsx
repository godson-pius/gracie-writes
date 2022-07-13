import React, { useState } from 'react'

const Error = () => {
    return (
        <div className={'bg-gradient-to-r from-purple-400 to-red-400 w-full flex flex-col text-white justify-center text-center h-screen'}>
            <h1 className={'text-5xl font-black'}>404</h1>
            <h2>PAGE NOT FOUND</h2>
        </div>
    )
}

export default Error
