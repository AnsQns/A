//網頁
function BasicGame(){
    window.location.href = "MJ2.html";
}
//紀錄玩家名稱
function PlayerNames(){
    var PlayerNameArr = []
    for (var i = 0; i< 4 ; i++){
        var PlayerName = document.getElementById("PlayerName"+ i).value;
        PlayerNameArr.push(PlayerName);
        console.log(PlayerNameArr)
    }
}
function selectOption(option) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('selected');
        if (opt.textContent === option) {
            opt.classList.add('selected');
        }
    });
    var fanNumber = parseInt(document.getElementById("fanNumber").value);
    var fuNumber = parseInt(document.getElementById("fuNumber").value);

    yourFunction(option, fanNumber, fuNumber)
}

function yourFunction(selectedOption) {
    console.log("你选择了：" + selectedOption);
    if (selectedOption === '親家') {
        calculate1();
    } else if (selectedOption === '子家') {
        calculate2();
    }
}

//對局開始&紀錄按鈕
document.getElementById("button").addEventListener("click",BasicGame);
document.getElementById("button1").addEventListener("click",PlayerNames);