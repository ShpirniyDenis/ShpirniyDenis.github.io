
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

// For header-language
let languageWrapp = document.querySelector('.version-desc .header__language');
let languageToggle = document.querySelector('.version-desc .header__language__dropdown__toggle');
let languageDropdown = document.querySelector('.version-desc .header__language__dropdown__container')

let toggleDropdownLanguage = function () {
  languageDropdown.classList.toggle('show');
  languageWrapp.classList.toggle('active');
}

languageToggle.addEventListener('click', toggleDropdownLanguage);

$(document).mouseup(function (e) {
  let container = $("version-desc .header__language");
  if (container.has(e.target).length === 0) {
    languageDropdown.classList.remove('show');
    languageWrapp.classList.remove('active');
  }
});

$('.version-mobile #header-toggler').click(function () {
  $('.header__content').addClass('active');
});

$('.version-mobile #header-close').click(function () {
  $('.header__content').removeClass('active');
});

$('.version-mobile .header__menu a').click(function () {
  $('.header__content').removeClass('active');
});