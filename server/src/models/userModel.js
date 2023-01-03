const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const Book = require('./books')
const { Timestamp } = require('bson')

const userSchema = mongoose.Schema({


    name: {

        type: String,
        required: [true, "Please tell us your name"]
    },
    email: {

        type: String,
        required: [true,"Please tell us your email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "please provide a valid email address"]
    },
    username: {

        type: String,
        
    },
    photo: {

        type:String,
        default: "img_default.png"
    },
    role: {

        type: String,
        enum: ["user", "admin"],
        default: "user"

    },
    password: {

        type: String,
        required: [true, "Please provide a password"],
        minLength: 8,
        select: false 

    },
    confirmPassword: {

        type: String,
        required: [true, "please confirm your password"],
        
        // Work only for CREATE & SAVE
        validate: {
            
           validator: function(el) {

          return el === this.password
        },
        message: "Passwords are not the same!"
      }
    },
    
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,

    active: {

        type: Boolean,
        default: true,
        select:  false
    },
    wishlist: [
        
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Book',
       
        }
    ],
   
    
},
{

    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}
)
//userSchema.index({ wishlist: 1 })
userSchema.pre(/^find/, function(next) {

    this.populate({

        path: 'wishlist',
        select: 'title imageCover'
    })
    next()
})
userSchema.pre('save', async function(next) {

    if(!this.isModified('password') || this.isNew) return next()
    this.passwordChangedAte = Date.now() - 1000
})
userSchema.pre('save', async function(next) {

   // Hash the password with cost 12
   this.password = await bcrypt.hash(this.password, 12)

   // DElete passwordConfirm field ( we don't need to save it )
   this.confirmPassword = undefined

    next()
})

userSchema.methods.verifyPassword = async(candidatPassword, userPassword) => {

    //console.log(candid)
    console.log(candidatPassword, userPassword)

    return await bcrypt.compare(candidatPassword, userPassword) // this return true if candidatPassword and userPassword are correct
}
userSchema.methods.changedPasswordAfterCreateToken = function(JWTTimestamp) {

    if(this.passwordChangedAt) {

        const changedTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10)
       
        return   JWTTimestamp < changedTimeStamp
    }
    // This mean password not changed
    return false
}
 const User = mongoose.model('User', userSchema)
module.exports = User


