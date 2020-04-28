
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

// for header
let burgerBtn = document.getElementById('header-burger');
let headerWrapp = document.querySelector('header');
let menuLink = document.querySelectorAll('.header__nav li a');

const menuToggle = function(){
  headerWrapp.classList.toggle('active');
}

burgerBtn.addEventListener('click', menuToggle);

for(i = 0; i < menuLink.length; i++){
  let menuToggleTimeout = function(){
    if(window.screen.width > 992) {
      setTimeout(menuToggle, 1000);
    }else{
      menuToggle();
    }
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

// for statistics
function random(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}
let currentTime = new Date();
let peoplesStart = 1289 + (new Date().getHours()*40);
let peoplesWinner = 118 + (new Date().getHours()*7);
function addFakeStatistics(){
  document.getElementById('peoplesStart').innerHTML = peoplesStart;
  document.getElementById('peoplesWinner').innerHTML = peoplesWinner;
  document.getElementById('peoplesOnline').innerHTML = Number(random(25, 50));
}
addFakeStatistics();

// for forms
function registrationDone(){
  localStorage.setItem('statusUser', 'true');
    setTimeout(function () {
    $('.registration__spinner').slideUp();
    $('.registration__sucess').slideDown();
    }, 100);
}

function checkUserStatus(){
  if (localStorage.getItem("statusUser") !== null) {
    $('.registration__content').remove();
    $('.registration__done').show();
  }
}
checkUserStatus();

$(".registration__form").submit(function () {
  $('.registration__spinner').slideDown();
  $('.registration__content').slideUp();
  let th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", 
    data: th.serialize()
  }).done(function () {
    registrationDone();
  });
  return false;
});


