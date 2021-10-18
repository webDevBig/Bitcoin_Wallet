var myPassword = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");


$(".submit").click(function () {

    const isFirstLetterCapital = (password) => password && password.length !== 0 ? password[0] === password[0].toUpperCase() : false;

    const isFirstLetterCapitalConfirm = (confirm) => confirm && confirm.length !== 0 ? confirm[0] === confirm[0].toUpperCase() : false;

    var password = myPassword.value;
    var confirm = confirm_password.value;
    console.log(isFirstLetterCapital(password)); // true
    console.log(isFirstLetterCapitalConfirm(confirm)); // true

    if (password == confirm && isFirstLetterCapital(password) && isFirstLetterCapitalConfirm(confirm)) {

        confirm_password.classList.remove('invalid');
        myPassword.classList.remove('invalid')
        document.querySelector('.sub_mess').classList.remove('show');
        document.querySelector('.pass_mess').classList.remove('show');

        document.location.href = "index.html";


    } else if (password != confirm) {
        confirm_password.classList.add('invalid');
        document.querySelector('.sub_mess').classList.add('show');
    }

    if (!isFirstLetterCapital(password)) {
        myPassword.classList.add('invalid');
        document.querySelector('.pass_mess').classList.add('show');
    } else {
        myPassword.classList.remove('invalid');
        document.querySelector('.pass_mess').classList.remove('show');
    }

    if (!isFirstLetterCapitalConfirm(confirm)) {
        confirm_password.classList.add('invalid');
        document.querySelector('.sub_pass_mess').classList.add('show');
    } else {
        confirm_password.classList.remove('invalid');
        document.querySelector('.sub_pass_mess').classList.remove('show');
    }

})
