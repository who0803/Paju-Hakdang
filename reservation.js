const contactMenu = document.querySelector('.contact-menu-list');// 부모태그
const reservation = document.querySelector('.reservation');

const reserveform = document.querySelector('.reserveform');
const contactName = document.querySelector('.contact-name');
let loginFlag;  // 로그인 유무 플래그
let userData;   // 유저객체

let regName = /^[가-힣]+$/;
let regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
let regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
let regHeadCount = /^[1-9][0-9]*$/;


//로그인 유무
/*
const userDataInput = document.getElementById("myUserData")
if(userDataInput){
    let userData=JSON.parse(userDataInput.value)
    console.log(userData)
}
*/
const userDataInput = true;
if (userDataInput) {  // 로그인돼있으면 
    userData = {    // 유저 데이터
        "_id": "61a5b12c48c446eada0e92e0",
        "username": "james",
        "realname": "정민석",
        "email": "jms@naver.com",
        "phoneNumber": "01082933060",
        "createdAt": "2021-11-30 14:05",
        "isAdmin": false,
        "programList": [],
        "__v": 0
    }
    loginFlag = true;  // 로그인 유무 플래그
}
else {
    loginFlag = false;  // 로그인 유무 플래그
}

//프로그램명 받아오기
/*
const programInputHidden = document.getElementById("programData")
const programData=JSON.parse(programInputHidden.value)
*/
const programData = [
    {
        "_id": "61a5795f83c48ed26cc09875",
        "category": "trip",
        "title": "프로그램0",
        "createdAt": "2021-11-30 10:05",
        "photoUrls": [
            "img/lightning.jpg"
        ],
        "content": "낻용 낻용 낻용낻용낻용낻용 낻용낻용낻용 낻용낻용 낻용낻용낻용 낻용낻용낻용 낻용낻용 낻용낻용 낻용낻용",
        "date": "2021-11-26",
        "__v": 0
    },
    {
        "_id": "61a5794b83c48ed26cc09871",
        "category": "trip",
        "title": "프로그램1",
        "createdAt": "2021-11-30 10:05",
        "photoUrls": [
            "img/lightning.jpg"
        ],
        "content": "내용내용 내용내용 내용내용 내용내용 내용내용 내용내용내용내용 내용내용내용내용 내용내용 내용내용",
        "date": "2021-12-03",
        "__v": 0
    },
    {
        "_id": "61a5795f83c48ed26cc09875",
        "category": "trip",
        "title": "프로그램2",
        "createdAt": "2021-11-30 10:05",
        "photoUrls": [
            "img/lightning.jpg"
        ],
        "content": "내용내용 내용내용내용내용 내용내용 내용내용내용내용내용내용내용내용 내용내용내용내용",
        "date": "2021-11-26",
        "__v": 0
    },
    {
        "_id": "61a5795f83c48ed26cc09875",
        "category": "trip",
        "title": "프로그램3",
        "createdAt": "2021-11-30 10:05",
        "photoUrls": [
            "img/lightning.jpg"
        ],
        "content": "낻용 낻용낻용 낻용낻용낻용 낻용낻용 낻용낻용 낻용낻용낻용낻용낻용",
        "date": "2021-11-26",
        "__v": 0
    },
    {
        "_id": "61a5795f83c48ed26cc09875",
        "category": "trip",
        "title": "프로그램4",
        "createdAt": "2021-11-30 10:05",
        "photoUrls": [
            "img/lightning.jpg"
        ],
        "content": "낻용낻용 낻용낻용 낻용낻용낻용 낻용낻용 낻용낻용 낻용낻용낻용낻용낻용 낻용 낻용",
        "date": "2021-11-26",
        "__v": 0
    },
    {
        "_id": "61a5795f83c48ed26cc09875",
        "category": "trip",
        "title": "프로그램5",
        "createdAt": "2021-11-30 10:05",
        "photoUrls": [
            "img/lightning.jpg"
        ],
        "content": "낻용 낻용 낻용낻용낻용낻용 낻용낻용낻용 낻용낻용 낻용낻용낻용 낻용낻용낻용 낻용낻용 낻용낻용 낻용낻용",
        "date": "2021-11-26",
        "__v": 0
    },
    {
        "_id": "61a5794b83c48ed26cc09871",
        "category": "trip",
        "title": "프로그램6",
        "createdAt": "2021-11-30 10:05",
        "photoUrls": [
            "img/lightning.jpg"
        ],
        "content": "내용내용 내용내용 내용내용 내용내용 내용내용 내용내용내용내용 내용내용내용내용 내용내용 내용내용",
        "date": "2021-12-03",
        "__v": 0
    },
    {
        "_id": "61a5795f83c48ed26cc09875",
        "category": "trip",
        "title": "프로그램7",
        "createdAt": "2021-11-30 10:05",
        "photoUrls": [
            "img/lightning.jpg"
        ],
        "content": "내용내용 내용내용내용내용 내용내용 내용내용내용내용내용내용내용내용 내용내용내용내용",
        "date": "2021-11-26",
        "__v": 0
    },
    {
        "_id": "61a5795f83c48ed26cc09875",
        "category": "trip",
        "title": "프로그램8",
        "createdAt": "2021-11-30 10:05",
        "photoUrls": [
            "img/lightning.jpg"
        ],
        "content": "낻용 낻용낻용 낻용낻용낻용 낻용낻용 낻용낻용 낻용낻용낻용낻용낻용",
        "date": "2021-11-26",
        "__v": 0
    },
    {
        "_id": "61a5795f83c48ed26cc09875",
        "category": "trip",
        "title": "프로그램9",
        "createdAt": "2021-11-30 10:05",
        "photoUrls": [
            "img/lightning.jpg"
        ],
        "content": "낻용낻용 낻용낻용 낻용낻용낻용 낻용낻용 낻용낻용 낻용낻용낻용낻용낻용 낻용 낻용",
        "date": "2021-11-26",
        "__v": 0
    },
]



// 현재 활성화된 아이템을 저장
let currentItem;	// 공유되는 변수

//리펙토링
// 활성화
function activate(elem) {

    elem.classList.add('selected');
    currentItem = elem;	// 열린거 갱신해줘야함
    reserveform.innerHTML = '';
    if (elem.classList.contains('reservation')) {   // 예약 nav 누르면
        createReservation(programData, loginFlag);

    }
    else if (elem.classList.contains('reservation-check')) {    // 예약확인 nav 누르면

        if (!loginFlag) reservationCheck(); // 로그인 안했으면 예약 번호 입력하고 정보 나옴
        else {  // 로그인했으면 예약 정보 바로 나옴.
            // 여기에서 회원 예약확인 api 적용
            /*
            fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "reservationCode": null,
                    "userId": userData._id,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    reserveform.innerHTML = '';
                    reservationInfo(data, loginFlag);
                })*/


            const memberReservationCheckRequest = { // 이렇게 보낸다 가정
                "reservationCode": null,
                "userId": userData._id,
            }

            //서버에서 받는 값
            const memberReservationCheckResponse = {
                "reservationData": [
                    {
                        "_id": "61a7ada08b1bbae38373beec",
                        "name": "송동호",
                        "email": "adf234@naver.com",
                        "phoneNumber": "01012345678",
                        "peopleNum": 5,
                        "message": "프로그램이 재미있으면 좋겠어요!",
                        "program": {
                            "_id": "61a7ac79105d5b6e70baf3c6",
                            "category": "notice",
                            "title": "제목제목",
                            "createdAt": "2021-12-02 02:09",
                            "photoUrls": [],
                            "content": "내용내용",
                            "date": "2021-12-15",
                            "reserveList": [
                                "61a7ada08b1bbae38373beec",
                                "61a7ae058b1bbae38373bef2",
                                "61a7ae868b1bbae38373bef7"
                            ],
                            "__v": 3
                        },
                        "reservationCode": "adf23416383789120965678",
                        "userId": "61a7a5c44577d6f168cda977",
                        "__v": 0
                    },
                    {
                        "_id": "61a7ae058b1bbae38373bef2",
                        "name": "송동호",
                        "email": "adf234@naver.com",
                        "phoneNumber": "01012345678",
                        "peopleNum": 5,
                        "message": "프로그램이 재미있으면 좋겠어요!",
                        "program": {
                            "_id": "61a7ac79105d5b6e70baf3c6",
                            "category": "notice",
                            "title": "제목제목",
                            "createdAt": "2021-12-02 02:09",
                            "photoUrls": [],
                            "content": "내용내용",
                            "date": "2021-12-15",
                            "reserveList": [
                                "61a7ada08b1bbae38373beec",
                                "61a7ae058b1bbae38373bef2",
                                "61a7ae868b1bbae38373bef7"
                            ],
                            "__v": 3
                        },
                        "reservationCode": "adf23416383790130275678",
                        "userId": "61a7a5c44577d6f168cda977",
                        "__v": 0
                    }
                ],
                "status": 200
            }
            reserveform.innerHTML = '';
            reservationInfo(memberReservationCheckResponse, loginFlag);
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



    if (targetElem.classList.contains('contact-menu')) {
        inactivate(currentItem);	// 비활성화 시키고
        activate(targetElem);
    }
}

contactMenu.addEventListener('click', menuHandler);
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



function createInput(form, name, type, placeholder, className, inputFlag) {    // 부모노드, 인풋 네임, 타입, 플레이스홀더, 텍스트에어리아플래그

    const inputName = document.createElement('div');
    inputName.classList.add('input-name');
    inputName.innerHTML = name;

    if (inputFlag) {    // 인풋
        const inputDiv = document.createElement('div');
        inputDiv.classList.add('input-div');

        const input = document.createElement('input');
        input.type = type;
        input.placeholder = placeholder;
        input.classList.add(className);

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
        textarea.classList.add(className);

        textareaDiv.appendChild(inputName);
        textareaDiv.appendChild(textarea);
        form.appendChild(textareaDiv);
    }
}

function createReservation(objArr, loginFlag) {

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


    for (let i = 0; i < objArr.length; i++) {
        const option = document.createElement('li');
        option.classList.add('option');
        option.innerHTML = objArr[i].title;
        option.addEventListener("click", onClickOption);
        optionList.appendChild(option);
    }

    select.appendChild(text);
    select.appendChild(optionList);
    reserveform.appendChild(select);

    if (!loginFlag) {   // 로그인 안되어 있으면 개인정보 입력받음
        // 이름
        createInput(reserveform, "이름", "text", "성명을 입력하세요", "userName", true);
        // 연락처
        createInput(reserveform, "연락처", "tel", "연락처를 입력하세요", "userPhoneNum", true);
        // 이메일
        createInput(reserveform, "이메일", "email", "이메일을 입력하세요", "userEmail", true);
    }
    // 인원 수
    createInput(reserveform, "인원", "text", "인원 수를 입력하세요", "numOfUser", true);
    // 남길 메시지
    createInput(reserveform, "문의사항", "", "남기실 메시지를 입력하세요 (선택사항)", "inquiryText", false);

    // 에러메시지
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('errorMessage');
    reserveform.appendChild(errorMessage);
    // 버튼
    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.innerHTML = "완 료";
    reserveform.appendChild(submit);


    // 완료 눌렀을 때 
    submit.addEventListener('click', function () {
        const numOfUser = document.querySelector('.numOfUser');
        const inquiryText = document.querySelector('.inquiryText');
        const username = document.querySelector('.userName');
        const userPhoneNum = document.querySelector('.userPhoneNum');
        const userEmail = document.querySelector('.userEmail');
        let interimResponsejson;
        //console.log('inquiryText.value ' + inquiryText);


        function regCheck(flag) {
            console.log(regHeadCount.test(numOfUser.value));
            // 비회원
            if (text.textContent == '진행 중인 프로그램') {
                errorMessage.innerHTML = '프로그램을 선택해주세요';
                errorMessage.style.display = 'block';
                return false;
            }
            if (!flag) { // 비회원이면 
                if (username.value === '') {
                    errorMessage.innerHTML = '이름을 입력해주세요';
                    errorMessage.style.display = 'block';
                    return false;
                }
                if (userPhoneNum.value === '') {
                    errorMessage.innerHTML = '연락처를 입력해주세요';
                    errorMessage.style.display = 'block';
                    return false;
                }
                if (userEmail.value === '') {
                    errorMessage.innerHTML = '이메일을 입력해주세요';
                    errorMessage.style.display = 'block';
                    return false;
                }
            }

            if (numOfUser.value === '') {
                errorMessage.innerHTML = '인원수를 입력해주세요';
                errorMessage.style.display = 'block';
                return false;
            }
            if (!flag) {    // 비회원이면 
                if (!regName.test(username.value)) {
                    errorMessage.innerHTML = '이름을 한글로 입력해주세요';
                    errorMessage.style.display = 'block';
                    return false;
                }
                if (!regPhone.test(userPhoneNum.value)) {
                    errorMessage.innerHTML = '정확한 연락처를 입력해주세요';
                    errorMessage.style.display = 'block';
                    return false;
                }
                if (!regEmail.test(userEmail.value)) {
                    errorMessage.innerHTML = '형식에 맞는 이메일을 입력해주세요';
                    errorMessage.style.display = 'block';
                    return false;
                }
            }
            if (!regHeadCount.test(numOfUser.value)) {
                console.log('!!!!!!!!!!!!!!!!!');
                errorMessage.innerHTML = '숫자를 입력해주세요';
                errorMessage.style.display = 'block';
                return false;
            }
            return true;
        }



        if (!loginFlag) {   // 로그인 안되어 있으면   
            if (regCheck(false)) {
                // 프로그램 예약 api 비회원일 때 
                /*
                fetch("", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "userId": null, // 이따가 아이디하고 나서 적용
                        "programName": text.textContent,    // 여기도 선택해야만 할 수 있게 수정
                        "username": username.value,
                        "phoneNumber": userPhoneNum.value,
                        "email": userEmail.value,
                        "peopleNum": numOfUser.value,
                        "message": inquiryText.value
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.status == 500) {
                            errorMessage.innerHTML = '다시 입력해주세요';
                            errorMessage.style.display = 'block';
                        }
                        else {
                            reserveform.innerHTML = '';
                            completeReservattion(data, loginFlag);   // 받은 json 넘김
                        }
                    })*/


                const interimRequestjson = {   // 이런 식으로 보냄
                    "userId": null, // 이따가 아이디하고 나서 적용
                    "programName": text.textContent,    // 여기도 선택해야만 할 수 있게 수정
                    "username": username.value,
                    "phoneNumber": userPhoneNum.value,
                    "email": userEmail.value,
                    "peopleNum": numOfUser.value,
                    "message": inquiryText.value
                }

                interimResponsejson = {   // 받아온 json라고 가정
                    "reservationData": {
                        "name": "송동호",
                        "email": "adf234@naver.com",
                        "phoneNumber": "01012345678",
                        "peopleNum": 5,
                        "message": "프로그램이 재미있으면 좋겠어요!",
                        "program": "61a5794b83c48ed26cc09871",
                        "reservationCode": "adf23416383770097065678",
                        "_id": "61a7a631cd89518dadd1973f",
                        "__v": 0
                    },
                    "status": 200,
                    "user": null
                }

                if (interimResponsejson.status == 500) {
                    errorMessage.innerHTML = '다시 입력해주세요';
                    errorMessage.style.display = 'block';
                }
                else {
                    reserveform.innerHTML = '';
                    completeReservattion(interimResponsejson, loginFlag);   // 받은 json 넘김
                }

            }
        }
        else {  // 로그인
            if (regCheck(true)) {
                // 프로그램 예약 api 로그인되어 있을 때 
                /*
                fetch("", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "userId": userData._id,
                        "programName": text.textContent,
                        "username": userData.username,
                        "phoneNumber": userData.phoneNumber,
                        "email": userData.phoneNumber,
                        "peopleNum": numOfUser.value,
                        "message": inquiryText.value,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.status == 500) {
                            errorMessage.innerHTML = '다시 입력해주세요';
                            errorMessage.style.display = 'block';
                        }
                        else {
                            reserveform.innerHTML = '';
                            completeReservattion(data, loginFlag);   // 받은 json 넘김
                        }
                    })*/

                const interimRequestjson = {    //서버로 넘어오는 json 예시 
                    "userId": userData._id,
                    "programName": text.textContent,
                    "username": userData.username,
                    "phoneNumber": userData.phoneNumber,
                    "email": userData.phoneNumber,
                    "peopleNum": numOfUser.value,
                    "message": inquiryText.value,
                }

                interimResponsejson = {   //서버에서 response
                    "reservationData": {
                        "name": "송동호",
                        "email": "adf234@naver.com",
                        "phoneNumber": "01012345678",
                        "peopleNum": 5,
                        "message": "프로그램이 재미있으면 좋겠어요!",
                        "program": "61a5794b83c48ed26cc09871",
                        "reservationCode": "adf23416383770097065678",
                        "_id": "61a7a631cd89518dadd1973f",
                        "__v": 0
                    },
                    "status": 200,
                    "user": null
                }

                if (interimResponsejson.status == 500) {
                    errorMessage.innerHTML = '다시 입력해주세요';
                    errorMessage.style.display = 'block';
                }
                else {
                    reserveform.innerHTML = '';
                    completeReservattion(interimResponsejson, loginFlag);   // 받은 json 넘김
                }
            }
        }

    });
}


function inquire(loginFlag) {

    contactName.innerHTML = '-문 의-';

    if (!loginFlag) {   // 로그인 안되어 있으면
        // 이름
        createInput(reserveform, "이름", "text", "성명을 입력하세요", "userName", true);
        // 연락처
        createInput(reserveform, "연락처", "tel", "연락처를 입력하세요", "userPhoneNum", true);
        // 이메일
        createInput(reserveform, "이메일", "email", "이메일을 입력하세요", "userEmail", true);
    }
    // 남길 메시지
    createInput(reserveform, "문의사항", "", "남기실 메시지를 입력하세요", "inquiryText", false);

    // 에러메시지
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('errorMessage');
    reserveform.appendChild(errorMessage);

    // 버튼
    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.innerHTML = "완 료";

    submit.addEventListener('click', () => {
        const inquiryText = document.querySelector('.inquiryText');
        const username = document.querySelector('.userName');
        const userPhoneNum = document.querySelector('.userPhoneNum');
        const userEmail = document.querySelector('.userEmail');
        let interimResponsejson;

        function regCheck(flag) {
            // 비회원
            if (!flag) { // 비회원이면 
                if (username.value === '') {
                    errorMessage.innerHTML = '이름을 입력해주세요';
                    errorMessage.style.display = 'block';
                    return false;
                }
                if (userPhoneNum.value === '') {
                    errorMessage.innerHTML = '연락처를 입력해주세요';
                    errorMessage.style.display = 'block';
                    return false;
                }
                if (userEmail.value === '') {
                    errorMessage.innerHTML = '이메일을 입력해주세요';
                    errorMessage.style.display = 'block';
                    return false;
                }
            }

            if (inquiryText.value === '') {
                errorMessage.innerHTML = '문의사항을 입력해주세요';
                errorMessage.style.display = 'block';
                return false;
            }
            if (!flag) {    // 비회원이면 
                if (!regName.test(username.value)) {
                    errorMessage.innerHTML = '이름을 한글로 입력해주세요';
                    errorMessage.style.display = 'block';
                    return false;
                }
                if (!regPhone.test(userPhoneNum.value)) {
                    errorMessage.innerHTML = '정확한 연락처를 입력해주세요';
                    errorMessage.style.display = 'block';
                    return false;
                }
                if (!regEmail.test(userEmail.value)) {
                    errorMessage.innerHTML = '형식에 맞는 이메일을 입력해주세요';
                    errorMessage.style.display = 'block';
                    return false;
                }
            }
            return true;
        }

        if (!loginFlag) {    //로그인 안되어 있으면
            if (regCheck(false)) {
                // 문의 api 비회원일 때 
                /*
                fetch("", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "userId": null,
                        "name": username.value,
                        "phoneNumber": userPhoneNum.value,
                        "email": userEmail.value,
                        "message": inquiryText.value
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.status == 500) {
                            errorMessage.innerHTML = '다시 입력해주세요';
                            errorMessage.style.display = 'block';
                        }
                        else {
                            reserveform.innerHTML = '';
                            completeinquiry();
                        }
                    })*/

                const interimRequestjson = {   // 이런 식으로 보냄
                    "userId": null,
                    "name": username.value,
                    "phoneNumber": userPhoneNum.value,
                    "email": userEmail.value,
                    "message": inquiryText.value
                }

                interimResponsejson = {
                    "questionData": {
                        "name": "정민석",
                        "email": "adf234@naver.com",
                        "phoneNumber": "01012345678",
                        "message": "몇명까지 가능한가요!",
                        "_id": "61a7b4d329fe431674a151ae",
                        "__v": 0
                    },
                    "status": 200
                }

                if (interimResponsejson.status == 500) {
                    errorMessage.innerHTML = '다시 입력해주세요';
                    errorMessage.style.display = 'block';
                }
                else {
                    reserveform.innerHTML = '';
                    completeinquiry();
                }

            }
        }
        else {  // 로그인
            if (regCheck(true)) {
                // 문의 api 로그인되어 있을 때 
                /*
                fetch("", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "userId": userData._id,
                        "name": userData.username,
                        "phoneNumber": userData.phoneNumber,
                        "email": userData.phoneNumber,
                        "message": inquiryText.value,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.status == 500) {
                            errorMessage.innerHTML = '다시 입력해주세요';
                            errorMessage.style.display = 'block';
                        }
                        else {
                            reserveform.innerHTML = '';
                            completeinquiry();
                        }
                    })*/

                const interimRequestjson = {    //서버로 넘어오는 json 예시 
                    "userId": userData._id,
                    "name": userData.username,
                    "phoneNumber": userData.phoneNumber,
                    "email": userData.phoneNumber,
                    "message": inquiryText.value,
                }

                interimResponsejson = {
                    "questionData": {
                        "name": "정민석",
                        "email": "adf234@naver.com",
                        "phoneNumber": "01012345678",
                        "message": "프로그램이 어떤가요!",
                        "userId": "61a7a5c44577d6f168cda977",
                        "_id": "61a7b4a429fe431674a151ac",
                        "__v": 0
                    },
                    "status": 200
                }

                if (interimResponsejson.status == 500) {
                    errorMessage.innerHTML = '다시 입력해주세요';
                    errorMessage.style.display = 'block';
                }
                else {
                    reserveform.innerHTML = '';
                    completeinquiry();
                }
            }
        }

    });

    reserveform.appendChild(submit);
}

function reservationCheck() { // 비회원 예약 폼

    contactName.innerHTML = '-예약 확인-';

    createInput(reserveform, "예약번호", "text", "예약번호를 입력하세요", "reservationNumber", true);
    const reservationNumber = document.querySelector('.reservationNumber');

    // 에러메시지
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('errorMessage');
    reserveform.appendChild(errorMessage);

    // 버튼
    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.innerHTML = "완 료";
    submit.style.marginTop = "3rem";
    reserveform.appendChild(submit);

    submit.addEventListener('click', () => {

        if (reservationNumber.value == '') {    // 아무값도 입력받지 않았을 때
            errorMessage.style.display = 'block';
            errorMessage.innerHTML = '예약번호를 입력해주세요'
        }
        else {
            // 예약 확인 api 비회원일 때
            /*
            fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "userId": null,
                    "reservationCode": reservationNumber.value,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === 500) {  // 에러
                        errorMessage.style.display = 'block';
                        errorMessage.innerHTML = '존재하지 않는 번호입니다'
                    }
                    else {
                        reserveform.innerHTML = '';
                        reservationInfo(data, loginFlag);
                    }
                })*/

            const nonMemberReservationCheckRequest = { // 비회원 예약 확인 이렇게 보낸다 가정
                "userId": null,
                "reservationCode": reservationNumber.value,
            }

            const nonMemberReservationCheckResponse = {
                "reservationData": [
                    {
                        "_id": "61a7ae868b1bbae38373bef7",
                        "name": "송동호",
                        "email": "adf234@naver.com",
                        "phoneNumber": "01012345678",
                        "peopleNum": 5,
                        "message": "프로그램이 재미있으면 좋겠어요!",
                        "program": {
                            "_id": "61a7ac79105d5b6e70baf3c6",
                            "category": "notice",
                            "title": "제목제목",
                            "createdAt": "2021-12-02 02:09",
                            "photoUrls": [],
                            "content": "내용내용",
                            "date": "2021-12-15",
                            "reserveList": [
                                "61a7ada08b1bbae38373beec",
                                "61a7ae058b1bbae38373bef2",
                                "61a7ae868b1bbae38373bef7"
                            ],
                            "__v": 3
                        },
                        "reservationCode": "adf23416383791429475678",
                        "__v": 0
                    }
                ],
                "status": 200
            }
            //console.log(typeof nonMemberReservationCheckResponse.status);
            if (nonMemberReservationCheckResponse.status === 500) {  // 에러
                errorMessage.style.display = 'block';
                errorMessage.innerHTML = '존재하지 않는 번호입니다'
            }
            else {
                reserveform.innerHTML = '';
                reservationInfo(nonMemberReservationCheckResponse, loginFlag);
            }
        }


    });


}


function reservationInfo(response, loginFlag) { // 예약정보

    contactName.innerHTML = '-예약 정보-';


    if (response.status == 500) {   // 회원 에러처리
        const reservationRecord = document.createElement('div');
        reservationRecord.innerHTML = '새로고침 해주세요'
        reservationRecord.classList.add('reservation-record');
        reserveform.appendChild(reservationRecord);
    }
    else {
        for (let i = 0; i < response.reservationData.length; i++) {
            const infoDesc = document.createElement('div'); // 인포 설명
            infoDesc.classList.add('info-desc');

            createReservationElem(infoDesc, '프로그램', response.reservationData[i].program.title);
            createReservationElem(infoDesc, '날짜', response.reservationData[i].program.date);
            createReservationElem(infoDesc, '이름', response.reservationData[i].name);
            createReservationElem(infoDesc, '인원 수', response.reservationData[i].peopleNum + " 명");

            reserveform.appendChild(infoDesc);
        }



        if (response.reservationData.length == 0) { //회원이 예약 기록이 없다면
            const reservationRecord = document.createElement('div');
            reservationRecord.innerHTML = '예약 기록이 없습니다'
            reservationRecord.classList.add('reservation-record');
            reserveform.appendChild(reservationRecord);
        }
    }




    if (!loginFlag) {    // 로그인 안했으면 뒤로 갈 수 있는 버튼 생김
        // 버튼
        const submit = document.createElement('button');
        submit.classList.add('submit');
        submit.innerHTML = "완 료";
        //submit.style.marginTop = "1rem";

        submit.addEventListener('click', () => {
            reserveform.innerHTML = '';
            reservationCheck();
        });

        reserveform.appendChild(submit);
    }
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


function completeReservattion(response, loginFlag) {
    contactName.innerHTML = '-예약 완료-';

    if (!loginFlag) {   // 로그인 안했으면
        const reservationNumName = document.createElement('div');
        reservationNumName.classList.add('reservation-num-name');
        reservationNumName.innerHTML = '예약 번호';

        const reservationNum = document.createElement('div');
        reservationNum.classList.add('reservation-num');
        reservationNum.innerHTML = response.reservationData.reservationCode;    // 예약 번호



        reserveform.appendChild(reservationNumName);
        reserveform.appendChild(reservationNum);


    }

    // 버튼
    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.innerHTML = "확 인";
    // 완료 눌렀을 때 
    submit.addEventListener('click', function () {
        reserveform.innerHTML = '';
        createReservation(programData, loginFlag);  // 뒤로 돌아감
    });

    reserveform.appendChild(submit);

}



function completeinquiry() {
    contactName.innerHTML = '-문의 완료-';

    // 버튼
    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.innerHTML = "확 인";
    // 완료 눌렀을 때 
    submit.addEventListener('click', function () {
        reserveform.innerHTML = '';
        inquire(loginFlag);  // 뒤로 돌아감
    });

    reserveform.appendChild(submit);

}


