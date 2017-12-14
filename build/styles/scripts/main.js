//slick slider
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: false,
        arrows: false,
        
    });
});
// плавный переход

$(document).ready(function(){
    $(".menu").on("click","a", function (e) {
        e.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
