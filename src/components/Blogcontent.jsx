import React from 'react';
import {FiHexagon} from "react-icons/fi";
import {Link} from "react-router-dom";
import { DateTime } from "luxon";


const Blogcontent = ({ image, title, content, category, author, _id, createdAt }) => {
    return (
        <div className="w-full ">
            <div className={'bg-indigo-300 md:w-full h-52 rounded-md'}>
                { image && <img src={image} className="w-full h-full border" style={{ objectFit: "cover" }} /> }
            </div>
            <div className="content mt-3 w-full">
                <div className={'flex gap-2 items-center text-sm text-slate-400'}>
                    <span className="capitalize">{category?.category || "Development"}</span>
                    <FiHexagon />
                    <span>{DateTime.fromISO(createdAt).toFormat('dd LLL yyyy') || "2 July, 2022"}</span>
                </div>

                <Link to={`/gracie/${_id}`} className={'text-2xl mt-3 font-black hover:text-blue-500'}>{title || "A Visit to Banana Island."}</Link>
                <p className={'text-sm mt-1 break-words w-full text-slate-600'}>{content || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores eligendi excepturi fuga harum incidunt itaque iusto laborum laudantium maxime modi mollitia, natus nesciunt nobis placeat quaerat quod, tenetur velit."}</p>
            </div> {/* Content */}
        </div>
    );
};

export default Blogcontent;
