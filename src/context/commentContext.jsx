import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { handleLogin } from "../api/auth";
import { handleDeleteComment, handleGetComments } from "../api/comment";



export const CommentContext = createContext()

const CommentContextProvider = ({ children }) => {
    const [comments, setComments] = useState(null)
    const [userId, setUserId] = useState(null)
    const [editContent, setEditContent] = useState(null)

    const handleSetComments = async (id) => {
        const result = await handleGetComments(id)
        setComments(result)
    }

    const updateCommentArray = (id) => {
        const newComments = comments.filter(comment => comment._id !== id)
        setComments(newComments)
    }

    const generateCommentId = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }

    const handleDeleteOneComment = async (id) => {
        const result = await handleDeleteComment(id)
        setComments(comments.filter(comment => comment._id === id))
    }

    useEffect(() => {
        const user = localStorage.getItem('COMMENT_ID')
        if (!user) {
            const id = generateCommentId()
            localStorage.setItem('COMMENT_ID', id)
            setUserId(id)
            return
        }
        setUserId(user)
    }, [])

    return (
        <CommentContext.Provider value={{ editContent, comments, userId, handleSetComments, updateCommentArray, handleDeleteOneComment, setEditContent }}>
            { children }
        </CommentContext.Provider>
    )
}

export const useCommentContext = () => useContext(CommentContext)

export default CommentContextProvider

