import { BASE_URL } from "./auth"

export const getAllCategories = async () => {
    try {
        const request = await fetch(`${BASE_URL}/api/category`)
        const categories = await request.json()
        return categories
    } catch (error) {
        return { error: error.message }
    }
}