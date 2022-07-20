import { BASE_URL } from "./auth"

export const handleGetBlogs = async () => {
    try {
        const request = await fetch(`${BASE_URL}/api/blog`)
        const response = await request.json()
        console.log({ response })
        return response
    } catch (error) {
        return { error: error.message }
    }
}

export const handleDeleteBlog = async (id) => {
    const token = JSON.parse(localStorage.getItem('ADMIN'))['token']
    const options = {
        method: 'delete',
        headers: {
            "Authorization": `Bearer ${token}` 
        }
    }

    try {
        const request = await fetch(`${BASE_URL}/api/blog/${id}`, options)
        const response = await request.json()
        return response
    } catch (error) {
        return { error: error.message }
    }
}