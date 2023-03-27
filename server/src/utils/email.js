const nodemailer = require('nodemailer')

module.exports  = class Email {

   constructor(user) {

    this.to = user.email,
    this.firstname = user.name.split(' ')[0]
    this.from = `Hassan Amgharid <${process.env.EMAIL_FROM}>`
   }
   
   newTransport() {


    return nodemailer.createTransport({

        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })
   }
   async send(subject) {

    await this.newTransport().sendMail({

      from: this.from,
      to: this.to,
      subject

    })
   }
   
   async sendWelcome() {

    await this.send("You are welcome to your library booksen  !")
   }
}