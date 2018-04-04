const nodemailer = require('nodemailer');
console.log('sending email as ' + process.env.GMAIL_HB);

//create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_HB,
        pass: process.env.GMAIL_HB_PW
    }
});

transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

exports.sendContact = function(req, res){
  var data = req.body;
  console.log(data);
  var mailOptions = {
    from: 'hayley@cedarandsagedesign.com',
    to: 'haybagwell@gmail.com',
    subject: 'Message from ' + data.name,
    html: 'Message: ' + data.note + '<br><br><p>Email: ' + data.email + '<br>Name: ' + data.name + '</p>'
  }
  transporter.sendMail(mailOptions, function(err, info){
    if(err){
      console.log(err);
      res.json({message: err.toString()});
    } else {
      res.json(data);
    }
  });

};

exports.sendQuestionaire = function(req, res) {
    var data = req.body;
    console.log(data.q1);
    console.log(data.q2);
    console.log(data.q3);
    console.log(data.q4);
    console.log(data.q5);
    var mailOptions = {
      from: data.email,
      to: 'hayley@cedarandsagedesign.com',
      subject: 'A customer filled out your questioniare!',
      html: `Room to decorate first: ${data.q1}
            <br><br>What images are you drawn to?:  ${data.q2}
            <br><br>Where do you shop for furniture?: ${data.q3}
            <br><br>Where do you like?:  ${data.q4}
            <br><br>Where do you NOT like?: ${data.q5}
            <br><br>Name: ${data.name}
            <br>Phone Number: ${data.phone}
            <br>Email: ${data.email}
            <br>Message: ${data.note}`
    }
    console.log(mailOptions.html);
    transporter.sendMail(mailOptions, function(err, info){
      if(err){
        console.log(err);
        res.json({message: err.toString()});
      } else {
        res.json(data);
      }
    });
};

exports.sendSignup = function(req, res) {
    var data = req.body;
    var mailOptions = {
      from: data.email,
      to: 'hayley@cedarandsagedesign.com',
      subject: `${data.firstName} has signed up on Cedar and Sage`,
      html: `Email: ${data.email}<br>Name: ${data.firstName} ${data.lastName}<br>Add to email list: ${data.include}`
    }
    transporter.sendMail(mailOptions, function(err, info){
      if(err){
        console.log(err);
        res.json({message: err.toString()});
      } else {
        res.json(data);
      }
    });
}
