(() => {

    let yOffset = 0; // window.pageYOffset 대신 쓸 변수
    let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
    let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)
    let enterNewScene = false; // 새로운 scene이 시작된 순간 true
    let container = document.querySelector(`.container`);

    const nav = document.querySelector(".nav");
    const video = document.querySelector(".video");
    const noticeContainer = document.querySelector(".notice-container");

    let outsideTop = parseInt(getStyle(nav, "height", "height")) + parseInt(getStyle(video, "height", "height")) + parseInt(getStyle(noticeContainer, "height", "height"))

    //console.log('outsideTop : ' + outsideTop);
    // 에니매이션에 필요한 정보 담고 있는 배열
    const sceneInfo = [ // 객체 4개 : 스크롤 섹션 구간 4개
        // 스크롤 높이, 타이밍에 대한 정보
        // 스크롤에 따라서 에니메이션 처리가 있는 애를 타입을 스티키로 아닌 애를 노말로
        {
            //0
            heightNum: 4, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,    // 각 구간의 스크롤 높이를 갖고 있는 속성 // 어떤 디바이스에서 열지 모르기 때문에 높이를 고정갚으로 갖는게 아니라 스크린의 높이의 몇배수로 해줌
            objs: {  // 여기에 에니메이션에 연관된 html 객체를 모아 놓음
                container: document.querySelector('#scroll-section-0'),
                messageA: document.querySelector('#scroll-section-0 .main-message.a'),
                messageB: document.querySelector('#scroll-section-0 .main-message.b'),
                img: document.querySelector('#scroll-section-0 .sticky-elem-img')
            },
            values: {   // 똑같다
                img_opacity_in: [0, 1, { start: 0, end: 0.2 }],
                img_opacity_out: [1, 0, { start: 0.8, end: 1 }],

                messageA_opacity_in: [0, 1, { start: 0.05, end: 0.25 }],  // 0.1에서 0.2구간에 투명도가 0에서 1로 바뀜
                messageB_opacity_in: [0, 1, { start: 0.55, end: 0.75 }],  // start, end가 에니매이션이 설정되는 구간 // a는 10~20% 구간 b는 30~40%구간

                messageA_translateY_in: [20, 0, { start: 0.05, end: 0.25 }],  // (자기 사이즈의)20% 정도 내렸다가 원래 위치로 되돌아 오게
                messageB_translateY_in: [20, 0, { start: 0.55, end: 0.75 }],  // 타이밍은 opacity와 같게

                messageA_opacity_out: [1, 0, { start: 0.3, end: 0.5 }],  // 사라지는 거는 다음거 시작하기 전에
                messageB_opacity_out: [1, 0, { start: 0.8, end: 1 }],  // 45%지점에서 사라지기 시작해서 50%지점에서 완전 사라짐

                messageA_translateY_out: [0, -20, { start: 0.3, end: 0.5 }],   // 위로 사라지게 해줌 
                messageB_translateY_out: [0, -20, { tart: 0.8, end: 1 }],   // y축으로 이동할 때는 음수가 되야 위로 올라감

            }
        },
        {
            //2
            heightNum: 4, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,    // 각 구간의 스크롤 높이를 갖고 있는 속성 // 어떤 디바이스에서 열지 모르기 때문에 높이를 고정갚으로 갖는게 아니라 스크린의 높이의 몇배수로 해줌
            objs: {
                container: document.querySelector('#scroll-section-1'),
                messageA: document.querySelector('#scroll-section-1 .a'),
                messageB: document.querySelector('#scroll-section-1 .b'),
                img: document.querySelector('#scroll-section-1 .sticky-elem-img')
            },
            values: {   // 똑같다
                img_opacity_in: [0, 1, { start: 0, end: 0.2 }],
                img_opacity_out: [1, 0, { start: 0.8, end: 1 }],

                messageA_opacity_in: [0, 1, { start: 0.05, end: 0.25 }],  // 0.1에서 0.2구간에 투명도가 0에서 1로 바뀜
                messageB_opacity_in: [0, 1, { start: 0.55, end: 0.75 }],  // start, end가 에니매이션이 설정되는 구간 // a는 10~20% 구간 b는 30~40%구간

                messageA_translateY_in: [20, 0, { start: 0.05, end: 0.25 }],  // (자기 사이즈의)20% 정도 내렸다가 원래 위치로 되돌아 오게
                messageB_translateY_in: [20, 0, { start: 0.55, end: 0.75 }],  // 타이밍은 opacity와 같게

                messageA_opacity_out: [1, 0, { start: 0.3, end: 0.5 }],  // 사라지는 거는 다음거 시작하기 전에
                messageB_opacity_out: [1, 0, { start: 0.8, end: 1 }],  // 45%지점에서 사라지기 시작해서 50%지점에서 완전 사라짐

                messageA_translateY_out: [0, -20, { start: 0.3, end: 0.5 }],   // 위로 사라지게 해줌 
                messageB_translateY_out: [0, -20, { tart: 0.8, end: 1 }],   // y축으로 이동할 때는 음수가 되야 위로 올라감

            }
        },
        {
            //3
            heightNum: 4, // 브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight: 0,    // 각 구간의 스크롤 높이를 갖고 있는 속성 // 어떤 디바이스에서 열지 모르기 때문에 높이를 고정갚으로 갖는게 아니라 스크린의 높이의 몇배수로 해줌
            objs: {
                container: document.querySelector('#scroll-section-2'),
                messageA: document.querySelector('#scroll-section-2 .a'),
                messageB: document.querySelector('#scroll-section-2 .b'),
                img: document.querySelector('#scroll-section-2 .sticky-elem-img')
            },
            values: {   // 똑같다
                img_opacity_in: [0, 1, { start: 0, end: 0.2 }],
                img_opacity_out: [1, 0, { start: 0.8, end: 1 }],

                messageA_opacity_in: [0, 1, { start: 0.05, end: 0.25 }],  // 0.1에서 0.2구간에 투명도가 0에서 1로 바뀜
                messageB_opacity_in: [0, 1, { start: 0.55, end: 0.75 }],  // start, end가 에니매이션이 설정되는 구간 // a는 10~20% 구간 b는 30~40%구간

                messageA_translateY_in: [20, 0, { start: 0.05, end: 0.25 }],  // (자기 사이즈의)20% 정도 내렸다가 원래 위치로 되돌아 오게
                messageB_translateY_in: [20, 0, { start: 0.55, end: 0.75 }],  // 타이밍은 opacity와 같게

                messageA_opacity_out: [1, 0, { start: 0.3, end: 0.5 }],  // 사라지는 거는 다음거 시작하기 전에
                messageB_opacity_out: [1, 0, { start: 0.8, end: 1 }],  // 45%지점에서 사라지기 시작해서 50%지점에서 완전 사라짐

                messageA_translateY_out: [0, -20, { start: 0.3, end: 0.5 }],   // 위로 사라지게 해줌 
                messageB_translateY_out: [0, -20, { tart: 0.8, end: 1 }],   // y축으로 이동할 때는 음수가 되야 위로 올라감

            }
        },
    ];
    //console.log(sceneInfo[0].objs.img);
    //console.log(sceneInfo[1].objs.img);
    //console.log(sceneInfo[2].objs.img);

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

    window.addEventListener('resize', function () {
        hideContainer.style.top = parseInt(getStyle(nav, "height", "height")) + parseInt(getStyle(video, "height", "height")) + 'px';
    });




    function setLayout() {
        // 각 스크롤 섹션의 높이 세팅
        for (let i = 0; i < sceneInfo.length; i++) {    // sceneInfo를 돌면서 3구간의 scrollHeight 세팅
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;    // window.innerHeight 브라우저 창의 높이
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;    // 높이 넣어줌
        }

        //setLayout에서도 currentScene을 자동으로 세팅하는 기능 추가
        yOffset = window.pageYOffset;
        let totalScrollHeight = 0;
        //console.log('outsideTop' + outsideTop);
        //console.log('yOffset' + yOffset);
        if (outsideTop <= yOffset) {
            console.log(yOffset);
            for (let i = 0; i < sceneInfo.length; i++) {
                totalScrollHeight += sceneInfo[i].scrollHeight; // 각 씬의 스크롤 높이 더해줌
                if (totalScrollHeight >= yOffset) { // 현재 스크롤 위치보다 크거나 같아졌을 때
                    currentScene = i;   // 현재 i를 커런트 씬으로 설정하고
                    break;  // 반복 멈춤
                }
            }
            //인터렉티브 섹션에 들어와야 설정
            container.setAttribute('id', `show-scene-${currentScene}`); // currentScene의 값에 맞춰서 바디의 id가 세팅됨
        }



        //console.log('currentScene'+currentScene);

        const heightRatio = window.innerHeight / 540;	// 창크기/캔버스의 원래 높이
        // 탑, 레프트 -50%씩 땡김
        //sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;	// 창사이즈 높이에 맞춰서 캔버스 크기가 조정
        //sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
    }


    // values는 값 변화의 시작값과 끝값 배열, currentYOffset는 현재 씬에서 얼마나 스크롤 됐는지
    // 각 섹션마다 얼만큼의 비율로 스크롤되는 지 필요, 현재 스크롤 섹션에서 얼만큼 스크롤됐는지를 비율로 구해야함. 
    // 현 섹션에서 스크롤이 하나도 안됐을 때를 0, 스크롤이 끝났을 때를 1
    function calcValues(values, currentYOffset) {

        let rv;
        // 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;  //  현재 얼만큼 스크롤 했는지 / 현재 씬 전체의 범위

        if (values.length === 3) {  // start,end 객체가 있는 경우
            // start ~ end 사이에 애니메이션 실행
            const partScrollStart = values[2].start * scrollHeight; //시작지점
            const partScrollEnd = values[2].end * scrollHeight; //끝나는 지점
            const partScrollHeight = partScrollEnd - partScrollStart;   //범위

            // 범위 안에 들어오면
            if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) { //(currentYOffset - partScrollStart) / partScrollHeight = partScrollHeight에서 스크롤된 비율
                rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
            } else if (currentYOffset < partScrollStart) {  // 범위 벗어나서 start보다 작으면
                rv = values[0];
            } else if (currentYOffset > partScrollEnd) {    // 범위 벗어나서 end보다 크면
                rv = values[1];
            }
        }
        else {
            // 현재씬의 전체 범위에서 지금 스크롤된 비율을 곱해준 것 = scrollRatio
            rv = scrollRatio * (values[1] - values[0]) + values[0]; // 전체 범위에서(values[1] - values[0]) 비율을 곱해주고 출발값을 더해줌
        }

        return rv;
    }

    // 전체가 아니고 일부분 처리필요!!!
    function playAnimation() {  // 에니매이션 진행되는 거 처리 // 현재 씬에 해당하는 요소들만 에니매이션 처리
        // 비행기가 날라오는 거같은 애니메이션은 여기에 추가하면 됨. 씬인포에 오브젝트를 추가하고 values에 translate의 좌표값을 등록을 해주고
        //console.log('currentScene ' + currentScene);
        const objs = sceneInfo[currentScene].objs;
        const values = sceneInfo[currentScene].values;
        const currentYOffset = yOffset - prevScrollHeight;  // 현재 스크롤 위치에서 이전 씬들의 합을 빼면(yOffset - prevScrollHeight) 현재 씬에서의 위치를 알 수 있다.
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;  // 현재 씬에서의 스크롤 비율
        //console.log(currentScene ,currentYOffset);
        switch (currentScene) {
            case 0:
                // 비디오는 씬이 시작해서 끝날 때까지 쭉 재생됨
                // console.log('0 play');
                //let sequence = Math.round(calcValues(values.imageSequence, currentYOffset));

                if (scrollRatio <= 0.5) {	// 이미지 스무스하게 생기고 사라지게
                    // in
                    objs.img.style.opacity = calcValues(values.img_opacity_in, currentYOffset);	// 스무스하게 나타나게
                } else {
                    //out
                    objs.img.style.opacity = calcValues(values.img_opacity_out, currentYOffset);	// 스무스하게 나타나게
                }

                if (scrollRatio <= 0.275) {  // 0.22를 기준으로 in과 out 기준을 나눔
                    // in
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    // out
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
                }

                if (scrollRatio <= 0.775) {
                    // in
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    // out
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
                }

                break;
            case 1:
                // console.log('2 play');
                //let sequence2 = Math.round(calcValues(values.imageSequence, currentYOffset));
                //objs.context.drawImage(objs.img, 0, 0);


                if (scrollRatio <= 0.5) {	// 이미지 스무스하게 생기고 사라지게
                    // in
                    objs.img.style.opacity = calcValues(values.img_opacity_in, currentYOffset);	// 스무스하게 나타나게
                } else {
                    //out
                    objs.img.style.opacity = calcValues(values.img_opacity_out, currentYOffset);	// 스무스하게 나타나게
                }

                if (scrollRatio <= 0.275) {
                    // in
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    // out
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
                }

                if (scrollRatio <= 0.775) {
                    // in
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
                } else {
                    // out
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
                }
                break;
            case 2:
                //objs.context.drawImage(objs.img, 0, 0);


                if (scrollRatio <= 0.5) {	// 이미지 스무스하게 생기고 사라지게
                    // in
                    objs.img.style.opacity = calcValues(values.img_opacity_in, currentYOffset);	// 스무스하게 나타나게
                } else {
                    //out
                    objs.img.style.opacity = calcValues(values.img_opacity_out, currentYOffset);	// 스무스하게 나타나게
                }

                if (scrollRatio <= 0.275) {
                    // in
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
                } else {
                    // out
                    objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
                    objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
                }

                if (scrollRatio <= 0.775) {
                    // in
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
                } else {
                    // out
                    objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
                    objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
                }
                break;
        }
    }

    //몇번째 섹션을 스크롤 중인지 판단
    function scrollLoop() {
        //console.log(currentScene);
        enterNewScene = false;  // 변수를 하나만들어서 true가 되면 새로운 씬에 들어간 순간이다.
        outsideTop = parseInt(getStyle(nav, "height", "height")) + parseInt(getStyle(video, "height", "height")) + parseInt(getStyle(noticeContainer, "height", "height"));
        prevScrollHeight = outsideTop;
        if (outsideTop <= yOffset && yOffset <= sceneInfo[currentScene].scrollHeight * 3 + prevScrollHeight) {  // 인터렉티브 섹션 안에 들어온 경우

            console.log(`currentScene1 ` + currentScene);
            for (let i = 0; i < currentScene; i++) {	// 전씬들의 높이의 합
                prevScrollHeight += sceneInfo[i].scrollHeight;

            }
            if (outsideTop <= yOffset && yOffset < sceneInfo[currentScene].scrollHeight * 2) {  // 0일 때
                container.setAttribute('id', `show-scene-${currentScene}`);
            }

            


            if ((sceneInfo[currentScene].scrollHeight * 2) + outsideTop <= yOffset && yOffset <= (sceneInfo[currentScene].scrollHeight * 3) + outsideTop) {  // 밖으로 나갔다가 다시 들어왔을 때 2인 경우
                container.setAttribute('id', `show-scene-${currentScene}`);
                
            }
            if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {    //  현재 스크롤 위치가 이전씬의 prevScrollHeight + 현재 씬의 높이보다 크면 씬이 바뀌어야함
                enterNewScene = true;
                currentScene++;
                container.setAttribute('id', `show-scene-${currentScene}`); // currentScene의 값에 맞춰서 바디의 id가 세팅됨
            }
            else if (yOffset < prevScrollHeight) {  // 현재 y값이 이전씬들 높이의 합보다 작으면 
                enterNewScene = true;
                if (currentScene === 0) return;     // 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
                currentScene--;
                container.setAttribute('id', `show-scene-${currentScene}`); // currentScene의 값에 맞춰서 바디의 id가 세팅됨
            }
            if (enterNewScene) return; //씬이 바뀌는 순간 이상한 값이 들어갈 수 있으니 enterNewScene이 트루이면 씬이 바뀌는 순간이니까 함수 종료해서 playAnimation를 실행하지 않음
            playAnimation();
        }
        else {
            container.removeAttribute('id', `show-scene-${currentScene}`);
        }
    }



    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;   // 위치 알 수 있음
        scrollLoop();
    });
    //window.addEventListener('DOMContentLoaded', setLayout);   // 돔구조만 로드가 끝나면 바로 실행. 이미지같은게 로드가 안되더라도
    window.addEventListener('load', () => {	// 로드됐을 때 setLayout 실행
        setLayout();
        //sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.img, 0, 0);	// 로드됐을 때 첫번째 이미지 그리기
    });
    window.addEventListener('resize', setLayout);   // 윈도우창 사이즈 변할 때 setLayout 실행

    
})();// 즉시 호출 함수. 전역변수 사용 X