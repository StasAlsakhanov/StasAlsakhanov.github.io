"use strict";

$(document).ready(function () {
  svg4everybody({});
  /* Фиксированное меню в шапке */

  var scrolling = $(".header-bottom, .content");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 139 && scrolling.hasClass("loading")) {
      scrolling.removeClass("loading").addClass("scrolling");
    } else if ($(this).scrollTop() <= 139 && scrolling.hasClass("scrolling")) {
      scrolling.removeClass("scrolling").addClass("loading");
    }
  });
  $('.js-select2').select2({
    placeholder: "Москва",
    maximumSelectionLength: 2,
    language: "ru"
  });
  /* Открытие навигации */

  var navOpen = function navOpen() {
    $(document).on('click', '.header-top__toggle', function () {
      $(this).closest('.header-top__inner').toggleClass('header-top__inner--open');
    });
    $("body").click(function (e) {
      if ($(e.target).closest(".header-top__inner--open").length === 0 && $('.header-top__inner--open').length) {
        $(".header-top__inner").removeClass('header-top__inner--open');
      }
    });
  };
  /* Прелоадер */


  window.onload = function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  };
  /* Slider */


  var introSlider = function introSlider() {
    $('.slider__inner').slick({
      autoplay: true,
      infinite: false,
      autoplaySpeed: 3000,
      speed: 1500,
      dots: true,
      prevArrow: '.intro__prev',
      nextArrow: '.intro__next',
      responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false
        }
      }]
    });
  };
  /* Слайдер (Категории) */


  var categorySlider = function categorySlider() {
    $('.category__inner').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: '.category__prev',
      nextArrow: '.category__next',
      responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false,
          variableWidth: true
        }
      }]
    });
  };
  /* Открытие скрытого нижнего блока по клику */


  var tabsHidden = function tabsHidden() {
    $(document).on('click', '.tabs__toggle', function () {
      $(this).remove();
      $('.tabs__hidden').slideDown();
    });
  };
  /* Скролл до верха */


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
  /* Валидация форм */


  var formValidate = function formValidate() {
    jQuery.validator.addMethod("minlenghtphone", function (value) {
      return value.replace(/\D+/g, '').length > 10;
    });
    $('form').each(function () {
      $(this).on('submit', function () {
        $(this).validate({
          rules: {
            name: 'required',
            email: 'required',
            password: 'required',
            password2: 'required',
            review: 'required',
            tel: {
              required: true,
              minlenghtphone: true
            }
          },
          onkeyup: false,
          messages: {
            name: 'Введите ваше имя',
            tel: 'Введите ваш телефон',
            email: 'Введите ваш e-mail',
            password: 'Введите ваш пароль',
            password2: 'Подтвердите ваш пароль',
            review: 'Введите текст отзыва'
          }
        });

        if ($(this).valid()) {
          var wrap = $(this)[0].closest('.popup__sending');

          if (wrap) {
            $(wrap).siblings('.popup__success').show();
            $(wrap).hide();
          }
        }

        return false;
      });
    });
  };
  /* Перекидка фильтра */


  var headerTopList = function headerTopList() {
    var el = $('.header-top__item');

    if (window.innerWidth < 568) {
      el.appendTo('.nav__list');
    } else {
      el.appendTo('.header-top__list');
    }
  };

  navOpen();
  introSlider();
  categorySlider();
  tabsHidden();
  scrollTop();
  formValidate();
  headerTopList();
});
/* Перекидка текста */

var headerTopList = function headerTopList() {
  var el = $('.header-top__item');

  if (window.innerWidth < 568) {
    el.appendTo('.nav__list');
  } else {
    el.appendTo('.header-top__list');
  }
};

$(window).on('resize', function () {
  headerTopList();
});
/* Табы */

var tab = function tab() {
  var tabNav = document.querySelectorAll('.tabs__btn'),
      tabContent = document.querySelectorAll('.tabs__inner'),
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

tab(); // Полифилы
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