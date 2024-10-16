const express = require('express')
const { userRegistration, usertest } = require('../controllers/usersController')
const router = express.Router()


router.get('/test', usertest)
router.post('/signup', userRegistration);


module.exports = router