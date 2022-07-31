import React, { useState } from 'react';
import { useEffect } from 'react';
import AdminMobile from "../components/AdminMobile";
import { useAuthContext } from '../context/authContext';
import { ToastContainer, toast } from 'react-toastify';
import Nav from '../components/Nav';
import { getAllCategories } from '../api/category';
import { useNavigate, useParams } from 'react-router-dom';
import { uploadImage } from '../api/upload';
import { handleCreateBlog, handleUpdateBlog } from '../api/blog';
import { useBlogContext } from '../context/blogContext';

const EditBlog = () => {

    const { admin } = useAuthContext()
    const { setBlogs, blogs } = useBlogContext()
    const { id } = useParams()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState(null)
    const [article, setArticle] = useState({
        title: '',
        content: '',
        image: '',
        category: '',
    })

    const updateBlog = async () => {
        setIsLoading(true)
        const result = await handleUpdateBlog(id, article)

        if ("error" in result) {
            toast.error(result.error)
            setIsLoading(false)
            return
        }

        setBlogs(prev => prev.map(blog => blog.id === id ? article : blog))
        setArticle({
            title: '',
            content: '',
            image: '',
            category: '',
        })
        toast.success("Article updated")
        setIsLoading(false)
        navigate("/gracie")
    }

    const handleFetchCategories = async () => {
        const response = await getAllCategories()
        setCategories(response)
    }

    const handleFileUpload = async (event) => {
        setIsLoading(true)
        const file = event.target.files[0]
        console.log(file)
        const result = await uploadImage(file)
        setArticle({ ...article, image: result.url })
        setIsLoading(false)
    }

    // REDIRECT IF NOT SIGNED IN
    useEffect(() => {
        if (!admin) {
            navigate('/gracie-login')
            return
        }
    }, [])

    useEffect(() => {
        if (!id) {
            navigate('/gracie')
            return
        }

        const blog = blogs.find(blog => blog._id === id)
        if (!blog) {
            navigate('/gracie')
            return
        }
        setArticle(blog)
    }, [])

    useEffect(() => {
        handleFetchCategories()
    }, [])


    return (
        <>
            <ToastContainer />
            <div className={'w-full min-h-full bg-gray-100'}>
                <div className={'w-full flex items-center'}>
                    <Nav />


                    {/* For mobile */}
                    <AdminMobile />
                    {/* End of admin mobile */}

                    <div className={'w-full h-screen md:p-20 p-6'}>
                        <h2 className="text-xl font-bold">Update Blog</h2>

                        <div className="mt-8">
                            <div className={'grid gap-5'}>
                                <div className="">
                                    <label htmlFor="" className="flex text-sm font-semibold capitalize mb-2">title</label>
                                    <input type="text" value={article.title} onChange={e => setArticle(prev => ({ ...prev, title: e.target.value }))} className="w-full py-2 border px-4 outline-none flex" />
                                </div>
                            </div>

                            <div className={'grid md:grid-cols-2 gap-5 mt-6'}>
                                <div className="">
                                    <label htmlFor="" className="flex text-sm font-semibold capitalize mb-2">image</label>
                                    <input type="file" onChange={handleFileUpload} className="w-full py-2 border bg-white px-4 outline-none flex" />
                                </div>

                                <div className="">
                                    <label htmlFor="" className="flex text-sm font-semibold capitalize mb-2">category</label>
                                    <select name="" value={article.category} onChange={e => setArticle(prev => ({ ...prev, category: e.target.value }))} className="w-full p-3 bg-white border capitalize" id="">
                                        <option value="" selected disabled>Choose category</option>
                                        {categories && categories.map(({ category, _id }) => <option value={_id}>{category}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div className={'mt-6'}>
                                <label htmlFor="" className="flex text-sm font-semibold capitalize mb-2">content</label>
                                <textarea name="" value={article.content} onChange={e => setArticle(prev => ({ ...prev, content: e.target.value }))} id="" cols="30" rows="10" className="w-full border outline-none p-4"></textarea>
                            </div>

                            <div className={'py-6'}>
                                <button disabled={isLoading} onClick={updateBlog} className="inline-flex p-3 rounded-sm bg-pink-500 text-white text-sm">
                                    {isLoading ? "Loading..." : "Update Article"}
                                </button>
                            </div>
                        </div>
                        {/*    Mobile Posts */}
                        {/* <PostsAdminMobile /> */}


                    </div> {/*    End of second div*/}
                </div>
            </div>
        </>
    );
}

export default EditBlog