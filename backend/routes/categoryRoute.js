const { handleCreateCategory, handleGetCategories } = require('../controllers/categoryController')
const Authenticate = require("../middlewares/Authentication")

const router = require('express').Router()

router.post('/create', Authenticate, handleCreateCategory)
router.get('/', handleGetCategories)
// router.post('/create', Authenticate, handleCreateCategory)


module.exports = router