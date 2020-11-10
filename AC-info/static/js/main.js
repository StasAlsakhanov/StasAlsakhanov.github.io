"use strict";

$(document).ready(function () {
  svg4everybody({});
  /* Прелоадер */

  window.onload = function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
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
  /* Открытие поиска при клике, очистка поиска и закрытия поиска по боди и крестику */


  var headerSearch = function headerSearch() {
    $(document).on('click', '.search__btn', function () {
      $(this).parent().toggleClass('search--active');
    });
    $(document).on('click', '.search__input', function () {
      $(this).parent().addClass('search__form--active');
    });
    $(document).on('click', '.search__close ', function () {
      $(this).closest('.search').removeClass('search--active');
    });
    $("body").click(function (e) {
      if ($(e.target).closest(".search--active").length === 0 && $('.search--active').length) {
        $(".search").removeClass('search--active');
        $(".search__form").removeClass('search__form--active');
      }
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
  /* Слайдер */


  var sliderRow = function sliderRow() {
    $('.slider__inner').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: '.slider__nav--prev',
      nextArrow: '.slider__nav--next',
      responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    }).on('setPosition', function (event, slick) {
      slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });
  };
  /* Удаление товара из корзины */


  var productRemove = function productRemove() {
    $(document).on('click', '.remove', function () {
      if ($(this).closest('.upload__left, .upload-doc__inner').find('.upload__item, .upload-doc__item').length === 1) {
        $(this).closest('.upload__left, .upload-doc__inner').remove();
      }

      $(this).closest('.upload__item, .upload-doc__item').remove();
    });
  };
  /* Слайдер в карточке товара */


  var gallerySlider = function gallerySlider() {
    $('.js-gallery__main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      infinite: false,
      focusOnSelect: true,
      arrows: false,
      asNavFor: '.js-gallery__aside',
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: true
        }
      }]
    });
    $('.js-gallery__aside').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      focusOnSelect: true,
      infinite: false,
      asNavFor: '.js-gallery__main',
      prevArrow: '.gallery__nav--prev',
      nextArrow: '.gallery__nav--next'
    });
  };
  /* Галерея */


  var gallery = function gallery() {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
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
    $(document).on('click', '.remove', function () {
      $.magnificPopup.close();
    });
  };
  /* Яндекс-карта */


  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.794887, 37.712812],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      balloonContent: 'Название компании, <br> Адрес: адрес, <br> Телефон: +7 (981) 123-45-67, <br> График работы: с 9:00 до 18:00'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'static/images/general/marker.png',
      iconImageSize: [37, 50],
      iconImageOffset: [-50, -38]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  });
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
            username: 'required',
            password: 'required',
            confirm_password: 'required',
            email: 'required',
            organization: 'required',
            message: 'required',
            agree: 'required'
          },
          onkeyup: false,
          messages: {
            name: 'Введите ваше имя',
            phone: 'Введите ваш телефон',
            username: 'Введите имя пользователя',
            organization: 'Введите название организации',
            password: 'Введите пароль',
            confirm_password: 'Подтверждение пароля',
            email: 'Введите адрес электронной почты',
            message: 'Заполните текст сообщения',
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
  /* Показать пароль по иконке */


  var toggleShowPassword = function toggleShowPassword() {
    $(document).on('click', '.form__password', function () {
      var inp = $(this).siblings('input');

      if (inp.attr('type') === 'text') {
        inp.attr('type', 'password');
        $(this).addClass('view');
      } else {
        inp.attr('type', 'text');
        $(this).removeClass('view');
      }

      return false;
    });
  };
  /* Фильтр */


  var filterToggle = function filterToggle() {
    $(document).on('click', '.filter__toggle', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).next().slideUp();
      } else {
        $(this).addClass('active');
        $(this).next().slideDown();
      }
    });
  };
  /* Всплывающая шапка при скролле вверх */


  var headerFixed = function headerFixed() {
    var tempScrollTop,
        currentScrollTop = $(window).scrollTop();
    $(window).scroll(function () {
      currentScrollTop = $(window).scrollTop();

      if (currentScrollTop > $('.header-fixed').height()) {
        $('body').addClass('fixed');

        if (tempScrollTop > currentScrollTop) {
          $('.header-fixed').addClass('show');
        } else {
          $('.header-fixed').removeClass('show');
        }
      } else {
        $('body').removeClass('fixed');
        $('.header-fixed').removeClass('show');
      }

      tempScrollTop = currentScrollTop;
    });
  };
  /* Скролл к секции */


  $("[data-scroll]").on("click", function () {
    var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;
    $("html, body").animate({
      scrollTop: blockOffset - 70
    }, 700);
  });
  /* Рейтинг звезд */

  var ratingItemList = document.querySelectorAll('.rating__item');
  var ratingItemArray = Array.prototype.slice.call(ratingItemList);
  ratingItemArray.forEach(function (item) {
    return item.addEventListener('click', function () {
      var itemValue = item.dataset.itemValue;
      item.parentNode.dataset.totalValue = itemValue;
    });
  });
  /* Слайдшоу с таймером */

  $("#slideshow > a:gt(0)").hide();
  setInterval(function () {
    $('#slideshow > a:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slideshow');
  }, 3000);
  $("#slideshow-2 > a:gt(0)").hide();
  setInterval(function () {
    $('#slideshow-2 > a:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slideshow-2');
  }, 3000);
  $("#slideshow-3 > a:gt(0)").hide();
  setInterval(function () {
    $('#slideshow-3 > a:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slideshow-3');
  }, 3000);
  scrollTop();
  headerSearch();
  customSelect();
  sliderRow();
  productRemove();
  gallerySlider();
  gallery();
  popupLink();
  formValidate();
  toggleShowPassword();
  filterToggle();
  headerFixed();
});
/* Маска телефона */

var inputs = document.querySelectorAll('input[type="tel"]');
var im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);
/* Прикрепление файла IMAGE */

document.addEventListener("DOMContentLoaded", init, false);
var AttachmentArray = [];
var arrCounter = 0;
var filesCounterAlertStatus = false;
var ul = document.createElement("ul");
ul.className = "thumb-Images";
ul.id = "imgList";

function init() {
  document.querySelector("#files").addEventListener("change", handleFileSelect, false);
}

function handleFileSelect(e) {
  if (!e.target.files) return;
  var files = e.target.files;

  for (var i = 0, f; f = files[i]; i++) {
    var fileReader = new FileReader();

    fileReader.onload = function (readerEvt) {
      return function (e) {
        ApplyFileValidationRules(readerEvt);
        RenderThumbnail(e, readerEvt);
        FillAttachmentArray(e, readerEvt);
      };
    }(f);

    fileReader.readAsDataURL(f);
  }

  document.getElementById("files").addEventListener("change", handleFileSelect, false);
}

jQuery(function ($) {
  $("div").on("click", ".img-wrap .close", function () {
    var id = $(this).closest(".img-wrap").find("img").data("id");
    var elementPos = AttachmentArray.map(function (x) {
      return x.FileName;
    }).indexOf(id);

    if (elementPos !== -1) {
      AttachmentArray.splice(elementPos, 1);
    }

    $(this).parent().find("img").not().remove();
    $(this).parent().find("div").not().remove();
    $(this).parent().parent().find("div").not().remove();
    var lis = document.querySelectorAll("#imgList li");

    for (var i = 0; li = lis[i]; i++) {
      if (li.innerHTML == "") {
        li.parentNode.removeChild(li);
      }
    }
  });
});

function ApplyFileValidationRules(readerEvt) {
  if (CheckFileType(readerEvt.type) == false) {
    alert("The file (" + readerEvt.name + ") does not match the upload conditions, You can only upload jpg/png/gif files");
    e.preventDefault();
    return;
  }

  if (CheckFileSize(readerEvt.size) == false) {
    alert("The file (" + readerEvt.name + ") does not match the upload conditions, The maximum file size for uploads should not exceed 300 KB");
    e.preventDefault();
    return;
  }

  if (CheckFilesCount(AttachmentArray) == false) {
    if (!filesCounterAlertStatus) {
      filesCounterAlertStatus = true;
      alert("You have added more than 10 files. According to upload conditions you can upload 10 files maximum");
    }

    e.preventDefault();
    return;
  }
}

function CheckFileType(fileType) {
  if (fileType == "image/jpeg") {
    return true;
  } else if (fileType == "image/png") {
    return true;
  } else if (fileType == "image/gif") {
    return true;
  } else {
    return false;
  }

  return true;
}

function CheckFileSize(fileSize) {
  if (fileSize < 300000) {
    return true;
  } else {
    return false;
  }

  return true;
}

function CheckFilesCount(AttachmentArray) {
  var len = 0;

  for (var i = 0; i < AttachmentArray.length; i++) {
    if (AttachmentArray[i] !== undefined) {
      len++;
    }
  }

  if (len > 9) {
    return false;
  } else {
    return true;
  }
}

function RenderThumbnail(e, readerEvt) {
  var li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML = ['<div class="img-wrap"> <span class="close">&times;</span>' + '<img class="thumb" src="', e.target.result, '" title="', escape(readerEvt.name), '" data-id="', readerEvt.name, '"/>' + "</div>"].join("");
  var div = document.createElement("div");
  div.className = "FileNameCaptionStyle";
  li.appendChild(div);
  div.innerHTML = [readerEvt.name].join("");
  document.getElementById("Filelist").insertBefore(ul, null);
}

function FillAttachmentArray(e, readerEvt) {
  AttachmentArray[arrCounter] = {
    AttachmentType: 1,
    ObjectType: 1,
    FileName: readerEvt.name,
    FileDescription: "Attachment",
    NoteText: "",
    MimeType: readerEvt.type,
    Content: e.target.result.split("base64,")[1],
    FileSizeInBytes: readerEvt.size
  };
  arrCounter = arrCounter + 1;
} // Полифилы
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