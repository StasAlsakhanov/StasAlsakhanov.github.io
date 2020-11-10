"use strict";

$(document).ready(function () {
  svg4everybody({});
  /* Прелоадер */

  window.onload = function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  };
  /* Скролл на верх */


  var scrollTop = function scrollTop() {
    $('.scroll-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    });
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        $('.scroll-top').addClass('active');
      } else {
        $('.scroll-top').removeClass('active');
      }
    });
  };
  /* Плавающая шапка */


  var header = $('.header'),
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
  /* Открытие поиска при клике, очистка поиска и закрытия поиска по боди */

  var openSearchForm = function openSearchForm() {
    $(document).on('click', '.header-top__btn', function () {
      $(this).parent().toggleClass('search--active');
    });
    $(document).on('click', '.search__input', function () {
      $(this).parent().addClass('search__form--active');
    });
    $(document).on('click', '.search__clear', function () {
      $('.search__input').val('');
    });
    $("body").click(function (e) {
      if ($(e.target).closest(".search--active").length === 0 && $('.search--active').length) {
        $(".search").removeClass('search--active');
        $(".search__form").removeClass('search__form--active');
        $('.search__input').val('');
      }
    });
  };
  /* Открытие меню при клике и закрытия по боди */


  var openMenu = function openMenu() {
    $(document).on('click', '.header-bottom__link', function () {
      $(this).parent().toggleClass('header-bottom__item--active');
    });
    $("body").click(function (e) {
      if ($(e.target).closest(".header-bottom__item--active").length === 0 && $('.header-bottom__item--active').length) {
        $(".header-bottom__item").removeClass('header-bottom__item--active');
      }
    });
  };
  /* Открытие мобильного меню при клике и закрытия по крестику и боди */


  var openMobileNav = function openMobileNav() {
    $(document).on('click', '.sandwich', function () {
      $(this).parent().toggleClass('header-mobile__hamburger--active');
      $(this).toggleClass('sandwich--active');
      $('html').addClass('fixed');
    });
    $(document).on('click', '.sandwich', function () {
      if ($('.header-mobile__toggle').hasClass('header-mobile__toggle--active')) {
        $('.header-mobile__toggle').removeClass('header-mobile__toggle--active');
      }
    });
    $(document).on('click', '.header-mobile__shadow', function () {
      $('.sandwich').click();
      $('html').removeClass('fixed');
    });
    $(document).on('click', '.sandwich--active', function () {
      $('html').removeClass('fixed');
    });
  };
  /* Открытие блока с телефонами при клике и закрытия по иконке и боди */


  var openMobilePhone = function openMobilePhone() {
    $(document).on('click', '.header-mobile__phone', function () {
      $(this).parent().toggleClass('header-mobile__toggle--active');
      $('html').addClass('fixed');
    });
    $(document).on('click', '.header-mobile__phone', function () {
      if ($('.header-mobile__hamburger').hasClass('header-mobile__hamburger--active')) {
        $('.header-mobile__hamburger').removeClass('header-mobile__hamburger--active');
      }
    });
    $(document).on('click', '.header-mobile__phone', function () {
      if ($('.sandwich').hasClass('sandwich--active')) {
        $('.sandwich').removeClass('sandwich--active');
      }
    });
    $(document).on('click', '.header-mobile__phone-shadow ', function () {
      $('.header-mobile__phone').click();
      $('html').removeClass('fixed');
    });
    $(document).on('click', '.header-mobile__toggle--active', function () {
      $('html').removeClass('fixed');
    });
  };
  /* Плавное открытие и закрытие подменю и блока с телефонами в меню */


  var openMobileMenu = function openMobileMenu() {
    $(document).on('click', '.header-mobile__link, .header-mobile__contacts-link', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next().slideUp();
      } else {
        $(this).addClass('active');
        $(this).next().slideDown();
      }
    });
  };
  /* Слайдер */


  var slider = function slider() {
    var time = 2;
    var $bar, $slick, isPause, tick, percentTime;
    $slick = $('.js-slider');
    $slick.slick({
      speed: 1200,
      adaptiveHeight: false,
      waitForAnimate: false,
      dots: true,
      prevArrow: '.slider-nav--prev',
      nextArrow: '.slider-nav--next',
      responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false
        }
      }]
    });
    $bar = $('.slider-progress .slider-progress__current');

    function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 20);
    }

    function interval() {
      if (isPause === false) {
        percentTime += 1 / (time + 0.1);
        $bar.css({
          width: percentTime + "%"
        });

        if (percentTime >= 100) {
          $slick.slick('slickNext');
          startProgressbar();
        }
      }
    }

    function resetProgressbar() {
      $bar.css({
        width: 0 + '%'
      });
      clearTimeout(tick);
    }

    startProgressbar();
    $('.slider-nav, .slider-img, .slick-dots').click(function () {
      startProgressbar();
    });
  };
  /* Увеличить и уменьшить значение в поле input (Counter) */


  var counter = function counter() {
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
  /* Маска для ввода телефона */


  jQuery(function ($) {
    $("input[type='tel']").mask("+7(999) 999-99-99");
    $('input, textarea').keyup(function () {
      $(this).removeClass('error');
      $(this).siblings('label').remove();
    });
  });
  /* Popup окно */

  var popupLink = function popupLink() {
    $('.js-popup-link').magnificPopup({
      showCloseBtn: false,
      type: 'inline',
      midClick: true,
      mainClass: 'mfp-fade',
      removalDelay: 350
    });
    $(document).on('click', '.close', function () {
      $.magnificPopup.close();
    });
  };
  /* Валидация */


  var formValidate = function formValidate() {
    jQuery.validator.addMethod("minlenghtphone", function (value) {
      return value.replace(/\D+/g, '').length > 10;
    });
    $('form').each(function () {
      $(this).on('submit', function () {
        $(this).validate({
          rules: {
            name: 'required',
            phone: {
              required: true,
              minlenghtphone: true
            },
            phone_2: {
              required: true,
              minlenghtphone: true
            },
            username: 'required',
            password: 'required',
            confirm_password: 'required',
            email: 'required',
            file: 'required',
            message: 'required',
            message_2: 'required',
            agree: 'required'
          },
          onkeyup: false,
          messages: {
            name: 'Введите ваше имя',
            phone: 'Введите ваш телефон',
            username: 'Введите имя пользователя',
            password: 'Введите пароль',
            confirm_password: 'Введите пароль',
            email: 'Введите адрес электронной почты',
            file: 'Выберите файл',
            message: 'Заполните текст сообщения',
            message_2: 'Заполните адрес доставки',
            agree: 'Согласитесь с нашими условиями'
          }
        });

        if ($(this).valid()) {
          var wrap = $(this)[0].closest('.popup-sending');

          if (wrap) {
            $(wrap).siblings('.popup-success').show();
            $(wrap).hide();
          }
        }

        return false;
      });
    });
  };
  /* Слайдер в карточке товара */


  var productSlider = function productSlider() {
    $('.js-product-slider-main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dots: true,
      infinite: false,
      focusOnSelect: true,
      asNavFor: '.js-product-slider-aside',
      prevArrow: '.product-slider-main__nav--prev',
      nextArrow: '.product-slider-main__nav--next',
      responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false
        }
      }]
    });
    $('.js-product-slider-aside').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: true,
      focusOnSelect: true,
      arrows: false,
      infinite: false,
      asNavFor: '.js-product-slider-main'
    });
  };
  /* Просмотренные товары (Слайдер) */


  var productSliderRow = function productSliderRow() {
    $('.js-product-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
      prevArrow: '.product-slider__nav--prev',
      nextArrow: '.product-slider__nav--next',
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
    }).on('setPosition', function (event, slick) {
      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
  };
  /* Удаление товара из корзины */


  var basketProductRemove = function basketProductRemove() {
    $(document).on('click', '.close', function () {
      if ($(this).closest('.basket-aside').find('.basket-aside__item').length === 1) {
        $(this).closest('.basket-aside').remove();
      }

      $(this).closest('.basket-aside__item').remove();
    });
  };
  /* Прикрепление файла PDF */


  var fileUpload = function fileUpload() {
    $(".file-upload input[type=file]").change(function () {
      var filename = $(this).val().replace(/.*\\/, "");
      $(this).closest('.file-upload').find('.file-upload__text').html(filename);
    });
  };
  /* Выбор доставки */


  var basketDelivery = function basketDelivery() {
    var tabNav = document.querySelectorAll('.form-col__item'),
        tabContent = document.querySelectorAll('.form-col__tab'),
        tabName;
    tabNav.forEach(function (item) {
      item.addEventListener('click', selectTabNav);
    });

    function selectTabNav() {
      tabNav.forEach(function (item) {
        item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }

    function selectTabContent(tab) {
      tabContent.forEach(function (item) {
        var classList = item.classList;
        classList.contains(tab) ? classList.add('is-active') : classList.remove('is-active');
      });
    }
  };
  /* Popup zoom */


  var popupZoom = function popupZoom() {
    $('.popup-zoom').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom',
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300
      }
    });
  };

  scrollTop();
  openSearchForm();
  openMenu();
  openMobileNav();
  openMobilePhone();
  openMobileMenu();
  slider();
  counter();
  popupLink();
  formValidate();
  productSlider();
  productSliderRow();
  basketProductRemove();
  fileUpload();
  basketDelivery();
  popupZoom();
}); // Полифилы
// forEach IE 11

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // closest IE 11


(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})(); // matches IE 11


(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
}