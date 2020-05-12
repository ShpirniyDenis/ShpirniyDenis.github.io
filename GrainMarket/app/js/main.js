
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

function showHeader(){
  header_block.classList.toggle('active');
  header_block.classList.toggle('default');
}

header_toggler.addEventListener('click', showHeader);


//for seo-section
let seoToggler = document.querySelector('.seo-toggler');
if(seoToggler){
  seoToggler.addEventListener('click',function(event){
    let block = event.target.closest('.seo');
    block.querySelector('.seo-content').classList.toggle('active');
    this.classList.add('hidden');
    //block.querySelectorAll('.seo_toggler').forEach(item => item.classList.toggle('hidden'));
  });
}

// For tabs
    let tabs = document.querySelectorAll(".tab");
    let tabContent = document.querySelectorAll(".tab-content");
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

// for document-edit
    function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            input.closest('.document-edit').classList.add('bg-active');
            //input.closest('.document-edit').style.background = 'url('+e.target.result +')';
        }
        reader.readAsDataURL(input.files[0]);
    }
    }
// for verification-form
function verificationSuccess(e){
  e.preventDefault();
  document.querySelector('.verification-success').classList.add('active');
  document.querySelector('.cabinet-form__wrapp').classList.add('disabled');
  return false;
}


// for catalog-mobile
let catalog_nav_link = document.querySelectorAll('.catalog__nav li a');
let catalog_nav_manu = document.querySelector('.catalog__nav');
let catalog_nav_toggler = document.querySelector('.catalog__nav__toggler');

const toggle_catalog_menu = function(){
  catalog_nav_manu.classList.toggle('active');
  catalog_nav_toggler.classList.toggle('active');
}

const duplicate_catalog_value = function(){
  catalog_nav_toggler.innerText = this.textContent;
  toggle_catalog_menu();
}

for(i=0; i<catalog_nav_link.length; i++){
  catalog_nav_link[i].addEventListener('click', duplicate_catalog_value);
}

if(catalog_nav_toggler){
  catalog_nav_toggler.addEventListener('click', toggle_catalog_menu);
}










