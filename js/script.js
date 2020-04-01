$('.calc__site__item').on('click',function(){
    $('.calc__site__item').children().removeClass('check');
    if(!$(this).children().hasClass('check')){
        $(this).children().addClass('check');
    }else{
        $(this).children().removeClass('check');
    }
});

$('#calc_next_view_2').on('click',function(){
    if($('.calc__site__item').children().hasClass('check')){
        $('.calc_view_1').addClass('hidden');
        $('.calc_view_2').removeClass('hidden');
    }else{
        console.log(0);
    }
});


let timer;

$(".calc__site__item").on({
    mouseenter: function(e){
        let obj = $(this);
        clearTimeout(timer);
        timer = setTimeout(function(){
            func_show_tooltip(obj,true,e);
        }, 1000);
    },
    mouseleave: function(){
        clearTimeout(timer);
        func_show_tooltip(null,false);
    }
});
//TODO Доделать нормальное появление тултипа
function func_show_tooltip(obj,bool,e){
   let tooltip = $('.tooltip');
   if(bool){
    tooltip.css('top',(obj[0].offsetTop -100) + 'px');
    tooltip.css('left',(obj[0].offsetLeft) + 'px');
    var all = $(window).width();
    var left = tooltip.offset().left;
    var width = tooltip.outerWidth(true);
    var offset = all - (left + width);
    if(offset < 0){
        tooltip.css('top',(obj[0].offsetTop - tooltip[0].offsetHeight) + 'px');
        tooltip.css('left',(obj[0].offsetLeft - 120 ) + 'px');
    }
    tooltip.fadeIn();
   }else{
    tooltip.fadeOut();
   }
    
}