import React from 'react';

const PostsAdminMobile = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden mt-4">
                <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                    <div className="flex items-center space-x-2 text-sm">
                        <div>
                            <a href="#" className="text-blue-500 font-bold hover:underline">#1000</a>
                        </div>
                        <div className="text-gray-500">10 July, 2022</div>
                        <div>
            <span
                className="p-1.5 text-sm font-black tracking-wider uppercase text-black">Obi Visits</span>
                        </div>
                    </div>
                    <div className="text-sm text-gray-700">
                        Kring New Fit office chair, mesh + PU, black
                    </div>
                    <div className="text-sm font-medium text-black">
                        <span className={'cursor-pointer bg-blue-400 p-2 rounded mr-2 text-white hover:bg-blue-500'}>Edit</span>
                        <span className={'cursor-pointer bg-pink-400 p-2 rounded hover:bg-pink-500 text-white'}>Delete</span>
                    </div>
                </div>

            </div>
        </>
    );
};

export default PostsAdminMobile;
