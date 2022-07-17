import React, { useEffect, useState } from 'react';
import {FiHexagon} from "react-icons/fi";
import { toast, ToastContainer } from 'react-toastify';
import { handleEditComment, handlePostComment } from '../api/comment';
import { useCommentContext } from '../context/commentContext';

const DropComment = ({ id }) => {
    const [isLoading, setIsLoading] = useState(false)
    const { handleSetComments, userId, editContent, setEditContent } = useCommentContext()
    const [commentator, setCommentator] = useState(() => {
        const name = JSON.parse( localStorage.getItem('COMMENT'))?.name || ""
        return {
            name,
            content: "",
            userId: ""
        }
    })

    const handleUpdateComment = async () => {
        setIsLoading(true)
        if(!editContent.content || !editContent.name) return

        const result = await handleEditComment(editContent, editContent._id)

        if("error" in result) {
            toast.error(result.error)
            setIsLoading(false)
            return
        }

        toast.success("Comment updated successfully")
        handleSetComments(id)
        setIsLoading(false)
        setEditContent(null)    
    }

    const handleComment = async () => {
        if(!commentator.content || !commentator.name) return

        setIsLoading(true)
        const result = await handlePostComment(commentator, id)
        console.log(result)

        localStorage.setItem('COMMENT', JSON.stringify(result))

        if("error" in result) {
            toast.error(result.error)
            setIsLoading(false)
            return
        }

        toast.success("Comment added successfully")
        handleSetComments(id)
        setCommentator(() => {
            const name = JSON.parse( localStorage.getItem('COMMENT'))?.name || ""
            return{
                name,
                content: "",
                userId
            }
        })
        setIsLoading(false)
    }

    useEffect(() => {
        userId && setCommentator(() => { return { ...commentator, userId } })
    }, [userId])


    return (
        <>
            <ToastContainer />
            <div className={'w-full'}>
                <div className={'flex gap-2 items-center text-md mt-3 text-purple-600'}>
                    <h4>Drop Comment</h4>
                    <FiHexagon size={10} />
                </div>
                {editContent ? (
                    <>
                        <input value={editContent?.name} onChange={(e) => setEditContent(prev => ({ ...prev, name: e.target.value }))} className={'w-full mt-3 rounded-md focus:ring-2 focus:ring-purple-400 outline-none ease-in-out duration-500 p-2 text-sm'} type="text" name="fullname" id="fullname" placeholder=" Enter Full Name" />
                        <textarea value={editContent?.content} onChange={(e) => setEditContent(prev => ({ ...prev, content: e.target.value }))} className={'w-full md:h-40 mt-3 rounded-md focus:ring-2 focus:ring-purple-400 outline-none ease-in-out duration-500 p-4'} name="comment" id="comment"></textarea>
                        <button onClick={handleUpdateComment} disabled={isLoading} className={'text-slate-800 bg-purple-300 p-2 rounded-full ease-in duration-300 hover:text-white text-sm hover:bg-purple-400 mt-2 float-left'}>Update Comment</button></>
                ) : (
                    <>
                        <input value={commentator?.name} onChange={(e) => setCommentator(prev => ({ ...prev, name: e.target.value }))} className={'w-full mt-3 rounded-md focus:ring-2 focus:ring-purple-400 outline-none ease-in-out duration-500 p-2 text-sm'} type="text" name="fullname" id="fullname" placeholder=" Enter Full Name" />
                        <textarea value={commentator?.content} onChange={(e) => setCommentator(prev => ({ ...prev, content: e.target.value }))} className={'w-full md:h-40 mt-3 rounded-md focus:ring-2 focus:ring-purple-400 outline-none ease-in-out duration-500 p-4'} name="comment" id="comment"></textarea>
                        <button onClick={handleComment} disabled={isLoading} className={'text-slate-800 bg-purple-300 p-2 rounded-full ease-in duration-300 hover:text-white text-sm hover:bg-purple-400 mt-2 float-left'}>Submit Comment</button>
                    </>
                )}
            </div>
        </>
    );
};

export default DropComment;
