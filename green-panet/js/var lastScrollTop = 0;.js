var lastScrollTop = 0;
var isEvent = false;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
  var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    //if (!isEvent) {
    let actual_page = document.querySelector('.about__item.active');
    let next_page = actual_page.nextSibling.nextElementSibling;
    if (next_page) {
      actual_page.classList.remove('active');
      actual_page.classList.remove('animation_show');
      actual_page.classList.add('animation_hide');
      next_page.classList.add('active'); 
      next_page.classList.add('animation_show');
      /*setTimeout(function () {
        console.log('treu');
        window.scrollTo({
          top: 2,
          behavior: 'smooth'
        });
      }, 1000);*/
    }
    console.log('down');
    //isEvent = true;
    //setTimeout(function () {
    //isEvent = false;
    //}, 2000);  
    //}
    // downscroll code
  } else {
    let actual_page = document.querySelector('.about__item.active');
    let previous_page = actual_page.previousSibling.previousElementSibling;
    if (previous_page) {
      actual_page.classList.remove('active');
      actual_page.classList.remove('animation_show');
      actual_page.classList.add('animation_hide');
      previous_page.classList.add('active');
      previous_page.classList.add('animation_show');
      /*setTimeout(function () {
        console.log('treu');
        window.scrollTo({
          top: 2,
          behavior: 'smooth'
        });
      }, 1000);*/
    }
    console.log('up');
  }
  //lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);