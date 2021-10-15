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