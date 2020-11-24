"use strict";

$(document).ready(function () {
  svg4everybody({});
  /* Бургер */

  var menuDesktop = function menuDesktop() {
    $(document).on('click', '.sandwich', function () {
      $(this).parent().toggleClass('header-main__menu--open');
    });
  };
  /* Меню-Слайдер */


  var menuSlider = function menuSlider() {
    $('.header-bottom__list').slick({
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true,
      prevArrow: '.header-slider__nav--prev',
      nextArrow: '.header-slider__nav--next'
    });
  };
  /* Рекомендация-Слайдер */


  var recommendationSlider = function recommendationSlider() {
    $('.recommendation__body').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          variableWidth: true
        }
      }]
    });
  };
  /* Баннер-Слайдер */


  var BannerSlider = function BannerSlider() {
    $('.slider__inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
    });
  };
  /* Новинки-Слайдер */


  var noveltySlider = function noveltySlider() {
    $('.novelty__main').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          variableWidth: true
        }
      }]
    });
  };
  /* Бренд-Слайдер */


  var brendsSlider = function brendsSlider() {
    $('.brands__list').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: '.brands-slider__nav--prev',
      nextArrow: '.brands-slider__nav--next',
      responsive: [{
        breakpoint: 992,
        settings: {
          arrows: false,
          variableWidth: true
        }
      }]
    });
  };
  /* Акция-Слайдер */


  var actionsSlider = function actionsSlider() {
    $('.actions__body').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          variableWidth: true
        }
      }]
    });
  };
  /* Новости-Слайдер */


  var newsSlider = function newsSlider() {
    $('.news__body').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          variableWidth: true
        }
      }]
    });
  };
  /* Cтатьи-Слайдер */


  var articlesSlider = function articlesSlider() {
    $('.articles__body').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          variableWidth: true
        }
      }]
    });
  };
  /* Меню-Слайдер */


  var mobileMenuSlider = function mobileMenuSlider() {
    $('.subcatalog__wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true
    });
  };
  /* Вы недавно смотрели-Слайдер */


  var lookSlider = function lookSlider() {
    $('.look__body').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          variableWidth: true
        }
      }]
    });
  };
  /* Popup окно */


  var popupLink = function popupLink() {
    $('.popup-link').magnificPopup({
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
            message: 'required',
            agree: 'required',
            tel: {
              required: true,
              minlenghtphone: true
            }
          },
          onkeyup: false,
          messages: {
            name: 'Введите ваше имя',
            tel: 'Введите ваш телефон',
            email: 'Введите адрес электронной почты',
            message: 'Заполните текст сообщения',
            agree: 'Согласитесь с нашими условиями'
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
  /* Селект (выпадашка) */


  var customSelect = function customSelect() {
    $(document).on('click', '.select__header', function () {
      var sel = $(this).parent();

      if (sel.hasClass('select--active')) {
        sel.removeClass('select--active');
      } else {
        $('.select').removeClass('select--active');
        sel.addClass('select--active');
      }
    });
    $(document).on('click', '.select__item', function () {
      var val = $(this).find('.select__value').text(),
          sel = $(this).closest('.select');
      sel.removeClass('select--active');
      sel.find('.select__current').text(val);
    });
    $("body").click(function (e) {
      if ($(e.target).closest(".select--active").length === 0 && $('.select--active').length) {
        $(".select").removeClass('select--active');
      }
    });
  };
  /* Открытие скрытого нижнего блока по клику */


  var aboutBlockHidden = function aboutBlockHidden() {
    $(document).on('click', '.about__toggle', function () {
      $(this).remove();
      $('.about__col--hidden').slideDown();
    });
  };
  /* Вертикальный скролл в селекте */


  $(".select__body").mCustomScrollbar({
    theme: "3d"
  });
  /* Вертикальный скролл в меню */

  $(".submenu").mCustomScrollbar({
    theme: "3d"
  });
  /* Accordion */

  var accordion = function accordion() {
    $('.accordion__header').on('click', function (e) {
      e.preventDefault();

      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next().stop().slideUp(300);
      } else {
        $(this).addClass('active');
        $(this).next().stop().slideDown(300);
      }
    });
  };
  /* Каталог */


  var mobileCatalog = function mobileCatalog() {
    $(document).on('click', '.mobile-menu__text--catalog', function () {
      $(this).parent().toggleClass('mobile-menu__catalog--open');
      $('.catalog__item').removeClass('catalog__item--open');
      $('.subcatalog__item').removeClass('subcatalog__item--open');
      $('.mobile-menu__profile ').removeClass('mobile-menu__profile--open');
      $('.form__line').removeClass('form__line--open');
      $('.profile__item').removeClass('profile__item--open');
      $('.mobile-menu__favorites').removeClass('mobile-menu__favorites--open');
      $('.mobile-menu__basket').removeClass('mobile-menu__basket--open');
      $('.mobile-menu__cart').removeClass('mobile-menu__cart--open');
    });
    $(document).on('click', '.catalog__text', function () {
      $(this).parent().toggleClass('catalog__item--open');
    });
    $(document).on('click', '.subcatalog__text', function () {
      $(this).parent().toggleClass('subcatalog__item--open');
    });
    $(document).on('click', '.subcatalog__back', function () {
      $(this).closest('.catalog__item').removeClass('catalog__item--open');
    });
    $(document).on('click', '.close', function () {
      $('.mobile-menu__catalog').removeClass('mobile-menu__catalog--open');
      $('.catalog__item').removeClass('catalog__item--open');
      $('.subcatalog__item').removeClass('subcatalog__item--open');
    });
    $(document).on('click', '.subsubcatalog__back', function () {
      $(this).closest('.subcatalog__item').removeClass('subcatalog__item--open');
    });
  };
  /* Прoфиль */


  var mobileProfile = function mobileProfile() {
    $(document).on('click', '.mobile-menu__text--profile', function () {
      $(this).parent().toggleClass('mobile-menu__profile--open');
      $('.mobile-menu__catalog').removeClass('mobile-menu__catalog--open');
      $('.catalog__item').removeClass('catalog__item--open');
      $('.subcatalog__item').removeClass('subcatalog__item--open');
      $('.form__line').removeClass('form__line--open');
      $('.profile__item').removeClass('profile__item--open');
      $('.mobile-menu__favorites').removeClass('mobile-menu__favorites--open');
      $('.mobile-menu__basket').removeClass('mobile-menu__basket--open');
      $('.mobile-menu__cart').removeClass('mobile-menu__cart--open');
    });
  };
  /* Кабинет */


  var mobileCabinet = function mobileCabinet() {
    $(document).on('click', '.mobile__toggle', function () {
      $(this).parent().toggleClass('form__line--open');
      $('.mobile-menu__profile').removeClass('mobile-menu__profile--open');
    });
    $(document).on('click', '.profile__text', function () {
      $(this).parent().toggleClass('profile__item--open');
      $('.form__line').removeClass('form__line--open');
    });
  };
  /* Избранное */


  var mobileFavorites = function mobileFavorites() {
    $(document).on('click', '.mobile-menu__text--favorites', function () {
      $(this).parent().toggleClass('mobile-menu__favorites--open');
      $('.mobile-menu__catalog').removeClass('mobile-menu__catalog--open');
      $('.catalog__item').removeClass('catalog__item--open');
      $('.subcatalog__item').removeClass('subcatalog__item--open');
      $('.mobile-menu__profile').removeClass('mobile-menu__profile--open');
      $('.form__line').removeClass('form__line--open');
      $('.profile__item').removeClass('profile__item--open');
      $('.mobile-menu__basket').removeClass('mobile-menu__basket--open');
      $('.mobile-menu__cart').removeClass('mobile-menu__cart--open');
    });
  };
  /* Корзина */


  var mobileBasket = function mobileBasket() {
    $(document).on('click', '.mobile-menu__text--basket', function () {
      $(this).parent().toggleClass('mobile-menu__basket--open');
      $('.mobile-menu__catalog').removeClass('mobile-menu__catalog--open');
      $('.catalog__item').removeClass('catalog__item--open');
      $('.subcatalog__item').removeClass('subcatalog__item--open');
      $('.mobile-menu__profile').removeClass('mobile-menu__profile--open');
      $('.form__line').removeClass('form__line--open');
      $('.profile__item').removeClass('profile__item--open');
      $('.mobile-menu__favorites').removeClass('mobile-menu__favorites--open');
      $('.mobile-menu__cart').removeClass('mobile-menu__cart--open');
    });
  };
  /* Корзина2 */


  var mobileCart = function mobileCart() {
    $(document).on('click', '.mobile-menu__text--cart', function () {
      $(this).parent().toggleClass('mobile-menu__cart--open');
      $('.mobile-menu__catalog').removeClass('mobile-menu__catalog--open');
      $('.catalog__item').removeClass('catalog__item--open');
      $('.subcatalog__item').removeClass('subcatalog__item--open');
      $('.mobile-menu__profile').removeClass('mobile-menu__profile--open');
      $('.form__line').removeClass('form__line--open');
      $('.profile__item').removeClass('profile__item--open');
      $('.mobile-menu__favorites').removeClass('mobile-menu__favorites--open');
      $('.mobile-menu__basket').removeClass('mobile-menu__basket--open');
    });
  };
  /* Удаление товара из корзины */


  var basketProductRemove = function basketProductRemove() {
    $(document).on('click', '.good__close', function () {
      if ($(this).closest('.favorites__body').find('.good').length === 1) {
        $(this).closest('.favorites__body').remove();
      }

      $(this).closest('.good').remove();
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

  var tooltip = function tooltip() {
    $(document).on('click', '.form__icon-wrapper', function () {
      $(this).parent().toggleClass('form__header--open');
    });
    $(document).on('click', '.close--small', function () {
      $('.form__header').removeClass('form__header--open');
    });
  };
  /* Бургер */


  var sandwichToggle = function sandwichToggle() {
    var sandwichElements = document.querySelectorAll('.sandwich');
    sandwichElements.forEach(function (item) {
      item.addEventListener('click', showSandwichTarget);
    });

    function showSandwichTarget() {
      var targetId = this.getAttribute('data-target-id'),
          targetClassToggle = this.getAttribute('data-target-class-toggle');
      this.classList.toggle('is-active');

      if (targetId && targetClassToggle) {
        document.getElementById(targetId).classList.toggle(targetClassToggle);
      }
    }
  };

  menuDesktop();
  menuSlider();
  recommendationSlider();
  BannerSlider();
  noveltySlider();
  brendsSlider();
  actionsSlider();
  newsSlider();
  articlesSlider();
  mobileMenuSlider();
  lookSlider();
  popupLink();
  formValidate();
  aboutBlockHidden();
  sandwichToggle();
  accordion();
  mobileCatalog();
  mobileProfile();
  mobileCabinet();
  mobileFavorites();
  mobileBasket();
  mobileCart();
  basketProductRemove();
  counter();
  tooltip();
  customSelect();
});
/* Маска телефона */

var inputs = document.querySelectorAll('input[type="tel"]');
var im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs); // Полифилы
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