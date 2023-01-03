const {getHomePage, getBooks, getBook, getLoginForm, getRegisterForm,getAccount, getWishlist} = require('./../controllers/viewController')
const {protect, isLoggedIn} = require('./../controllers/authController')
const express = require('express')

const router = express.Router()


router.get('/', isLoggedIn,getHomePage)
router.get('/books',isLoggedIn,  getBooks)
router.get('/me', isLoggedIn,getAccount)
router.get('/wishlist', isLoggedIn,getWishlist)
router.get('/search', getBooks)
router.get('/book/:slug', isLoggedIn, getBook)
router.get('/login', isLoggedIn, getLoginForm)
router.get('/register', isLoggedIn, getRegisterForm)

module.exports = router