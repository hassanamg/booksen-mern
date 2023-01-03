const express = require('express')
const path  = require('path')
const cors  =  require('cors')
const booksRouter = require('./routes/bookRouter')
const AppError = require('./utils/appError');

app = express()
app.use(cors({
    origin: 'http://localhost:3000',
}))

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/', booksRouter)
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app