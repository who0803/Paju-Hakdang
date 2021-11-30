function onClickSelect(e) { // 눌렀을 때 활성화되있으면 비활성화 활성화 안되있으면 활성화
    const isActive = e.currentTarget.className.indexOf("active") !== -1;
    if (isActive) {
        e.currentTarget.className = "select";
    } else {
        e.currentTarget.className = "select active";
    }
}

document.querySelector(".select").addEventListener("click", onClickSelect);  // 누르면 펼쳐짐

function onClickOption(e) { // 바꿔줌
    const selectedValue = e.currentTarget.innerHTML;
    document.querySelector(".text").innerHTML = selectedValue;
}

var optionList = document.querySelectorAll(".option");
for (var i = 0; i < optionList.length; i++) {
    var option = optionList[i];
    option.addEventListener("click", onClickOption);
}