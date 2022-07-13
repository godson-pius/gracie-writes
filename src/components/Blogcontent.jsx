import React from 'react';
import {FiHexagon} from "react-icons/fi";
import {Link} from "react-router-dom";

const Blogcontent = () => {
    return (
        <>
            <div>
                <div className={'bg-indigo-300 md:w-full h-52 rounded-md'}></div>
                <div className="content mt-3">
                    <div className={'flex gap-2 items-center text-sm text-slate-400'}>
                        <span>Development</span>
                        <FiHexagon />
                        <span>2 July, 2022</span>
                    </div>

                    <Link to="/gracie/Lengendary Visit to Ancient Town" className={'text-2xl mt-3 font-black'}>A Visit to Banana Island.</Link>
                    <p className={'text-sm mt-1 text-slate-600'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores eligendi excepturi fuga harum incidunt itaque iusto laborum laudantium maxime modi mollitia, natus nesciunt nobis placeat quaerat quod, tenetur velit.</p>
                </div> {/* Content */}
            </div> {/* First Div */}
        </>
    );
};

export default Blogcontent;
