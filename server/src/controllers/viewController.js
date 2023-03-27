const AppError = require('./../utils/appError')
const catchAsync = require('./../utils/catchAsync')
const Book = require('./../models/books')
const APIFeatures = require('./../utils/apiFeatures')
const User = require('../models/userModel')

const getHomePage = (req, res) => {

    let querySearch = req.query.q

    
        res.status(200).render('home', {

            title: 'Home page',
            user: res.locals.user,
            
        })
    
   
}
const getBooks = catchAsync(async(req, res, next) => {
    //const books = await Book.find({}, {'_id':0})
    var perPage = 8
    const countBooks = await Book.find()
    const features = new APIFeatures(Book.find(), req.query).search().sort().paginate()
    const books = await features.query
   
   // console.log(req.headers.authorization)
  
   res.status(200).render('books',{

      title: req.originalUrl.indexOf('q') > -1 ? 'Searched books' : 'All books',
      user: res.locals.user,
      books,
      currPage: req.query.page,
     pages: Math.ceil(countBooks.length / perPage)
      
    })
   console.log(req.originalUrl.indexOf('q'))

})


const getBook = catchAsync(async (req, res, next) => {

    const singleBook = await Book.findOne({ slug: req.params.slug }, { '_id': 0})
    console.log(singleBook)
    if(!singleBook) {

     return next(new AppError('There is no book with that name.', 404));

    }
    res.status(200).render('book', {
        title: `${singleBook.title} book`,
        singleBook
       
      });
 })
const getLoginForm = catchAsync(async (req, res, next) => {

    //console.log(req.user)
    if(!res.locals.user) {
        res.status(200).render('login', {

            title: 'Log into your account'
        })
    } 
    else {
        res.redirect('/')
       } 

})
const getRegisterForm = catchAsync(async (req, res, next) => {

   if(!res.locals.user) {
    res.status(200).render('register', {

        title: 'Create your free account'
    })
   }
   else {
    res.redirect('/')
   } 
})
const getAccount = (req, res) => {


    res.status(200).render('me', {
        title: 'Account setting',
        user: res.locals.user
    })
}
const getWishlist = catchAsync(async(req, res) => {

    const perPageWishList = 6
    const limit = 6
    const skip = (req.query.page - 1) * limit
    //const doc = await User.findById(res.locals.user).paginate()
    //const features =  new APIFeatures(User.findById(res.locals.user, {"wishlist": { $slice: 4 } }), req.query)
    //const doc = await features.query
    const doc = await User.findById(res.locals.user, {"wishlist": { $slice: [skip, limit + 1] } })
    const countWishlist = await User.findById(res.locals.user, {"wishlist":1})
    console.log(countWishlist.wishlist.length)
   // console.log(doc.wishlist.length)
    //console.log(doc.wishlist[0].imageCover)
   // const currUser = res.locals.user
   // const userWishList = await 
    res.status(200).render('wishlist', {
        title: 'Your wishlist',
        //user: res.locals.user
        wishlist: doc.wishlist,
        wishListCurrPage: req.query.page,
        pages: Math.ceil(countWishlist.wishlist.length / perPageWishList)
        
    })
})
module.exports = {getHomePage, getBooks, getBook, getLoginForm, getRegisterForm, getAccount, getWishlist}