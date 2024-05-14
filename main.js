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

//對局開始&紀錄按鈕
document.getElementById("button").addEventListener("click",BasicGame);
document.getElementById("button1").addEventListener("click",PlayerNames);