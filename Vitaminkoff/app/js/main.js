

// For popup
function clickItemHandler(event) {
  if (!event.target.closest('.click-item')) return;
  let item = event.target.closest('.click-item');

  let obj = {
    'notification-close': function (target) {
      document.querySelector('.notification').classList.remove('active');
    },

    'notification-show': function (target) {

      if (target.dataset.label) {
        document.querySelector(target.dataset.label).classList.remove('active')
      }else {
        target.closest('.popup_container.active').classList.remove('active');
      }
      document.querySelector('.notification').classList.add('active');
      setTimeout(function(){
        document.querySelector('.notification').classList.remove('active');
      }, 2000);
    },

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
