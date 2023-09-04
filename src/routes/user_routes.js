const express = require('express')
const router = express.Router()

const {userSignUp, userLogin} = require('../controllers/user_controller')


router.post('/sign-up', userSignUp)
router.post('/sign-in', userLogin)

module.exports = router