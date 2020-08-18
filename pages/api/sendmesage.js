// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");
const user = process.env.GMAIL_ACCOUNT
const pass = process.env.GMAIL_PASS
export default (req, res) => {
  if (req.method === 'POST') {
    const {
      name,
      message,
      email
    } = req.body
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: user,
          pass: pass,
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '<alexscub1@gmail.com>', // sender address
        to: "alexscub1@gmail.com", // list of receivers
        subject: `Hello, you have new income from ${name}`, // Subject line
        text: message, // plain text body
        html: `<b>${message}. contact email: ${email}</b>`, // html body
      });
    }
    main()
      .then(data => {
        res.statusCode = 200;
        res.json({})
      })
      .catch(err => {
        console.log(err)
        res.statusCode = 400;
        res.json(err)
      });

  } else {
    res.statusCode = 501
    res.json({})
  }
}