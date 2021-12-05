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

const body = document.querySelector('body');
const programListContainer = document.createElement('div');
programListContainer.classList.add('programListContainer');
body.appendChild(programListContainer);

function createProgramList(obj) {

    for (key in obj) {
        const program = document.createElement('div');
        program.classList.add('program');
        program.dataset.key = key;

        const programImg = document.createElement('div');
        programImg.classList.add('programImg');
        programImg.style.backgroundImage = "url(" + obj[key].photoUrls[0] + ")";



        const programTitle = document.createElement('div');
        programTitle.classList.add('programTitle');
        programTitle.innerHTML = obj[key].title;


        program.appendChild(programImg);
        program.appendChild(programTitle);
        programListContainer.appendChild(program);

        program.addEventListener('click', (e) => {

            console.log(obj[e.currentTarget.dataset.key].title);
            localStorage.setItem('programData', JSON.stringify(obj[e.currentTarget.dataset.key]));
            location.href = 'programDesc.html';
        });

    }
}

createProgramList(programData);