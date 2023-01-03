const {getUsers, profile, getUser, uploadUserPhoto, resizeUserPhoto,updateCurrentUser} = require('./../controllers/userController')
const {signup, login, protect,logout} = require('./../controllers/authController')
const express = require('express')

const router = express.Router()


router.get('/',getUsers)
router.post('/signup', signup)
router.post('/login', login)
router.get('/logout', logout)
router.use(protect)
router.route('/me').get(profile, getUser)
router.patch('/updateme', uploadUserPhoto, resizeUserPhoto,updateCurrentUser)

//router.route('/:id')
  // .get(getUser)
module.exports = router