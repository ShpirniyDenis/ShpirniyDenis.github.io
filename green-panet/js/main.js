let currentPage = 0;

const pages = document.querySelectorAll(".about__item");

const scrollCB = e => {
  if (e.deltaY > 0) {
    nextPage();
  } else {
    prevPage();
  }
};

const nextPage = () => {
  if (currentPage + 1 < pages.length) {

    window.removeEventListener("wheel", scrollCB);
    pages[currentPage].classList.remove("active", "animation_show");
    pages[currentPage].classList.add("animation_hide");
    currentPage++;
    pages[currentPage].classList.add("active", "animation_show");

    pages[currentPage].addEventListener("animationend", () => {
      window.addEventListener("wheel", scrollCB);
    });
  }
};

const prevPage = () => {
  if (currentPage > 0) {

    window.removeEventListener("wheel", scrollCB);
    pages[currentPage].classList.remove("active", "animation_show");
    pages[currentPage].classList.add("animation_hide");
    currentPage--;
    pages[currentPage].classList.add("active", "animation_show");
    pages[currentPage].classList.remove("animation_hide");

    pages[currentPage].addEventListener("animationend", () => {
      window.addEventListener("wheel", scrollCB);
    });
  }
};

window.addEventListener("wheel", scrollCB);