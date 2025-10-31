function sendMail(){
    let parms = {
        email : document.getElementById("email").value,
    }

    emailjs.send("service_bl4dfdm", "template_v3rzy37", parms).then(function(response) {
        alert("Email sent successfully!!!!");
    }, function(error) {
        alert("Failed to send the email to new subscriber.");
    });
}