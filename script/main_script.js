var show_data = document.querySelectorAll('.data_text');
[].forEach.call(show_data, function (el) {
    el.onclick = function (e) {
        for (var i = 0; i < show_data.length; i++) {
            show_data[i].classList.remove('active');
        }
        el.classList.toggle('active');
    }
});

var choose = document.querySelectorAll('.item');
[].forEach.call(choose, function (el) {
    el.onclick = function (e) {
        for (var i = 0; i < choose.length; i++) {
            choose[i].classList.remove('active');
        }
        el.classList.toggle('active');
    }
});
var open_menu = document.querySelectorAll('.navbar-toggler');
[].forEach.call(open_menu, function (el) {
    el.onclick = function (e) {
        el.classList.toggle('active');
    }
});



$(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    input = $(this).parent().find("input");
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});


$('.history').click(function () {

    $(this).toggleClass('btn_active')

    if (!$('.qr_box').hasClass('hide')) {
        $('.qr_box').toggleClass('hide')
    }
    if (!$(this).hasClass('btn_active')) {
        $('.qr_box').removeClass('hide')
    }

    $('.trade_box').removeClass('show')
    $('.trade').removeClass('btn_active')
})
$('.trade').click(function () {
    $('.trade_box').toggleClass('show')
    $(this).toggleClass('btn_active')


    if (!$('.qr_box').hasClass('hide')) {
        $('.qr_box').toggleClass('hide')
    }
    if (!$(this).hasClass('btn_active')) {
        $('.qr_box').removeClass('hide')
    }

    $('.history').removeClass('btn_active')


})


//mobile
$('.mobile_history').click(function () {
    $(this).toggleClass('btn_active')


    $('.qr_box').addClass('hide')


    $('.trade_box').removeClass('show')
    $('.mobile_trade').removeClass('btn_active')
})

$('.mobile_trade').click(function () {
    $(this).toggleClass('btn_active')


    $('.qr_box').addClass('hide')
    $('.mobile_history').removeClass('btn_active')


    $('.trade_box').toggleClass('show')
})
