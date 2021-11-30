(() => {
    const contactMenuList = document.querySelector('.contact-menu-list');// 부모태그
    const reservation = document.querySelector('.reservation');

    const reserveform = document.querySelector('.reserveform');
    const contactName = document.querySelector('.contact-name');
    let loginFlag = false;  // 로그인 유무 플래그
    const progObj = {
        '0': {
            'name': '프로그램0'
        },
        '1': {
            'name': '프로그램1'
        },
        '2': {
            'name': '프로그램2'
        },
        '3': {
            'name': '프로그램3'
        },
        '4': {
            'name': '프로그램4'
        },
        '5': {
            'name': '프로그램5'
        },
        '6': {
            'name': '프로그램6'
        },

    }

    // 현재 활성화된 아이템을 저장
    let currentItem;	// 공유되는 변수

    //리펙토링
    // 활성화
    function activate(elem) {

        elem.classList.add('selected');
        currentItem = elem;	// 열린거 갱신해줘야함
        reserveform.innerHTML = '';
        if (elem.classList.contains('reservation')) {
            createReservation(progObj, loginFlag);

        }
        else if (elem.classList.contains('reservation-check')) {
            if (!loginFlag) reservationCheck(); // 로그인 안했으면
            else {
                reservationInfo();
                //reservationInfo(); // 로그인했으면
            }
        }
        else if (elem.classList.contains('inquiry')) {
            inquire(loginFlag);
        }
    }

    // 비활성화
    function inactivate(elem) {
        elem.classList.remove('selected');
    }

    function menuHandler(e) {	// EventListener로 실행이 되면 자동으로 첫번째 매개변수 자리에는 이벤트라는 특별한 객체 들어옴
        const targetElem = e.target;	// 클릭한 거
        console.log(targetElem);
        if (currentItem) {	// 활성화된 것이 뭐라도 있으면
            inactivate(currentItem);	// 비활성화 시키고
        }


        if (targetElem.classList.contains('contact-menu')) {
            activate(targetElem);
        }
    }

    contactMenuList.addEventListener('click', menuHandler);
    activate(reservation);





    //////////////////////////////


    // 드롭다운 함수
    function onClickSelect(e) { // 눌렀을 때 활성화되있으면 비활성화 활성화 안되있으면 활성화
        const isActive = e.currentTarget.className.indexOf("active") !== -1;
        if (isActive) {
            e.currentTarget.className = "select";
        } else {
            e.currentTarget.className = "select active";
        }
    }

    function onClickOption(e) { // 바꿔줌
        const selectedValue = e.currentTarget.innerHTML;
        document.querySelector(".text").innerHTML = selectedValue;
    }



    function createInput(form, name, type, placeholder, inputFlag) {    // 부모노드, 인풋 네임, 타입, 플레이스홀더, 텍스트에어리아플래그

        const inputName = document.createElement('div');
        inputName.classList.add('input-name');
        inputName.innerHTML = name;

        if (inputFlag) {    // 인풋
            const inputDiv = document.createElement('div');
            inputDiv.classList.add('input-div');

            const input = document.createElement('input');
            input.type = type;
            input.placeholder = placeholder;

            inputDiv.appendChild(inputName);
            inputDiv.appendChild(input);
            form.appendChild(inputDiv);
        }
        else {  // 텍스트에어리아
            const textareaDiv = document.createElement('div');
            textareaDiv.classList.add('textarea-div');

            const textarea = document.createElement('textarea');
            textarea.cols = '30';
            textarea.rows = '10';
            textarea.placeholder = placeholder;

            textareaDiv.appendChild(inputName);
            textareaDiv.appendChild(textarea);
            form.appendChild(textareaDiv);
        }
    }

    function createReservation(obj, loginFlag) {

        contactName.innerHTML = '-예 약-';
        // 프로그램 드롭다운 
        const select = document.createElement('div');
        select.classList.add('select');
        select.addEventListener("click", onClickSelect);  // 누르면 펼쳐짐

        const text = document.createElement('div');
        text.classList.add('text');
        text.innerHTML = "진행 중인 프로그램";

        const optionList = document.createElement('ul');
        optionList.classList.add('option-list');

        for (key in obj) {
            const option = document.createElement('li');
            option.classList.add('option');
            option.innerHTML = obj[key].name;
            option.addEventListener("click", onClickOption);
            optionList.appendChild(option);
        }

        select.appendChild(text);
        select.appendChild(optionList);
        reserveform.appendChild(select);

        if (!loginFlag) {   // 로그인 안되어 있으면
            // 이름
            createInput(reserveform, "이름", "text", "성명을 입력하세요", true);
            // 연락처
            createInput(reserveform, "연락처", "tel", "연락처를 입력하세요", true);
            // 이메일
            createInput(reserveform, "이메일", "email", "이메일을 입력하세요", true);
        }
        // 인원 수
        createInput(reserveform, "인원", "number", "인원 수를 입력하세요", true);
        // 남길 메시지
        createInput(reserveform, "문의사항", "", "남기실 메시지를 입력하세요", false);

        // 버튼
        const submit = document.createElement('button');
        submit.classList.add('submit');
        submit.innerHTML = "완 료";
        reserveform.appendChild(submit);


        // 완료 눌렀을 때 
        submit.addEventListener('click', function () {
            reserveform.innerHTML = '';
            completeReservattion(loginFlag);
        });
    }


    function inquire(loginFlag) {

        contactName.innerHTML = '-문 의-';

        if (!loginFlag) {   // 로그인 안되어 있으면
            // 이름
            createInput(reserveform, "이름", "text", "성명을 입력하세요", true);
            // 연락처
            createInput(reserveform, "연락처", "tel", "연락처를 입력하세요", true);
            // 이메일
            createInput(reserveform, "이메일", "email", "이메일을 입력하세요", true);
        }
        // 남길 메시지
        createInput(reserveform, "문의사항", "", "남기실 메시지를 입력하세요", false);

        // 버튼
        const submit = document.createElement('button');
        submit.classList.add('submit');
        submit.innerHTML = "완 료";
        reserveform.appendChild(submit);
    }

    function reservationCheck() { // 비회원 예약 폼

        contactName.innerHTML = '-예약 확인-';

        createInput(reserveform, "예약번호", "number", "예약번호를 입력하세요", true);


        // 버튼
        const submit = document.createElement('button');
        submit.classList.add('submit');
        submit.innerHTML = "완 료";
        reserveform.appendChild(submit);
    }


    function reservationInfo() { // 예약정보

        contactName.innerHTML = '-예약 정보-';

        const infoDesc = document.createElement('div'); // 인포 설명
        infoDesc.classList.add('info-desc');


        createReservationElem(infoDesc, '프로그램', 'DMZ 평화통일 여행');
        createReservationElem(infoDesc, '날짜', '11월 30일');
        createReservationElem(infoDesc, '이름', '김현진');
        createReservationElem(infoDesc, '인원 수', '2명');

        reserveform.appendChild(infoDesc);
    }

    function createReservationElem(infoDesc, name, desc) {  // 예약 정보 생성
        const infoDescCon = document.createElement('div');
        infoDescCon.classList.add('info-desc-con');


        const infoDescName = document.createElement('div');
        infoDescName.classList.add('info-desc-name');
        infoDescName.innerHTML = name;

        const infoDescEle = document.createElement('div');
        infoDescEle.classList.add('info-desc-ele');
        infoDescEle.innerHTML = desc;

        infoDescCon.appendChild(infoDescName);
        infoDescCon.appendChild(infoDescEle);
        infoDesc.appendChild(infoDescCon);
    }


    function completeReservattion(loginFlag) {
        contactName.innerHTML = '-예약 완료-';

        if (!loginFlag) {   // 로그인 안했으면
            const reservationNumName = document.createElement('div');
            reservationNumName.classList.add('reservation-num-name');
            reservationNumName.innerHTML = '예약 번호';

            const reservationNum = document.createElement('div');
            reservationNum.classList.add('reservation-num');
            reservationNum.innerHTML = '1234';

            reserveform.appendChild(reservationNumName);
            reserveform.appendChild(reservationNum);

        }

    }



})();
