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

//翻數符數
function calculate(){
    //取得html文件
    var fanNumber =parseInt(document.getElementById("fanNumber").value);
    var fuNumber = parseInt(document.getElementById("fuNumber").value);
    
    //計算翻數
    var fuNumber = 0;
    if (fanNumber === 1){

    } else if (fanNumber === 2){

    } else if (fanNumber === 3){

    } else if (fanNumber === 4){

    } else if (fanNumber === 5){
        console.log("滿貫");
    } else if (fanNumber === 6 || fanNumber === 7){
        console.log("倍滿");
    } else if (fanNumber === 8 || fanNumber === 10){
        console.log("跳滿");
    } else if (fanNumber === 11 || fanNumber === 12){
        console.log("三倍滿");
    } else if (fanNumber >=13){
        console.log("役滿");
    }else{
        console.log("重新輸入");
    }
    //顯示符數test
    document.getElementById("result").innerText = fanNumber + "翻" + fuNumber + "符";
    
}