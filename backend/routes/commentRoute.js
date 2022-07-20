const { handlePostComment, handleDeleteComment, handleGetComments, handleEditComment } = require('../controllers/commentController')

const router = require('express').Router()

router.get('/:id', handleGetComments)
router.post('/:id', handlePostComment)
router.patch('/:id', handleEditComment)
router.put('/:id', handleEditComment)
router.delete('/:id', handleDeleteComment)


module.exports = router