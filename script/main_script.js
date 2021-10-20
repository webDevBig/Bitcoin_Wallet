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

$('.send').click(function () {
    $('.send_box').toggleClass('show')
    $(this).toggleClass('btn_active')

    //    if (!$('.qr_box').hasClass('hide')) {
    //        $('.qr_box').toggleClass('hide')
    //    }
    //    if (!$(this).hasClass('btn_active')) {
    //        $('.qr_box').removeClass('hide')
    //    }

    $('.qr_box').addClass('hide')
    $('.function_btn_box').addClass('hide')

    $('.trade_box').removeClass('show')
    $('.history_box').removeClass('show')
    $('.keys_box').removeClass('show')

    $('.trade').removeClass('btn_active')
    $('.history').removeClass('btn_active')
    $('.keys').removeClass('btn_active')
})

$('.send_btn').click(function () {
    $('.send_view').addClass('hide')
    $('.confirm_view').removeClass('hide')
    $('.wallet_box .box').addClass('hide')
    $('.send_box').addClass('send_box_confirm')

    var inputs = document.getElementById('send_to');
    var progressBarOptions = {
        value: 0.75,
        size: 160,
        fill: {
            color: '#AAB8C6'
        }
    }

    if (inputs.value == '') {
        $('.loading_content').removeClass('hide')
        $('#circle-c').circleProgress({
            value: 1,
            size: 160,
            fill: {
                color: '#2FCBAE'
            }
        });
        setTimeout(function () {
            $('.loading_content').addClass('hide')
            $('.failed_img').removeClass('hide')
        }, 1200)

    } else {
        $('.loading_content').removeClass('hide')
        $('#circle-c').circleProgress({
            value: 1,
            size: 160,
            fill: {
                color: '#2FCBAE'
            }
        });
        setTimeout(function () {
            $('.loading_content').addClass('hide')
            $('.confirm_img').removeClass('hide')

        }, 1200)

    }
    inputs.value = ''

})

$('.return_btn').click(function () {
    $('.qr_box').removeClass('hide')
    $('.function_btn_box').removeClass('hide')

    $('.send_box').toggleClass('show')
    $('.send').removeClass('btn_active')

    $('.send_view').removeClass('hide')
    $('.confirm_view').addClass('hide')

    $('.failed_img').addClass('hide')
    $('.confirm_img').addClass('hide')

    $('.wallet_box .box').removeClass('hide')
    $('.send_box').removeClass('send_box_confirm')
    $('.mobile_send').removeClass('btn_active')
})

$('.cancel_btn').click(function () {
    $('.qr_box').removeClass('hide')
    $('.function_btn_box').removeClass('hide')

    $('.send_box').toggleClass('show')
    $('.send').toggleClass('btn_active')
    $('.mobile_send').removeClass('btn_active')
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

    $('.send_box').removeClass('show')
    $('.history_box').removeClass('show')
    $('.keys_box').removeClass('show')

    $('.send').removeClass('btn_active')
    $('.history').removeClass('btn_active')
    $('.keys').removeClass('btn_active')
})

$('.history').click(function () {
    $('.history_box').toggleClass('show')
    $(this).toggleClass('btn_active')

    if (!$('.qr_box').hasClass('hide')) {
        $('.qr_box').toggleClass('hide')
    }
    if (!$(this).hasClass('btn_active')) {
        $('.qr_box').removeClass('hide')
    }

    $('.send_box').removeClass('show')
    $('.trade_box').removeClass('show')
    $('.keys_box').removeClass('show')

    $('.send').removeClass('btn_active')
    $('.trade').removeClass('btn_active')
    $('.keys').removeClass('btn_active')
})

$('.keys').click(function () {
    $('.keys_box').toggleClass('show')
    $(this).toggleClass('btn_active')

    if (!$('.qr_box').hasClass('hide')) {
        $('.qr_box').toggleClass('hide')
    }
    if (!$(this).hasClass('btn_active')) {
        $('.qr_box').removeClass('hide')
    }

    $('.send_box').removeClass('show')
    $('.trade_box').removeClass('show')
    $('.history_box').removeClass('show')

    $('.send').removeClass('btn_active')
    $('.trade').removeClass('btn_active')
    $('.history').removeClass('btn_active')
})





//mobile
$('.mobile_send').click(function () {
    $(this).addClass('btn_active')
    $('.send_box').addClass('show')
    $('.wallet_box .box').removeClass('hide')
    $('.send_view').removeClass('hide')
    $('.confirm_view').addClass('hide')

    $('.qr_box').addClass('hide')

    $('.trade_box').removeClass('.show')
    $('.history_box').removeClass('show')
    $('.keys_box').removeClass('show')

    $('.mobile_trade').removeClass('btn_active')
    $('.mobile_history').removeClass('btn_active')
    $('.mobile_keys').removeClass('btn_active')
    $('.navbar-toggler').toggleClass('active');
})

$('.mobile_trade').click(function () {
    $(this).addClass('btn_active')
    $('.trade_box').addClass('show')
    $('.wallet_box .box').removeClass('hide')


    $('.qr_box').addClass('hide')

    $('.send_box').removeClass('show')
    $('.history_box').removeClass('show')
    $('.keys_box').removeClass('show')

    $('.mobile_send').removeClass('btn_active')
    $('.mobile_history').removeClass('btn_active')
    $('.mobile_keys').removeClass('btn_active')
    $('.navbar-toggler').toggleClass('active');

})

$('.mobile_history').click(function () {
    $(this).addClass('btn_active')
    $('.history_box').addClass('show')
    $('.wallet_box .box').removeClass('hide')


    $('.qr_box').addClass('hide')

    $('.send_box').removeClass('show')
    $('.trade_box').removeClass('show')
    $('.keys_box').removeClass('show')

    $('.mobile_send').removeClass('btn_active')
    $('.mobile_trade').removeClass('btn_active')
    $('.mobile_keys').removeClass('btn_active')
    $('.navbar-toggler').toggleClass('active');
})

$('.mobile_keys').click(function () {
    $(this).addClass('btn_active')
    $('.keys_box').addClass('show')
    $('.wallet_box .box').removeClass('hide')

    $('.qr_box').addClass('hide')

    $('.send_box').removeClass('show')
    $('.trade_box').removeClass('show')
    $('.history_box').removeClass('show')

    $('.mobile_send').removeClass('btn_active')
    $('.mobile_trade').removeClass('btn_active')
    $('.mobile_history').removeClass('btn_active')
    $('.navbar-toggler').toggleClass('active');
})
