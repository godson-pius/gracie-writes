const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
    content: {
        type: String,
        required: true,
    },
}, { timestamps: true })


const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment