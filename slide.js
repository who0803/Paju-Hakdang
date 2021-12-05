let curPos = 0;
let postion = 0;
let start_x, end_x;

const noticeList = document.querySelector(".notice-list");   // 리스트        
const viewport = document.querySelector(".notice-viewport"); // 뷰포트
let noticeArr;
let noticeCount;
let viewportWidth;
let VIEWPORT_WIDTH;


const preBtn = document.querySelector(".btnContainer .pre");
const nextBtn = document.querySelector(".btnContainer .next");
const moreBtn = document.querySelector(".btnContainer .more");

//console.log(noticeCount);


function createProgram(obj) {
    for (let key in obj) {
        const notice = document.createElement('div');
        notice.classList.add('notice');
        notice.dataset.key = key;

        const noticeImg = document.createElement('div');
        noticeImg.classList.add('notice-img');
        noticeImg.style.backgroundImage = "url(" + obj[key].photoUrls[0] + ")";


        const noticeDesc = document.createElement('div');
        noticeDesc.classList.add('notice-desc');
        
        const noticeDescName = document.createElement('div');
        noticeDescName.classList.add('notice-desc-name');
        noticeDescName.innerHTML = obj[key].title;
        noticeDesc.appendChild(noticeDescName);

        const noticeDescText = document.createElement('div');
        noticeDescText.classList.add('notice-desc-text');
        noticeDescText.innerHTML = obj[key].content;
        noticeDesc.appendChild(noticeDescText);


        notice.appendChild(noticeImg);
        notice.appendChild(noticeDesc);
        noticeList.appendChild(notice);

        notice.addEventListener('click', (e) => {

            console.log(obj[e.currentTarget.dataset.key].title);
            localStorage.setItem('programData', JSON.stringify(obj[e.currentTarget.dataset.key]));
            location.href = 'programDesc.html';
        });

    }
    noticeArr = document.querySelectorAll(".notice");  // 하나 하나의 노티스들의 배열
    noticeCount = Math.ceil(noticeArr.length / 4);   // 슬라이드 길이
}


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

function initfunction() {
    viewportWidth = getStyle(viewport, "width", "width");   // 뷰포트 넓이
    VIEWPORT_WIDTH = parseInt(viewportWidth);   // 뷰포트 넓이
    noticeList.style.width = VIEWPORT_WIDTH * noticeCount + "px";   // 노드리스트 넓이

    noticeList.style.left = postion + "px"; 
}// 여기서 리사이즈될 때마다 레프트 조절

function resize() {
    //console.log('resize');
    viewportWidth = getStyle(viewport, "width", "width");   // 뷰포트 넓이
    VIEWPORT_WIDTH = parseInt(viewportWidth);   // 뷰포트 넓이
    noticeList.style.width = VIEWPORT_WIDTH * noticeCount + "px";   // 노드리스트 넓이

    postion = -(VIEWPORT_WIDTH * curPos);
    //console.log(postion);
    noticeList.style.left = postion + "px"; 

}

// 이전으로
function prev() {

    if (curPos > 0) {
        postion += VIEWPORT_WIDTH; // 뷰포트만큼 이동
        noticeList.style.left = postion + "px";
        noticeList.style.transition = `${0.5}s ease-out`;

        curPos = curPos - 1;    // 현재 포지션이 몇 번째인지
    }

}
// 다음으로
function next() {
    if (curPos < noticeCount - 1) {// 0 1 
        postion -= VIEWPORT_WIDTH;
        noticeList.style.left = postion + "px";
        noticeList.style.transition = `${0.5}s ease-out`;

        curPos = curPos + 1;
    }
}

function touch_start(event) {
    start_x = event.touches[0].pageX
    console.log("누름");
}

function touch_end(event) {
    end_x = event.changedTouches[0].pageX;
    console.log("땜");
    if (start_x > end_x) {
        console.log("next");
        next();
    } else {
        console.log("prev");
        prev();
    }
}
createProgram(programData)
initfunction();
noticeList.addEventListener('touchstart', touch_start);
noticeList.addEventListener('touchend', touch_end);
preBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
window.addEventListener('resize', resize);
moreBtn.addEventListener('click', ()=>{
    location.href = 'programList.html';
});