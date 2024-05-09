//基本點
function BasicScore(){
    const Score = 25000;
    console.log("25000")
}
//玩家名稱
var PlayerNameArr = []
function AddPlayerName(index){
   var PlayerName = document.getElementById("PlayerName"+ index).value;
    PlayerNameArr.push(PlayerName);
        console.log(PlayerNameArr)
}
//對局開始按鈕
document.getElementById("button").addEventListener("click",BasicScore);
document.getElementById("button1").addEventListener("click",AddPlayerName);