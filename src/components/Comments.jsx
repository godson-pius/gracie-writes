import React from 'react';
import {FiHexagon} from "react-icons/fi";
import {DateTime} from "luxon"
import { useCommentContext } from '../context/commentContext';
import { toast, ToastContainer } from 'react-toastify';
import { handleDeleteComment } from '../api/comment';

const Comments = ({ name, _id, content, createdAt, userId: commentatorId }) => {
    const { userId, setEditContent, updateCommentArray } = useCommentContext()

    const handleSetEdit = () => {
        const comment = { 
            name,
            content,
            userId: commentatorId,
            _id
        }
        setEditContent(comment)
    }

    const handleDelete = async () => {
        const result = await handleDeleteComment(_id)

        if("error" in result) {
            toast.error(result.error)
            return
        }

        toast.success("Comment deleted successfully")
        updateCommentArray(_id)
    }

    return (
        <>
            <div className={'w-full py-5'}>
                <h1 className={'text-md text-left font-black'}>{ name }</h1>
                <div className={'flex gap-2 items-center text-sm text-purple-400 mt-1'}>
                    <span>{ DateTime.fromISO(createdAt).toLocaleString(DateTime.TIME_SIMPLE) }</span>
                    <FiHexagon />
                    <span>{ DateTime.fromISO(createdAt).toFormat('dd LLL yyyy') }</span>
                </div>
                <p className={'text-sm mt-2 text-slate-600 text-left'}>
                    { content }
                </p>
                { 
                    userId === commentatorId && (
                        <div className="flex justify-end">
                            <button onClick={handleSetEdit} className="text-blue-500 mr-3 text-sm text-bold">Edit</button>
                            <button onClick={handleDelete} className="text-red-500 text-sm text-bold">Delete</button>
                        </div>
                    ) 
                }
                
            </div>
        </>
    );
};

export default Comments;
