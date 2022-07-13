import React from 'react';
import { FiHexagon } from 'react-icons/fi'
import {Link} from "react-router-dom";
import Blogcontent from "./Blogcontent";

const Contents = () => {
    return (
        <>
            <div className={'w-full grid md:grid-cols-2 px-6 md:px-20 py-10 gap-6'}>
                <Blogcontent />
                <Blogcontent />
                <Blogcontent />
                <Blogcontent />
            </div>
        </>
    );
};

export default Contents;
