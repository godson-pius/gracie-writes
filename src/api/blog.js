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

export const handleCreateBlog = async (data) => {
    let admin = localStorage.getItem("ADMIN") 
    if(!admin) return { error: "Not authorized" }

    admin = JSON.parse(admin)
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${admin.token}`
        }
    }

    try {
        const request = await fetch(`${BASE_URL}/api/blog/create`, options)
        const response = await request.json()
        return response
    }
    catch(err) {
        return { error: err.message }
    }
}

export const handleUpdateBlog = async (id, data) => {
    let admin = localStorage.getItem("ADMIN") 
    if(!admin) return { error: "Not authorized" }

    admin = JSON.parse(admin)
    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${admin.token}`
        }
    }

    try {
        const request = await fetch(`${BASE_URL}/api/blog/${id}`, options)
        const response = await request.json()   
        return response
    }
    catch(err) {
        return { error: err.message }
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