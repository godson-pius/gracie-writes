// export const BASE_URL = "https://graciewrite.herokuapp.com"
export const BASE_URL = "http://localhost:5000"

export const handleLogin = async (creds) => {
    const options = {
        method: 'post',
        body: JSON.stringify(creds),
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        const request = await fetch(`${BASE_URL}/api/admin/auth/login`, options)
        const response = await request.json()
        console.log({ response })
        return response
    } catch (error) {
        return { error: error.message }
    }
}