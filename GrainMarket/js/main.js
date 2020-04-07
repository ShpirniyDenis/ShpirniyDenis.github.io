// For custom scrollbar
hiddenScrollAside('.seo-section__text');
window.addEventListener('resize', () => hiddenScrollAside('.seo-section__text'));

function hiddenScrollAside(selector) {
  document.querySelectorAll(selector).forEach(box => {

    box.classList.add('scroll-emul_block');
    box.style.height = `${(parseInt(getComputedStyle(box).height))}px`;
    let cont = box.querySelector('.scroll-emul_container');

    if (!box.children[0].classList.contains('scroll-emul_container')) {
      cont = document.createElement('div');
      cont.classList = 'scroll-emul_container';

      let content = document.createElement('div');
      content.classList = 'scroll-emul_content';

      while (box.children.length) {
        content.append(box.children[0])
      }

      let line = document.createElement('div');
      line.classList = 'scroll-emul_line';

      let line_item = document.createElement('div');
      line_item.classList = 'scroll-emul_line_item';

      cont.append(content);
      line.append(line_item);
      cont.append(line);
      box.append(cont);

      let n = content.offsetWidth - content.clientWidth - content.clientLeft;
      if (n <= 0) n = 20;
      content.style.width = `calc(100% + ${n}px)`;

      let contentFullHeight = 0;
      for (let i = 0; i < content.children.length; i++) {
        contentFullHeight += parseFloat(content.children[i].offsetHeight);
      };
      let line_itemHeight = (parseFloat(content.offsetHeight) / contentFullHeight) * 80;
      line.hidden = (line_itemHeight >= 100)
      line_item.style.height = `${line_itemHeight}%`;

      content.addEventListener('scroll', scrollContent);

      function scrollContent(e) {
        line_item.style.top = `${(e.target.scrollTop / contentFullHeight) * 100}%`;
      }
    }
  })
};

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


// For mobile-menu 
function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

let languageSite = 'ru';

let menuImages = [{
  'name': 'about',
  'src': `img/${languageSite}/header-mob-img-about.jpg`
}, {
  'name': 'contacts',
  'src': `img/${languageSite}/header-mob-img-contacts.jpg`
}, {
  'name': 'services',
  'src': `img/${languageSite}/header-mob-img-services.jpg`
}, {
  'name': 'news',
  'src': `img/${languageSite}/header-mob-img-news.jpg`
}, {
  'name': 'home',
  'src': `img/${languageSite}/header-mob-img-home.jpg`
}, {
  'name': 'serviceOne',
  'src': `img/${languageSite}/header-mob-img-serviceOne.jpg`
}, {
  'name': 'serviceTwo',
  'src': `img/${languageSite}/header-mob-img-serviceTwo.jpg`
}, {
  'name': 'serviceThree',
  'src': `img/${languageSite}/header-mob-img-serviceThree.jpg`
}, {
  'name': 'serviceFor',
  'src': `img/${languageSite}/header-mob-img-serviceFor.jpg`
}, {
  'name': 'serviceFive',
  'src': `img/${languageSite}/header-mob-img-serviceFive.jpg`
}];
for (i = 0; i < menuImages.length; i++) {
  let img = document.createElement('img');
  img.setAttribute('src', menuImages[i].src)
};

/*const getTableInfo = (name) => {
  let countryElement = menuImages.find(e => e.name == name);
  //return countryElement.src;
  console.log(countryElement.src);  
};*/


let burger_btn = document.querySelector('.header__burger');
let mainWrapp = document.querySelector('header');
let menu_btn = document.querySelectorAll('.header__menu__item');
let menu_btnActive = document.querySelectorAll('.header__menu__item.active');
let menuImg = document.querySelector('.header-mob-img');
let showFullMenu = function () {
  mainWrapp.classList.add('menu-active');
  if (hasClass(mainWrapp, 'menu-hide')) {
    mainWrapp.classList.remove('menu-hide');
  }
}
let hideFullMenu = function () {
  mainWrapp.classList.add('menu-hide');
  if (hasClass(mainWrapp, 'menu-active')) {
    mainWrapp.classList.remove('menu-active');
  }
}

let checkFullMenu = function () {
  if (document.querySelector('header.menu-active')) {
    hideFullMenu();
  } else {
    showFullMenu();
  }
}
burger_btn.addEventListener('click', checkFullMenu);

const show_newPage = function (element) {
  element.preventDefault();
  document.querySelector('.header__menu__item.active').classList.remove('active');
  this.classList.add('active');
  let newImgSrc = this.getAttribute('data-img-src');

  menuImg.style.backgroundImage = `url('img/${languageSite}/header-mob-img-${newImgSrc}.jpg')`;
  hideFullMenu();
  let addLocatinHref = function () {
    document.location.replace(document.querySelector('.header__menu__item.active a').getAttribute('href'));
  };
  setTimeout(addLocatinHref, 600);
}

if (document.body.clientWidth < 768) {
  for (i = 0; i < menu_btn.length; i++) {
    menu_btn[i].addEventListener('click', show_newPage);
  }
}

window.onload = function () {
  let actualImgSrc = document.querySelector('.header__menu__item.active').getAttribute('data-img-src');
  menuImg.style.backgroundImage = `url('img/${languageSite}/header-mob-img-${actualImgSrc}.jpg')`;
};