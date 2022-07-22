const { BASE_URL } = require("./auth")

export const uploadImage = async (file) => {
    const URL = "https://api.cloudinary.com/v1_1/jace-dev/image/upload"
    // const {key} = await getKey()
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "gracie-blog")
    formData.append("cloud_name", "jace-dev")

    const options = {
        body: formData,
        method: "post",
    }

    try {
        const image = await fetch(URL, formData)
        return image
    } catch (e) {
        return {
            error: true,
            message: e.message
        }
    }
}

// const getKey = async () => {
//     const request = await fetch(`${BASE_URL}/api/upload/key`)
//     return request.json()
// }