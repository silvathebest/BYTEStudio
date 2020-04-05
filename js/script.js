window.onload = function () {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
};

menu.onclick = function () {
    let x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += " responsive";
        $('body').css('overflow','hidden');
    } else {
        x.className = "topnav";
        $('body').css('overflow','auto');
    }
};


$('.calc__site__item').on('click', function () {
    $('.calc__site__item').children().removeClass('check');
    $('.calc__site__item').removeClass('calc__site__item__active');
    if (!$(this).children().hasClass('check')) {
        $(this).children().addClass('check');
        $(this).addClass('calc__site__item__active');
    } else {
        $(this).removeClass('calc__site__item__active');
        $(this).children().removeClass('check');
    }
});

$('#calc_next_view_2').on('click', function () {
    if ($('.calc__site__item').children().hasClass('check')) {
        $('.calc_view_1').addClass('hidden');
        $('.calc_view_2').removeClass('hidden');
        $('#selected__site').text();
    } else {
        func_show_tooltip(obj, true);
    }
});


let timer;

$(".calc__site__item").on({
    mouseenter: function (e) {
        let obj = $(this);
        clearTimeout(timer);
        timer = setTimeout(function () {
            func_show_tooltip(obj, true, e);
        }, 1000);
    },
    mouseleave: function () {
        clearTimeout(timer);
        func_show_tooltip(null, false);
    }
});

//Скролл
$(window).scroll(function (e) {
    let scrollTop = $(window).scrollTop();
    get_position_scroll(scrollTop);
    if (scrollTop > 400) {
        $('nav').fadeIn();
    } else {
        $('nav').fadeOut();
    }
});

function get_position_scroll(scroll){
    $('.navigate_active').removeClass('navigate_active');
    $('.navigation').each(function(id, node){
    let all_offset =  $(node).offset().top + $(node)[0].offsetHeight;
    if(scroll >= $(node).offset().top  && scroll <= all_offset){
       let id_node =  node.getAttribute('id').toString();
       $('.left__navigation_id').each(function(id,node){
        if(node.getAttribute('id').split('_')[1] === id_node){
            node.classList.add('navigate_active');
        }
       });
    }
    });
}
$('.left__navigation_id').click(function(){
    console.log( $('#' + $(this).attr('id').split('_')[1]).offset());
    $('html, body').animate({ 
        scrollTop: $('#' + $(this).attr('id').split('_')[1]).offset().top 
   }, 1000);
});
//

//Функция показа тултипа
function func_show_tooltip(obj, bool,) {
    let tooltip = $('.tooltip');

    var width = tooltip.outerWidth(true);
    if (bool) {
        let html = $('h5:contains(' + obj[0].innerText + ')').next('ul').clone();
        tooltip.css('top', (obj[0].offsetTop + 80) + 'px');
        tooltip.css('left', (obj[0].offsetLeft + width / 2) + 'px');
        var all = $(window).width();
        var left = obj[0].offsetLeft;
        var offset = all - (left + width);
        if (offset < 30) {
            tooltip.css('top', (obj[0].offsetTop + 80) + 'px');
            tooltip.css('left', (obj[0].offsetLeft - width) + 'px');
        }
        if (html) {
            tooltip.html(html);
            tooltip.fadeIn();
        }
    } else {
        tooltip.fadeOut();
    }
}

