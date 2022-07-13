import React from 'react';
import {Link, useParams} from 'react-router-dom'
import { FiHexagon, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import Blogcontent from "../components/Blogcontent";
import Comments from "../components/Comments";
import DropComment from "../components/DropComment";
import Footer from "../components/Footer";

const Post = () => {
    const params = useParams()
    return (
        <>
            <div className={'w-full bg-gray-100'}>
                {/*<div className={'w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 h-10'}></div>*/}
                <div className={'w-full flex flex-col justify-center items-center py-20 px-8 md:px-32'}>
                    <Link to='/' className={'text-4xl text-center'}>{ params.title }</Link>
                    <div className={'flex gap-2 items-center text-md text-slate-400 mt-3'}>
                        <span>12:40pm</span>
                        <FiHexagon />
                        <span>2 July, 2022</span>
                    </div>
                    <div className={'flex gap-2 items-center text-sm text-slate-400 mt-3'}>
                        <FiFacebook className={'cursor-pointer bg-gradient-to-r from-purple-400 to-pink-400 p-1 rounded-full text-white hover:p-2 ease-in duration-300'} size={24} />
                        <FiTwitter className={'cursor-pointer bg-gradient-to-r from-purple-400 to-pink-400 p-1 rounded-full text-white hover:p-2 ease-in duration-300'} size={24} />
                        <FiLinkedin className={'cursor-pointer bg-gradient-to-r from-purple-400 to-pink-400 p-1 rounded-full text-white hover:p-2 ease-in duration-300'} size={24} />
                    </div>

                    {/* Content starts here */}

                    <div className={'w-full content text-center md:text-left py-5'}>
                        <div className={'bg-indigo-400 md:w-full h-80 rounded-md'}></div>
                        <p className={'text-md mt-7'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur eius explicabo, fugiat in inventore, ipsa, laborum magnam molestias natus odit quia quidem recusandae rem repudiandae sit vero voluptatem voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque doloribus dolorum exercitationem id iste labore libero maiores placeat reprehenderit repudiandae sed vel voluptas voluptatibus, voluptatum? Cum distinctio perferendis veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam dolorum earum eius error excepturi expedita hic modi nam nisi officia optio perferendis perspiciatis qui quibusdam quis sed, sunt voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ea id laboriosam minima molestiae mollitia, nemo nobis non porro quaerat quia quod quos rem sequi tenetur, ut vitae, voluptas voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid corporis cupiditate dolorum ducimus, excepturi fugiat id impedit labore laboriosam maxime nam neque nisi quibusdam, quis sint tempora temporibus voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, nam quod? Ab dolore enim esse, hic nulla placeat quod ratione rerum. Accusamus distinctio iste libero nobis numquam quis ut voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quo temporibus. A adipisci alias beatae enim in labore maxime modi nisi provident, quaerat quam quisquam rerum sed temporibus tenetur voluptatum.</p>
                        <hr className={'mt-10 mb-5'}/>

                        <div className={'flex gap-2 items-center text-md mt-3 text-purple-600 font-black'}>
                            <h4>Comments</h4>
                            <FiHexagon size={10} />
                        </div>

                    {/*    Comments */}
                        <div className={'w-full grid md:grid-cols-2 gap-5'}>
                            <Comments />
                            <Comments />
                            <Comments />
                            <Comments />
                        </div>

                    {/*    Drop Comment */}
                        <DropComment />
                    </div>

                </div>
                <Footer />
            </div>
        </>
    );
};

export default Post;
