let menu_btn = document.querySelector('.header__burger');
menu_btn.onclick = function() {
  document.querySelector('header').classList.toggle('active');
};

let request_trigger = document.querySelector('.header__invite');
let request_close = document.querySelector('.request-popup__close');
request_trigger.onclick = function() {
  document.querySelector('.request-popup').classList.add('active');
};
request_close.onclick = function() {
  document.querySelector('.request-popup').classList.remove('active');
};


let request_popup = document.querySelector('.request-popup__form');
let request_popup_success = document.querySelector('.success-request');
let request_popup_success_close = document.querySelector('.success-request__close');
request_popup.onsubmit = function(evt) {
  evt.preventDefault();
  document.querySelector('.request-popup').classList.remove('active');
  request_popup_success.classList.add('active');
}

request_popup_success_close.onclick = function() {
  request_popup_success.classList.remove('active');
};