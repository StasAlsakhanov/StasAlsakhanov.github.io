/* Скролл вверх */
let scrollTop = function () {
    $('.scroll-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.scroll-top').addClass('active');
        }
        else {
            $('.scroll-top').removeClass('active');
        }
    });
};

scrollTop();

/* Popup окно */
var popupLink = function () {
    $('.js-popup-link').magnificPopup({
        showCloseBtn: false,
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade',
        removalDelay: 350,
    });

    $(document).on('click', '.close', function () {
        $.magnificPopup.close()
    })
};

popupLink();

/* Валидация форм */
var formValidate = function () {

    jQuery.validator.addMethod("minlenghtphone", function (value) {
        return value.replace(/\D+/g, '').length > 10;
    });

    $('form').each(function () {
        $(this).on('submit', function () {
            $(this).validate({
                rules: {
                    name: 'required',
                    email: 'required',
                    message: 'required',
                    tel: {
                        required: true,
                        minlenghtphone: true
                    },
                },
                onkeyup: false,
                messages: {
                    name: 'Введите ваше имя',
                    tel: 'Введите ваш телефон',
                    email: 'Введите адрес электронной почты',
                    message: 'Заполните текст сообщения',
                },
            });
            if ($(this).valid()) {
                var wrap = $(this)[0].closest('.popup__sending');
                if (wrap) {
                    $(wrap).siblings('.popup__success').show();
                    $(wrap).hide();
                }
            }
            return false;
        })
    });
};

formValidate();

/* Увеличить и уменьшить значение в поле input */
var counter = function () {
    $('.counter__btn--minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.counter__btn--plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
};

counter();

/* Мобильное меню */
let mobileMenu = function () {
    $(document).on('click', '.menu__toggle', function () {
        $(this).parent().addClass('menu--open');
        $('html').addClass('fixed');
    });
    $(document).on('click', '.close', function () {
        $('.menu').removeClass('menu--open');
        $('html').removeClass('fixed');
    });
    $(document).on('click', '.menu__shadow', function () {
        $('.menu').removeClass('menu--open');
        $('html').removeClass('fixed');
    });
};

mobileMenu();

/* Плавающая шапка */
var header = $('.mobile'),
    scrollPrev = 0;

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass('is-active');
    } else {
        header.removeClass('is-active');
    }
    scrollPrev = scrolled;
});

/* Анимация на чистом js */
const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('is-active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('is-active');
                }
            }

        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

/* Маска телефона */
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

/* Табы-1 */
const tab1 = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item, .tabs-nav__name'),
        tabContent = document.querySelectorAll('.tabs-content__item'),
        tabName;

    tabNav.forEach((item) => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach((item) => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tab) {
        tabContent.forEach((item) => {
            let classList = item.classList;
            classList.contains(tab) ? classList.add('is-active') : classList.remove('is-active');
        });
    }
};

tab1();

/* Табы-2 */
const tab2 = function () {
    let tabNav = document.querySelectorAll('.btn--transparent'),
        tabContent = document.querySelectorAll('.table'),
        tabName;

    tabNav.forEach((item) => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach((item) => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tab) {
        tabContent.forEach((item) => {
            let classList = item.classList;
            classList.contains(tab) ? classList.add('is-active') : classList.remove('is-active');
        });
    }
};

tab2();