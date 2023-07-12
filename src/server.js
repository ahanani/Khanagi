const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const app = express();
var nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 5050;
app.use(cors());

app.post("/sendData", function (req, res) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    secureConnection: false,
    tls: {
      rejectUnauthorized: false,
    },
    auth: {
      user: "khanagifood@gmail.com",
      pass: "bhnmdjwcebtwdurg",
    },
  });

  var mailOptions = {
    from: "Khanagi Food",
    to: `khanagifood@gmail.com, ${req.body.email}`,
    subject: `${req.body.fname} Order Confirmation`,
    html: `
      <div style="color: white; background-color: black; border-radius: 15px; padding: 10px 15px 10px 15px;">
        <h3>Here's a summary of your order</h3>
        <p>${req.body.order}<p>
      <div>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.send().status(404);
    } else {
      res.send().status(200);
    }
  });
});

app.listen(port, () => {
  console.log("Listening to port: " + port);
});
