const express = require('express')
const path  = require('path')
const cors  =  require('cors')
const globaErrorHandler = require('./controllers/errorController')

const booksRouter = require('./routes/bookRouter')
const viewRouter =  require('./routes/viewRouter')
const userRouter = require('./routes/userRoute')
const AppError = require('./utils/appError');

app = express()
app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/', userRouter)
app.use('/', booksRouter)
// app.use('/', viewRouter)
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globaErrorHandler)

module.exports = app