import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { handleDeleteBlog, handleGetBlogs } from "../api/blog";



export const BlogContext = createContext()

const BlogContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState(null)

    const handleGetPosts = async () => {
        const result = await handleGetBlogs()
        setBlogs(result)
        return result
    }

    const handleDeleteBlogPost = async (id) => {
        const result = await handleDeleteBlog(id)
        setBlogs(blogs.filter(blog => blog.id !== id))
        return result
    }

    useEffect(() => {
        handleGetPosts()
    }, [])

    return (
        <BlogContext.Provider value={{ blogs, handleDeleteBlogPost }}>
            { children }
        </BlogContext.Provider>
    )
}

export const useBlogContext = () => useContext(BlogContext)

export default BlogContextProvider

