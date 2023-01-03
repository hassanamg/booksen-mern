const { text } = require('body-parser');
const mongoose = require('mongoose')
const { type } = require('os')
const Authors = require('./authors')
const slugify = require('slugify')
const booksSchema = mongoose.Schema(

    {
      title: {

        type: String,
        required: [true, "A book msut have a title"],
        unique: true,
        trim: true

      },
      slug: String,
      isbn: [
        {
           type: String,
           unique: true,
           trim: true,
           default: "This book does not have ISBN Number",
           min: [10, 'ISBN should include 13 digits'], // ISBN-10
           max: [13, 'ISBN should include only 13 digits'] // ISBN-13
        }       

      ],
      asin: {

        type: String,
        unique: true,
        trim: true,
        default: "This book does not have ASIN Number",
        
      },
      pageCount: {
 
         type: Number,
         required: true,
      
      },
      language: {

        type: String,
        required: true,
        
      },
      publishedDate: {

        type: Date,
        required: true,
        default: Date.now(),
        
      },
      publisher: {
      
      type: String,
      
      },

      imageCover: {
 
         type: String,
         required: true
      },

      longDescription: {
        type: String,
        required: [true, 'Please write a bref about the book'],
     
      },
      status: 
      {
        type: String,
        default: "UNPUBLISHED",
        lowercase: true
      },
    
      authors: [
      
        {

            type: mongoose.Schema.ObjectId,
            ref: 'Author'
        }

       ],
       categories: [

          {
          type: String,
          required: [true, "Please select at least one category for this book"],
          
          }
       ],

       paid: {
     
            tyep: Boolean,
            default: false,
            select: false    
       },
       price: {
   
           type: String,
           default: "Free"
       },

    },
    {

        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
    

);

booksSchema.index({ authors: 1, title: 'text', isbn: 'text' })
booksSchema.index({ slug:  1 })
booksSchema.pre(/^find/, function(next) {

  this.populate({

    path: "authors",
    select: {'authorName':  1,'authorImg':1, '_id': 0}
   
  })
  next()
})
booksSchema.pre('save', function(next) {

  this.slug = slugify(this.title, { lower: true })
  next()
})
const Book = mongoose.model('Book', booksSchema)
module.exports = Book