const Category = require("../models/Category")

const handleCreateCategory = async (req, res) => {
    const { category } = req.body

    if(!category) {
        res.status(400).json({ error: "Category name must be provided" })
        return
    } 

    try {
        const _category = await Category.create({ category })
        res.status(201).json(_category)
    } catch(e) {
        res.status(500).json({ error: e.message })
    }

}

const handleDeleteCategory = async (req, res) => {
    const { id } = req.params

    try {
        const category = await findOneById(id)
    }
    catch(err) {
        res.status(404).json({ message: err.message })
    }
}

module.exports = {
    handleCreateCategory
}