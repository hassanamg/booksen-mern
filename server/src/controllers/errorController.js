const { original } = require('parseurl')
const { message } = require('statuses')
//const AppError = require('./../utils/appError')



const handleDuplicateFields = err => {

    const value = err.message.match(/(["'])(\\?.)*?\1/)[0]
    console.log(value)
   const message = `The ${value} you entered already exist , please choose another value`
   return new AppError(message, 400)
}
const handleValidationErrorDb = err => {


    const errors = Object.keys(err.errors).map(el => el.message)
    const message = `Invalid input data. ${errors.join('. ')}`
}

const handleJWTError = () =>  new AppError('Invalid token, Please log in again!', 401)
const handleJWTExpiredError = () => new AppError('Your token has expired, Please log in again!', 401)

const sendErrorDev = (err, req, res) => {

    // A - For API
    if(req.originalUrl.startsWith('/')) {

        return res.status(err.statusCode).json({

            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack
        }) 
    
    }

    // B - Rendered Website
    console.error("ERROR 💥", err)

   /* return res.status(err.statusCode).render('error', {

        status: 'Something went wrong',
        msg: err.message
    })*/
}

// API
const sendErrorProd = (err, req, res) => {

      // A) Operational, trusted error: send message to client
     if(req.originalUrl.startsWith('/api')) {

         res.status(err.statusCode).json({

            status: err.status,
            message: err.message
         })
        
     }
      // B) Programming or other unknown error: don't leak error details
    // 1) Log error

    console.error("ERROR 💥", err)
     // 2) Send generic message
     return res.status(500).json({
        status: 'error',
        message: 'Something went very wrong!'
     })
}
module.exports = (err, req, res , next) => {

    console.log(err.stack)
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    if(process.env.NODE_ENV === 'development') {
       
        sendErrorDev(err, req,res)
    
    }
    //if(process.env.NODE_ENV === 'production') {

  // let error = { ...err }
    
   // }
   // error.message = err.message
    //if(error.code === 11000) error = handleDuplicateFields(error)
    //sendErrorDev(error, req, res)
    // }
}