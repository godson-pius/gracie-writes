const { handleRegisteration, handleLogin, handleFetchAdmins } = require('../controllers/adminController')

const router = require('express').Router()


// router.get('/', (req, res) => {
//     res.send("<h3> Admin Route </h3>")
// })

router.get('/', handleFetchAdmins)
router.post('/register', handleRegisteration)
router.post('/login', handleLogin)




module.exports = router