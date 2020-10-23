
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

// for scrolling to anchor
document.querySelectorAll('a.lnk').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    $('header').removeClass('active');
    e.preventDefault();
    if (window.screen.width > 992) {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      });
    } else {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

$('.play-video').click(function () {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    $('#video-banner').get(0).play();
    $('.banner').addClass('video-active');
    $('header').addClass('video-active');
  } else {
    $(this).removeClass('active');
    $('#video-banner').get(0).pause();
    $('.banner').removeClass('video-active');
    $('header').removeClass('video-active');
  }
})

$('#video-pause').click(function () {
    $(this).removeClass('active');
    $('#video-banner').get(0).pause();
    $('.banner').removeClass('video-active');
    $('header').removeClass('video-active');
})

$('header .show').click(function () {
  $('header').addClass('active');
});

$('header .close').click(function () {
  $('header').removeClass('active');
});


$('.video-link').click(function (e) {
  e.preventDefault();
  $('header').removeClass('active');
  $('header').addClass('video-play');
  $('#video-banner').get(0).play();
  $('.banner').addClass('video-active');
});

$('header .video-close').click(function () {
  $('header').removeClass('video-play');
  $('#video-banner').get(0).pause();
  $('.banner').removeClass('video-active');
});