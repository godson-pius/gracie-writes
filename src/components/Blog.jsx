import React from 'react';
import { DateTime } from "luxon"
import { useBlogContext } from '../context/blogContext';

const Blog = () => {
    const { blogs } = useBlogContext()
    return (
        <>
            <div className={'w-full py-7 md:flex gap-8 items-start px-6 md:px-20'}>
                <div className={'bg-cyan-300 md:w-[200rem] h-96 rounded-md'}>
                    { blogs && blogs.length && blogs[0].image  && <img src={blogs[0].image} style={{ objectFit: "cover" }} className="w-full h-full" /> }
                </div>
                <div className={'text-left mt-10 md:mt-0'}>
                    <span className={'text-sm text-slate-400'}>{ blogs && blogs.length && blogs[0].content && DateTime.fromISO(blogs && blogs.length && blogs[0].createdAt).toFormat('dd LLL yyyy') || "12pm - July 24, 2020"}</span>
                    <h1 className={'text-3xl mt-3 font-bold'}>{ blogs && blogs.length && blogs[0].title  || "Holiday UK Women Shoe Wear."}</h1>
                    <p className={'text-md mt-3 text-slate-600'}>{ blogs && blogs.length && blogs[0].content || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores eligendi excepturi fuga harum incidunt itaque iusto laborum laudantium maxime modi mollitia, natus nesciunt nobis placeat quaerat quod, tenetur velit."}</p>

                    <div className={'flex items-center gap-2'}>
                        <img className={'w-10 h-10 rounded-full'} src={"https://images.unsplash.com/photo-1657602714211-36d812c2cdf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} alt=""/>
                        <div className={'py-16'}>
                            <h2 className={'text-[12px] font-black text-black'}>{blogs && blogs.length && blogs[0].author?.name || "Gracie Post"}</h2>
                            <h5 className={'text-[10px] text-slate-400'}>Gracie Published</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
