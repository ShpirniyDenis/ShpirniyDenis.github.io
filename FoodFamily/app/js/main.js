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



$('.in-link, .ord-link').click(function (event) {
    event.preventDefault();
    if ($(this).hasClass('registration')) {
      $('.cabinet-section__container.registration').show();
      $('.cabinet-section').removeClass('v2');
    } else if ($(this).hasClass('login')) {
      $('.cabinet-section__container.login').show();
      $('.cabinet-section').removeClass('v2');
    } else if ($(this).hasClass('profile')) {
      $('.cabinet-section__container.user').show();
      $('.cabinet-section').addClass('v2');
    } else if ($(this).hasClass('history')) {
      $('.cabinet-section__container.history').show();
      $('.cabinet-section').addClass('v2');
    } else if ($(this).hasClass('order')) {
      $('.cabinet-section__container.order').show();
      $('.cabinet-section').addClass('v2');
    }
    $('.cabinet-section').addClass('active').removeClass('default');
    $('body').addClass('show-modal');
  });

  $('.log-modal-close').click(function (event) {
    event.preventDefault();
    $('.cabinet-section').removeClass('active');
    $('body').removeClass('show-modal');
    setTimeout(function () {
      $('.cabinet-section__container').hide();
    }, 1000);
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".cabinet-section,.in-link, .ord-link").length) {
      $('.cabinet-section').removeClass('active');
      $('body').removeClass('show-modal');
      setTimeout(function () {
        $('.cabinet-section__container').hide();
      }, 1000);
    }
  });

  $('.pass-show').click(function(){
    $(this).closest('.form-group').find('input').attr('type', 'text');
  });

  $('.registration .cabinet-section__form').submit(function (event) {
    event.preventDefault();
    $('.cabinet-section__container.registration').slideUp(0);
    $('.cabinet-section__container.address').slideDown(300);
  });

  $('.address .cabinet-section__form').submit(function (event) {
    event.preventDefault();
    $('.cabinet-section__container.address').slideUp(0);
    $('.cabinet-section__container.address-success').slideDown(300);
  });

  $('.uppass .cabinet-section__form').submit(function (event) {
    event.preventDefault();
    $('.cabinet-section__container.uppass').slideUp(0);
    $('.cabinet-section__container.login').slideDown(300);
  });

  $('.login .forgot').click(function () {
    $('.cabinet-section__container.login').slideUp(0);
    $('.cabinet-section__container.uppass').slideDown(300);
  });

  $('.profile .edit, .info__card button').click(function () {
    let currentLink = $(this).attr('link');

    $('.cabinet-section__container.user').slideUp(0);
    $(currentLink).slideDown(300);
    $('.cabinet-section').removeClass('v2');
  });

  $('.edit-back').click(function () {
    $('.cabinet-section__container').slideUp(0);
    $('.cabinet-section__container.user').slideDown(300);
    $('.cabinet-section').addClass('v2');
  });

  $('.edit-name .cabinet-section__form, .edit-location .cabinet-section__form, .edit-phone .cabinet-section__form, .edit-pass .cabinet-section__form, .edit-card .cabinet-section__form').submit(function (event) {
    event.preventDefault();
    $('.cabinet-section__container').slideUp(0);
    $('.cabinet-section__container.user').slideDown(300);
    $('.cabinet-section').addClass('v2');
  });


  // For order-tabs
    let tabs = document.querySelectorAll(".order__nav button");
    let tabContent = document.querySelectorAll(".order__tab");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (item) {
          item.classList.remove("active");
        });
        this.classList.add("active");
        let tabName = this.getAttribute("data-tab");
        selectTabContent(tabName);
      });

      function selectTabContent(tabName) {
        tabContent.forEach(function (item) {
          item.classList.contains(tabName) ?
            item.classList.add("active") :
            item.classList.remove("active");
        });
      }
    });


// for buttons
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