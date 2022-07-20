const { handleCreateBlogPost, handleUpdateOneBlogPost, handleDeleteOneBlogPost, handleGetAllBlogPost, handleGetOneBlogPost } = require('../controllers/blogController')
const Authenticate = require("../middlewares/Authentication")

const router = require('express').Router()

router.post('/create', Authenticate, handleCreateBlogPost)
router.patch('/:id', Authenticate, handleUpdateOneBlogPost)
router.put('/:id', Authenticate, handleUpdateOneBlogPost)
router.delete('/:id', Authenticate, handleDeleteOneBlogPost)

router.get('/', handleGetAllBlogPost)
router.get('/:id', Authenticate, handleGetOneBlogPost)


module.exports = router