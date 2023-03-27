const { create } = require('./../models/userModel')
const {promisify} = require('util')
const userModel = require('./../models/userModel')
const jwt = require('jsonwebtoken')
const AppError = require('./../utils/appError')
const User = require('./../models/userModel')
const catchAsync = require('../utils/catchAsync')
const { resolveSoa } = require('dns')
const Email = require('../utils/email')
const signToken = id => {

   return jwt.sign({ id }, process.env.JWT_SECRET, {

    expiresIn: process.env.JWT_EXPIRES_IN
   })

}

const createSendToken = (user, statusCode, res) => {

     const token = signToken(user._id)
     const cookieOptions = {

        expiresIn: new Date(

            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: false
        
     }
     res.cookie('jwt', token, cookieOptions)

     user.password = undefined
     
     res.status(statusCode).json({

        status: "success",
        token,
        data: { user }
     })
}

const signup = catchAsync(async(req, res) => {


        const registerUser = await userModel.create({

             name: `${req.body.name}`,
            email: req.body.email,
            role: req.body.role,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            wishlist: req.body.wishlist
        })
        
        createSendToken(registerUser, 201, res)
        await new Email(registerUser).sendWelcome()
        console.log(req.headers.authorization)
        console.log(registerUser)
   
     
})


const login =  async(req, res, next) => {

    const { email, password } = req.body
    

    // Check if email and password are provided or not
    if(!email || !password) {

        return next(new AppError("Please provide us email and password"), 400)
    }
    
    const user = await User.findOne({ email }).select('+password').select('+status')
    
    // Check if user exists and password correct
    if(!user || !(await user.verifyPassword(password, user.password))) {
   
         return next(new AppError('Icorrect email or password, please try again', 401))

    }
    if(user.status !== "Active") {

           return next(new AppError('Please verify your account before login', 401))
    }
    // if credentials are correct , send token 
    createSendToken(user, 200, res)
    console.log(user)
    
}  
const logout = (req, res) => {

    res.cookie('jwt', 'loggedout', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    })
    res.status(200).json({status: "success"})
}

const protect = catchAsync(async(req, res, next) => {

    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') ) {

        token = req.headers.authorization.split(' ')[1]
        
    }
  
    else if (req.cookies.jwt) {

        token = req.cookies.jwt
    }
    console.log(token)
    if(!token) {

        return next(
            new AppError('You are not logged in! Please log in to get access.', 401)
          );
    }

    // 1 -  Verification token 
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
    
    // 2 - Check if user still exist 
    const currentUser = await User.findById(decoded.id)
    console.log(currentUser)
    if(!currentUser) {

        return next( new AppError('The user belonging to this token does no longer exist', 401))
    }

    // 3 - Check if the user changed password after the token was issued
    if(currentUser.changedPasswordAfterCreateToken(decoded.iat)) {
        //console.log(currentUser.passwordChangedAt, decoded.iat)

        return next( new AppError('You are currently changed your password , please login again !', 401))
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser
    res.locals.user = currentUser

   
    next()
})
const restrictTo = (...roles) => {
    
    return (req, res, next) => {

        if(!roles.includes(req.user.role)) {

            return next(new AppError('You do not have permission to perform this action', 403))

        }
        next()
    }

}

const isLoggedIn = async(req, res, next) => {

    
    if(req.cookies.jwt) {

        //console.log(req.cookies.jwt)

        try {

           const decoded = await promisify(jwt.verify)(

            req.cookies.jwt,
            process.env.JWT_SECRET
           
            )
           console.log(decoded)

           // Check if user still exist 
           const currentUser = await User.findById(decoded.id)
           //.log(currentUser)
           if(!currentUser) {

             return next()
           } 
           // 3) Check if user changed password after the token was issued
           if(currentUser.changedPasswordAfterCreateToken(decoded.iat)) {

              return next()
           }

           // There is a logged in user
           res.locals.user = currentUser
           
        } catch(err) {

           next()
        }
    }
    next()
} 
module.exports = {signup, login,protect,restrictTo,isLoggedIn, logout }