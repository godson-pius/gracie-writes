const Comment = require("../models/Comment")

const handlePostComment = async (req, res) => {
    const { name, content, userId } = req.body
    const { id } = req.params

    if(!name && !content && !userId) {
        res.status(400).json({ error: "Name and content must be provided" })
        return
    } 

    try {
        const comment = await Comment.create({ name, content, blog: id, userId })
        res.status(201).json(comment)
    } catch(e) {
        res.status(500).json({ error: e.message })
    }

}

const handleGetComments = async (req, res) => {
    const { id } = req.params

    try {
        const comment = await Comment.find({ blog: id })
        res.status(201).json(comment)
    } catch(e) {
        res.status(500).json({ error: e.message })
    }

}

const handleGetCommentCount = async (req, res) => {
    try {
        const count = await Comment.find().count()
        res.status(201).json({count})
    } catch(e) {
        res.status(500).json({ error: e.message })
    }

}

const handleDeleteComment = async (req, res) => {
    const { id } = req.params

    try {
        const comment = await Comment.findByIdAndDelete(id)
        res.status(200).json(comment)
    }
    catch(err) {
        res.status(404).json({ message: err.message })
    }
}

const handleEditComment = async (req, res) => {
    const { id } = req.params
    const { name, content, userId } = req.body

    if(!name && !content && !userId) {
        res.status(400).json({ error: "Name and content must be provided" })
        return
    } 

    try {
        const comment = await Comment.findByIdAndUpdate(id, { name, content, userId })
        res.status(200).json(comment)
    }
    catch(err) {
        res.status(404).json({ message: err.message })
    }
}

module.exports = {
    handleDeleteComment,
    handlePostComment,
    handleGetComments,
    handleEditComment,
    handleGetCommentCount
}