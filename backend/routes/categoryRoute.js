const { handleCreateCategory } = require('../controllers/categoryController')
const Authenticate = require("../middlewares/Authentication")

const router = require('express').Router()

router.post('/create', Authenticate, handleCreateCategory)


module.exports = router