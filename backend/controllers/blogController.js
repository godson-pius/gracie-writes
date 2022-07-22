const Blog = require("../models/Blog")
const bcrypt = require("bcrypt")
const fs = require("fs")
const { generateAccessToken } = require("../utils/token")
const path = require("path")

const handleCreateBlogPost = async (req, res) => {
    const { title, content, image, category } = req.body

    // Check for empty values
    if (!title || !content || !category || !image) {
        res.status(400).json({
            error: "Title, Content, Image and Category must be provided"
        })
        return
    }



    // Check if file was sent
    // if (!req.files) {
    //     res.status(400).json({
    //         error: "Please provide an image file"
    //     })
    // }

    // const image = req.files?.image
    // const imageName = `${process.env.DOMAIN_NAME_LOCAL}/uploads/${image.name}`

    // Move image 
    // image.mv(`./public/uploads/${image.name}`)

    try {
        const blogData = {
            ...req.body,
            author: req.user.user._id
        }

        const blog = await Blog.create(blogData)
        blog.populate("author", "category")
        res.status(201).json(blog)
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }

}

const handleGetAllBlogPost = async (req, res) => {
    try {
        const allBlogPosts = await Blog.find().populate(["author", "category"])
        res.status(200).json(allBlogPosts)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

const handleGetOneBlogPost = async (req, res) => {
    const { id } = req.params
    try {
        const blog = await Blog.findOne({ _id: id }).populate(["author", "category"])
        res.status(200).json(blog)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

const handleUpdateOneBlogPost = async (req, res) => {
    const { id } = req.params
    const { title, content, category } = req.body
    // Check if blog exists
    const blog = await Blog.findById(id)

    if(!blog) {
        res.status(404).json({ error: "Blog not found "})
        return
    }

    // Check if file was sent
    if (req.files) {
        const image = req.files.image
        const imageName = `${DOMAIN}/uploads/${image.name}`

        // Move image 
        image.mv(`../public/uploads/${imageName}`)
        blog = { ...blog, image: imageName }
    }

    try {
        const updatedBlogData = { ...blog, title, category, content }
        const blog = await Blog.findByIdAndUpdate(id, updatedBlogData)
        res.status(200).json(blog)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

const handleDeleteOneBlogPost = async (req, res) => {
    const { id } = req.params
    try {
        const blog = await Blog.findOneAndDelete({_id: id})
        // DELETE THE FILE
        res.status(200).json(blog)
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

module.exports = {
    handleCreateBlogPost,
    handleGetAllBlogPost,
    handleDeleteOneBlogPost,
    handleUpdateOneBlogPost,
    handleGetOneBlogPost
}