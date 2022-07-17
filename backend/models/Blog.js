const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin"
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }
}, { timestamps: true })


const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog