const { get } = require('mongoose')
const Book = require('./../models/books')
const APIFeatures = require('./../utils/apiFeatures')
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')
const User = require('./../models/userModel')

const getAllBooks = catchAsync(async(req, res, next) => {

   const features = new APIFeatures(Book.find(), req.query).sort().search().paginate()
   //console.log(req.user.id)
   //const books = await Book.find({$or: [ {title: { $regex: `${querySearch}` } }, {isbn: { $regex: `${querySearch}` } }] })

   const result = await features.query
   console.log(result)
     res.status(200).json({
         data:result
        // authorName: result.authors[0].authorName
      })
 
     
})

// const getBook = catchAsync(async (req, res, next) => {

//      const book = await Book.findOne({ slug: req.params.slug })
//     // console.log(book)
    
//      if(!book) {

//       return next(new AppError('There is no book with that name.', 404));

//      }
//     res.status(200).json({

//       status: 'Success',
//       data: {
          
//           book:book
//       }
//     })

//   })


// const getBooksBySearch = catchAsync(async (req, res, next) => {
//  const querySearch = req.query.q
//   //console.log(querySearch.split(' '))
 
//    const books = await Book.find({$or: [ {title: { $regex: `${querySearch}` } }, {isbn: { $regex: `${querySearch}` } }] })
   
//      // console.log(books)
//       res.status(200).json({
 
//          status: "success",
//          results: books.length,
//          data: {
             
//              books
//          }
//        })
    
//   })

// const createBook = catchAsync(async (req, res, next) => {

//     const createdBook = await Book.create(req.body)
//     res.status(201).json({

//       status: "Success",
//       data: {

//         data: createdBook
//       }
//     })
  
// })

// // add a book to wishlist for a logged in user in books route
 
// const addBookToWishlist = catchAsync(async(req, res, next) => {

//     const addBook = await User.findByIdAndUpdate(req.user.id , {

      
//     })
// })

module.exports = {getAllBooks} 