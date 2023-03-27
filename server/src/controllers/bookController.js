const { get } = require('mongoose')
const Book = require('./../models/books')
const APIFeatures = require('./../utils/apiFeatures')
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')
const User = require('./../models/userModel')
const multer = require('multer')
const sharp = require('sharp')

const multerStorage = multer.memoryStorage()
const multerFilter = (req,file, cb) => {
  console.log(file.mimetype)
  if(file.mimetype.startsWith('image')) {

    cb(null, true)
  }
  else {
    cb(new AppError('Not an image! Please upload only images.', 400), false)
  }

}
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
})
 uploadBookImage = upload.single('imageCover')
 bookImage = catchAsync(async(req, res, next) => {

     if(!req.file) return next()

      req.file.filename = `book-image-${Date.now()}.jpeg`
       console.log(req.file.filename)

     await sharp(req.file.buffer)
     .toFormat('jpeg')
     .jpeg({quality: 90})
     .toFile(`public/images/${req.file.filename}`)
     next()
 })
const getAllBooks = catchAsync(async(req, res, next) => {

  // const features = new APIFeatures(Book.find())
    const features = new APIFeatures(Book.find(), req.query).sort().search()
   //console.log(req.user.id)
   //const books = await Book.find({$or: [ {title: { $regex: `${querySearch}` } }, {isbn: { $regex: `${querySearch}` } }] })

   const doc = await features.query
   console.log(doc)
     res.status(200).json({
         status:"success",
         results: doc.length,
         data:doc
        // authorName: result.authors[0].authorName
      })
 
     
})
const filterObj = (obj, ...allowedFields) => {
 
   const newObj = {}
   Object.keys(obj).forEach(el => {

     if(allowedFields.includes(el)) newObj[el] = obj[el]
   })
   return newObj
   
}
const createBook = catchAsync(async(req, res, next) => {

    
    // 2) Filtered out unwanted fields names that are not allowed to be updated
     const filteredBody = filterObj(req.body, 'title', 'language', 'isbn', 'asin', 'pageCount', 'publishedDate', 'publisher','longDescription', 'status', 'authors', 'categories', 'price', 'imageCover') 
      // if (!req.file) return next();
    
     const newBook = await Book.create(filteredBody)
     console.log(newBook)
     res.status(201).json({

        data: {
          data: newBook
        }
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

module.exports = {getAllBooks,uploadBookImage, bookImage, createBook} 