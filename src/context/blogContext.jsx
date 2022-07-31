import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { handleDeleteBlog, handleGetBlogs } from "../api/blog";



export const BlogContext = createContext()

const BlogContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([])
    const [search, setSearch] = useState("")
    const [edit, setEdit] = useState(null)
    const [searchResult, setSearchResult] = useState([])

    const handleGetPosts = async () => {
        const result = await handleGetBlogs()
        setBlogs(result)
        return result
    }

    const handleSearch = () => {
        const regrex = new RegExp(search, "i")
        const result = blogs.filter(blog => blog.title.match(regrex))
        setSearchResult(result)
        setSearch("")
    }

    const handleDeleteBlogPost = async (id) => {
        const result = await handleDeleteBlog(id)
        setBlogs(prev => prev.filter(blog => blog.id !== id))
        return result
    }

    useEffect(() => {
        handleGetPosts()
    }, [])

    return (
        <BlogContext.Provider value={{ blogs, handleDeleteBlogPost, setBlogs, setSearch, search, searchResult, handleSearch, edit, setEdit }}>
            { children }
        </BlogContext.Provider>
    )
}

export const useBlogContext = () => useContext(BlogContext)

export default BlogContextProvider

