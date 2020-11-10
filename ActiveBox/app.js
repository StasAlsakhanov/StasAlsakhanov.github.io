$(function () {

    /* Fixed Header-фиксированная шапка */
    let header = $("#header"); /* let-объявить переменную, header-название переменной */
    let intro = $("#intro");
    let introH = intro.innerHeight(); /* introH-высота нашего intro, scrollPos-позиция нашего скрола */
    let scrollPos = $(window).scrollTop(); /* сколько мы проскролили от верха страницы */
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth scroll-плавная прокрутка */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault(); /* она отменяет стандартное поведение ссылки при клике */

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        console.log(elementOffset);
        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    /* Reviews: https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        /* все время будут скролиться, если элементы заканчиваюся, то они повторяются заново */
        slidesToShow: 1,
        /* сколько мы хотим показывать слайдеров, в данном случае три */
        slidesToScroll: 1,
        /* сколько мы будем скроллить слайдов при клике на скролл  */
        fade: true,
        /* чтобы один исчезал, другой появлялся на его месте */
        arrows: false,
        dots: true
    });

});