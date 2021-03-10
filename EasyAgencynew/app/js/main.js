let menu_btn = document.querySelector('.header__burger');
menu_btn.onclick = function() {
  document.querySelector('header').classList.toggle('active');
};