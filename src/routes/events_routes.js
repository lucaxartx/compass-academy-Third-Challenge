const express = require('express')
const router = express.Router()

const {createEvents} = require('../controllers/events_controller')
const {authenticateUser} = require('../middlewares/authentication')


router.post('/events',authenticateUser,createEvents);



module.exports = router