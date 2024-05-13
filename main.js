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

//飜數符數
function calculate(){
    //取得html文件值
    var fanNumber =parseInt(document.getElementById("fanNumber").value);
    var fuNumber = parseInt(document.getElementById("fuNumber").value);
    var result1Eleent = document.getElementById("result1");
    var result2Eleent = document.getElementById("result2");
    
    //計算飜數(親)
    if (fuNumber === 20){
        switch (fanNumber) {
            case 1:
                result1Eleent.innerText = "榮和：" + 1500 + "點";
                result2Eleent.innerText = "自摸：" + 500 + " ALL";
                break;
            case 2:
                result1Eleent.innerText = "榮和：" + 2000 + "點";
                result2Eleent.innerText = "自摸：" + 700 + " ALL";
                break;
            case 3:
                result1Eleent.innerText = "榮和：" + 2400 + "點";
                result2Eleent.innerText = "自摸：" + 800 + " ALL";
                break;
            case 4:
                result1Eleent.innerText = "榮和：" + 2900 + "點";
                result2Eleent.innerText = "自摸：" + 100 + " ALL";
                break;
            case 5:
                result1Eleent.innerText = "榮和：" + 12000 + "點";
                result2Eleent.innerText = "自摸：" + 4000 + " ALL";
                break;
            case 6:
            case 7:
                result1Eleent.innerText = "榮和：" + 18000 + "點";
                result2Eleent.innerText = "自摸：" + 6000 + " ALL";
                break;
            case 8:
            case 9:
            case 10:
                result1Eleent.innerText = "榮和：" + 24000 + "點";
                result2Eleent.innerText = "自摸：" + 8000 + " ALL";
                break;
            case 11:
            case 12:
                result1Eleent.innerText = "榮和：" + 36000 + "點";
                result2Eleent.innerText = "自摸：" + 12000 + " ALL";
                break;
            default:
                if(fanNumber >= 13){
                    result1Eleent.innerText = "榮和：" + 48000 + "點";
                    result2Eleent.innerText = "自摸：" + 16000 + " ALL";
                }else{
                    result1Eleent.innerText = "重新輸入";
                }
                break;
        }
    }
}