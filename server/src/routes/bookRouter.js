const  {getAllBooks,uploadBookImage, bookImage ,createBook} = require('./../controllers/bookController')
// const {addToWishlist} = require('./../controllers/userController')
const {protect, restrictTo} = require('./../controllers/authController')
const express = require('express')

const booksRouter = express.Router()

booksRouter.route('/books').get(getAllBooks)

booksRouter.route('/books').post(protect,restrictTo('admin'),uploadBookImage, bookImage,createBook)

//router.route('/addToWishlist').patch(protect, addToWishlist)
//router.route('/search').get(getBooksBySearch)
//router.route('/:slug').get(getBook)

//router.use(protect)
//router.route('/').post(createBook)



module.exports = booksRouter