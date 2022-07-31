import { BASE_URL } from "./auth"

export const handlePostComment = async (comment, id) => {
    const options = {
        method: 'post',
        body: JSON.stringify(comment),
        headers: {
            "Content-Type": "application/json"
        }
    }
    try {
        const request = await fetch(`${BASE_URL}/api/comment/${id}`, options)
        const response = await request.json()
        return response
    } catch (error) {
        return { error: error.message }
    }
}

export const handleGetComments = async (id) => {
    try {
        const request = await fetch(`${BASE_URL}/api/comment/${id}`)
        const response = await request.json()
        return response
    } catch (error) {
        return { error: error.message }
    }
}

export const handleGetCommentCount = async () => {
    try {
        const request = await fetch(`${BASE_URL}/api/comment/`)
        const response = await request.json()
        return response.count
    } catch (error) {
        return { error: error.message }
    }
}

export const handleDeleteComment = async (id) => {
    const options = {
        method: 'delete'
    }

    try {
        const request = await fetch(`${BASE_URL}/api/comment/${id}`, options)
        const response = await request.json()
        return response
    } catch (error) {
        return { error: error.message }
    }
}

export const handleEditComment = async (data, id) => {
    const options = {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        const request = await fetch(`${BASE_URL}/api/comment/${id}`, options)
        const response = await request.json()
        return response
    } catch (error) {
        return { error: error.message }
    }
}