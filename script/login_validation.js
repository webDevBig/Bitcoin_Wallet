var myPassword = document.getElementById("password");
var myEmail = document.getElementById("email");


$(".submit").click(function () {

    var valid_pass = 'Admin';
    var valid_email = 'admin@gmail.com';
    var password = myPassword.value;
    var email = myEmail.value;

    if (password == valid_pass) {
        myPassword.classList.remove('invalid');
        document.querySelector('.pass_mess').classList.remove('show');
    } else {
        myPassword.classList.add('invalid');
        document.querySelector('.pass_mess').classList.add('show');
    }


    if (email == valid_email) {
        myEmail.classList.remove('invalid');
        document.querySelector('.email_mess').classList.remove('show');
    } else {
        myEmail.classList.add('invalid');
        document.querySelector('.email_mess').classList.add('show');
    }
    
    if (password == valid_pass && email == valid_email)
        {
             document.location.href = "index.html";
        }


})
