// for scrolling to anchor
document.querySelectorAll('a.lnk').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

//for menu-catalog

var sliderMenu = new Swiper('.menu__slider', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: false,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  navigation: {
    nextEl: '.menu__slider__btn.next',
    prevEl: '.menu__slider__btn.prev',
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    }
  },
});

$('.menu__nav button').click(function () {
  let productType = $(this).attr('data-type');

  let preloader = '<div class="menu__preloader">'
    + '<span class="spinner"></span>'
    + '</div>';
  
  let slide = '<div class="menu__item swiper-slide">'
    + '<a href="#" class="link"></a>'
    + '<div class="preview">'
    + '<img src="img/menu_it2.png" alt="">'
    + '</div>'
    + '<div class="name">Бургер "Чери" + картофель фри</div>'
    + '<div class="info">'
    + '<div class="price">125 <span>грн</span></div>'
    + '<a href="#">Замовити</a>'
    + '</div>'
    + '</div>';

  $('.menu__nav button').removeClass('active');
  $(this).addClass('active');

  $('.menu__list').html(preloader);
  $('.menu__slider__nav').hide();

  setTimeout(function () {
    for (let i = 0; i < 7; i++) {
      $('.menu__list').append(slide);
    }
    
    sliderMenu.update();
    $('.menu__preloader').hide();
    $('.menu__slider__nav').show();
  }, 2000);

});