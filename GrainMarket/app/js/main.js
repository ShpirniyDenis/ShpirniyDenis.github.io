
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

