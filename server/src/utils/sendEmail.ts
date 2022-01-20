import nodemailer from "nodemailer"

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(to: string, html: string) {

  // let testAccount = await nodemailer.createTestAccount()
  // console.log('testAccount', testAccount)

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'py2bvj7llps5lrrb@ethereal.email', // generated ethereal user
      pass: 'y3kmEFjmfFsKWXSeEW', // generated ethereal password
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: to, // list of receivers
    subject: "Change password", // Subject line
    html
  })

  console.log("Message sent: %s", info.messageId)

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
}
