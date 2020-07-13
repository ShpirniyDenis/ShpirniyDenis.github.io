
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

// For header-services
let servicesToggle = document.querySelector('.header__nav__toggler a');
let servicesDropdown = document.querySelector('.header__nav__dropdown')

let toggleDropdownServices = function (e) {
  e.preventDefault();
  servicesDropdown.classList.toggle('show');
}

if (servicesToggle) {
  servicesToggle.addEventListener('click', toggleDropdownServices);
}

// For header-language
let languageToggle = document.querySelector('.header__language__toggler');
let languageContainer = document.querySelector('.header__language');
let languageDropdown = document.querySelector('.header__language__dropdown')

let toggleDropdownLanguage = function (e) {
  e.preventDefault();
  languageContainer.classList.toggle('active');
  languageDropdown.classList.toggle('show');
}

if (languageToggle) {
  languageToggle.addEventListener('click', toggleDropdownLanguage);
}

// For header-contacts
let contactsToggle = document.querySelector('.header__contacts__toggler');
let contactsContainer = document.querySelector('.header__contacts__content');
let contactsDropdown = document.querySelector('.header__contacts__dropdown')

let toggleDropdownContacts = function (e) {
  e.preventDefault();
  contactsContainer.classList.toggle('active');
  contactsDropdown.classList.toggle('show');
}

if (contactsToggle) {
  contactsToggle.addEventListener('click', toggleDropdownContacts);
}



