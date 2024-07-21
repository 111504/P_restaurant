function calcHeaderHeight() {
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const headerHeight = header.offsetHeight;

  main.style.marginTop = `${headerHeight}px`;
}

window.addEventListener("DOMContentLoaded", calcHeaderHeight);
window.addEventListener("resize", calcHeaderHeight);

let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 250) {
    // 向下滾動且滾動距離超過 100px
    header.style.top = `-${header.offsetHeight}px`; // 隱藏 header
  } else {
    // 向上滾動
    header.style.top = "0";
  }

  lastScrollTop = scrollTop;
});
