// script.js

function adjustMainMargin() {
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const headerHeight = header.offsetHeight;
    // const extraMargin = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--extra-margin'));

    // 设置初始值，确保触发 transition
    main.style.marginTop = `0px`;
    
    // 使用 setTimeout 以便下一帧设置实际值，触发 transition
    setTimeout(() => {
        main.style.marginTop = `calc(${headerHeight}px)`;
    }, 0);
   
}

// 在 DOM 加載後調整 main 的 margin-top
window.addEventListener('DOMContentLoaded', adjustMainMargin);

// 在窗口大小改變時重新計算 header 的高度
window.addEventListener('resize', adjustMainMargin);

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 400) {
        // 向下滾動且滾動距離超過 100px
        header.style.top = `-${header.offsetHeight}px`; // 隱藏 header
    } else {
        // 向上滾動
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});
