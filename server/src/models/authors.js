const mongoose = require('mongoose')


const authorSchema = mongoose.Schema(

    {
        authorName: {

            type: String,
            required: [true, 'Please choose a name for the author'],
            unique: true

        },
        dateBirth: {

            type: Date,
            required: true,

        },
        dateDeath: {

            type: Date,
            select: false


        },
        authorBio: {

            type: String,
            required: [true, 'Author must have a bio description'],
            trim: true

        },
        memberSince: {

          type: Date,
          default: Date.now()

        }, 
      
        authorUrl: {

            type: String,

        },
        authorImg: {

            type: String,
            default: "img_default.png"
        },
        genres: [
            {
            type: String,
            }
        ],
        relatedBooks : [   
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Book'

        }
        
        ]

    }
)

const Author = mongoose.model('Author',authorSchema)
module.exports = Author