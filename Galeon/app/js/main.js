
function clickItemHandler(event) {
  if (!event.target.closest('.click-item')) return;
  let item = event.target.closest('.click-item');

  let obj = {
    'toggle': function (target) {
      target.closest('.click-obj').classList.toggle('active');
    },

    'remove': function (target) {
      target.closest('.click-obj').remove();
    },

    'popup-open': function (target) {
      if (!document.querySelector(target.dataset.label)) return;
      document.querySelector(target.dataset.label).classList.add('active');
    },

    'menu-open': function (target) {
      target.closest('.header__cabinet__menu').classList.toggle('active');
    },

    'popup-close': function (target) {
      if (target.dataset.label) {
        document.querySelector(target.dataset.label).classList.remove('active')
      } else {
        target.closest('.popup_container').classList.remove('active');
      }
    },
  }

  if (item.dataset.action) {
    let actions = item.dataset.action.split(' ');
    actions.forEach(action => obj[action](item))
  } else {
    obj['toggle'](item);
  }
};
document.addEventListener('click', clickItemHandler);

// for header-mob
let header_toggler = document.getElementById('header_burger');
let header_block = document.querySelector('header');

function showHeader() {
  header_block.classList.toggle('active');
  header_block.classList.toggle('default');
}

$(".button_su_inner").mouseenter(function (e) {
  var parentOffset = $(this).offset();

  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({ "left": relX, "top": relY });
  $(this).prev(".su_button_circle").removeClass("desplode-circle");
  $(this).prev(".su_button_circle").addClass("explode-circle");

});

$(".button_su_inner").mouseleave(function (e) {

  var parentOffset = $(this).offset();

  var relX = e.pageX - parentOffset.left;
  var relY = e.pageY - parentOffset.top;
  $(this).prev(".su_button_circle").css({ "left": relX, "top": relY });
  $(this).prev(".su_button_circle").removeClass("explode-circle");
  $(this).prev(".su_button_circle").addClass("desplode-circle");

});

$('.reviews__slide__link').click(function () {
  $('.reviews__slide').removeClass('modal-slide');
  $(this).closest('.reviews__slide').addClass('modal-slide');
  $('.review-popup__name').text($(this).parent().find('.reviews__slide__name').text());
  $('.review-popup__descr').text($(this).parent().find('.reviews__slide__text').text());
});

$('.review-popup__nav .next').click(function () {
  $('.reviews__nav .next').click();
  $('.modal-slide').next().find('.reviews__slide__link').click();
});

$('.review-popup__nav .prev').click(function () {
  $('.reviews__nav .prev').click();
  $('.modal-slide').prev().find('.reviews__slide__link').click();
});

loader();
function loader(_success) {
  var obj = document.querySelector('.preloader'),
    inner = document.querySelector('.preloader_inner'),
    page = document.querySelector('.page');
  obj.classList.add('show');
  page.classList.remove('show');
  var w = 0,
    t = setInterval(function () {
      w = w + 1;
      inner.textContent = w + '%';
      if (w === 100) {
        obj.classList.remove('show');
        page.classList.add('show');
        clearInterval(t);
        w = 0;
        if (_success) {
          return _success();
        }
      }
    }, 20);
}

var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });

new ScrollMagic.Scene({ triggerElement: "#parallax1" })
  .setTween("#parallax1 > div", { y: "80%", ease: Linear.easeNone })
  .addTo(controller);

var galleryThumbs = new Swiper('.product__gallery-thumbs', {
  spaceBetween: 8,
  loop: false,
  freeMode: true,
  slidesPerView: 'auto',
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var galleryTop = new Swiper('.product__gallery-main', {
  spaceBetween: 10,
  loop: false,
  //loopedSlides: 5,
  navigation: {
    prevEl: '.product__gallery__nav .prev',
    nextEl: '.product__gallery__nav .next',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

var swiperReviews = new Swiper('.reviews .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  //loop: true,
  pagination: {
    el: '.reviews .swiper-pagination',
    clickable: true,
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.reviews .next',
    prevEl: '.reviews .prev',
  },
  breakpoints: {
    768: {
      spaceBetween: 24,
    },
  }
});




