
// For popup
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


// For reviews-slider
function updSwiperNumericPagination() {
  this.el.querySelector( '.reviews__slider__nav__fractial' )
    .innerHTML = '<span class="count">'+ (this.realIndex + 1) +'</span>/<span class="total">3</span>';
  }

  let mySwiper = new Swiper('.reviews__wrapp', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    spaceBetween: 96,
    //watchSlidesProgress: true,
    //watchSlidesVisibility: true,
    navigation: {
      nextEl: '.reviews__slider__btn.next',
      prevEl: '.reviews__slider__btn.prev',
    },
    pagination: {
      el: '.reviews__pagination',
      clickable: true,
    },
    on: { 
      init: updSwiperNumericPagination,
      slideChange: updSwiperNumericPagination,
    }
});


// For faq-toogler
let faqPreview = document.querySelectorAll('.faq__item');

function showFaq() {
  this.closest('.faq__item').classList.toggle('active');
}

for(i=0; i<faqPreview.length; i++){
  faqPreview[i].addEventListener('click', showFaq);
}

// For scrollUp
let toTop = document.getElementById("scrollUp");

toTop.addEventListener("click", function(){
  scrollToTop(700);
});

function scrollToTop(scrollDuration) {
  var scrollStep = -window.scrollY / (scrollDuration / 15),
    scrollInterval = setInterval(function(){
      if ( window.scrollY != 0 ) {
        window.scrollBy( 0, scrollStep );
      }
      else clearInterval(scrollInterval); 
  },15);
}


// for header
let burgerBtn = document.getElementById('header-burger');
let headerWrapp = document.querySelector('header');
let menuLink = document.querySelectorAll('.header__nav li a');

const menuToggle = function(){
  headerWrapp.classList.toggle('active');
}

burgerBtn.addEventListener('click', menuToggle)

for(i = 0; i < menuLink.length; i++){
  let menuToggleTimeout = function(){
    setTimeout(menuToggle, 1000);
  }
  menuLink[i].addEventListener('click',  menuToggleTimeout);
}


// for scrolling to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        if(window.screen.width > 992) {
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'end'
          });
        }else{
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
    });
});


// for preloader
window.onload = function() {
  document.querySelector('body').classList.add('animation-start');
  setTimeout(function () {
    document.querySelector(".preloader").classList.add('closed');
  }, 3200)
};


(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.animation-container');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop+200 - windowHeight <= 0) {
        element.classList.add('active');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();



