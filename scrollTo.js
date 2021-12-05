let menuHeight;
let contactMenuList;
let contactMenuListHeight;
let x;
let programTop;
let aboutTop;
let contactTop;
let noticeContainer;
let noticeContainerpadding;
let noticeContainerHeight;
let y;
const menuBtns = document.querySelectorAll(".nav-menu");
const programBtn = menuBtns[0];
const aboutBtn = menuBtns[1];
const contactBtn = menuBtns[2];
const webName = document.querySelector(".web-name");

function getStyle(elem, cssprop, cssprop2) {

    //IE
    if (elem.currentStyle) {
        return elem.currentStyle[cssprop];

        //다른 브라우저    
    } else if (document.defaultView && document.defaultView.getComputedStyle) {
        return document.defaultView.getComputedStyle(elem, null).getPropertyValue(cssprop2);

        //대비책    
    } else {
        return null;
    }
}



function init() {
    menuHeight = document.querySelector(".nav").offsetHeight;

    contactMenuList = document.querySelector(".contact-menu-list");
    contactMenuListpadding = parseInt(getStyle(contactMenuList, 'padding', 'padding'));
    contactMenuListHeight = parseInt(getStyle(contactMenuList, 'height', 'height'));
    x = contactMenuListpadding - contactMenuListHeight * 3;

    noticeContainer = document.querySelector(".notice-container");
    noticeContainerpadding = parseInt(getStyle(noticeContainer, 'padding', 'padding'));
    noticeContainerHeight = parseInt(getStyle(noticeContainer, 'height', 'height'));
    y = noticeContainerpadding + noticeContainerHeight; // 프로그램 컨테이너 크기

    // 이건 현재 스크롤에서 위치를 나타내는 거니까 절대 위치로 해보자
    programTop = document.querySelector(".hide-container").offsetTop;
    aboutTop = programTop + y;
    contactTop = aboutTop + window.innerHeight * 12 + x;
    console.log(programTop);

}

programBtn.addEventListener('click', () => {
    console.log(programTop);
    //console.log(document.querySelector(".hide-container").offsetTop);
    window.scrollTo({ top: programTop - menuHeight, behavior: 'smooth' });
});

aboutBtn.addEventListener('click', () => {
    console.log(aboutTop);
    window.scrollTo({ top: aboutTop + menuHeight * 7, behavior: 'smooth' });
});

contactBtn.addEventListener('click', () => {
    console.log(contactTop);
    window.scrollTo({ top: contactTop, behavior: 'smooth' });
});

webName.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onload = function () {   // 새로고침 시
    setTimeout(function () {
        scrollTo(0, 0);
        init();
    }, 10);

}

window.addEventListener('resize', () => {   // 리사이즈할 때 무조건 맨 위를 기준으로
    init();
});