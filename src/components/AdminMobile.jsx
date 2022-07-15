import React from 'react';
import {Link} from "react-router-dom";
import {FiBookOpen, FiHome, FiLogOut, FiMessageCircle, FiUploadCloud} from "react-icons/fi";

const AdminMobile = () => {
    return (
        <>
            <div className={'bg-gradient-to-t from-purple-500 to-pink-500 w-10 h-screen rounded-r-3xl py-10 px-2 block md:hidden    '}>
                <div className={'flex flex-col text-white gap-5'}>
                    <div className={'flex items-center gap-5'}>
                        <Link className={'text-xs md:text-sm font-bold'} to="/gracie">
                            <FiHome title={'Home'} className={'hover:scale-125 duration-500'} size={20} />
                        </Link>
                    </div>

                    <div className={'flex items-center gap-5'}>
                        <Link className={'text-xs md:text-sm font-bold'} to="/">
                            <FiUploadCloud title={'Create post'} className={'hover:scale-125 duration-500'} size={20} />
                        </Link>
                    </div>

                    <div className={'flex items-center gap-5'}>
                        <Link className={'text-xs md:text-sm font-bold'} to="/">
                            <FiBookOpen title={'Posts'} className={'hover:scale-125 duration-500'} size={20} />
                        </Link>
                    </div>

                    <div className={'flex items-center gap-5'}>
                        <Link className={'text-xs md:text-sm font-bold'} to="/">
                            <FiMessageCircle title={'Comments'} className={'hover:scale-125 duration-500'} size={20} />
                        </Link>
                    </div>

                    <div className={'flex items-center gap-5'}>
                        <Link className={'text-xs md:text-sm font-bold'} to="/">
                            <FiLogOut title={'Logout'} className={'hover:scale-125 duration-500'} size={20} />
                        </Link>
                    </div>
                </div>
            </div> {/*    End of mobile */}
        </>
    );
};

export default AdminMobile;
