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
    //20符
    if (fuNumber === 20){
        switch (fanNumber) {
            case 1:
                result1Eleent.innerText = "重新輸入";
                result2Eleent.innerText = "重新輸入";
                break;
            case 2:
                result1Eleent.innerText = "榮和：" + 2000 + "點";
                result2Eleent.innerText = "自摸：" + 700 + " ALL";
                break;
            case 3:
                result1Eleent.innerText = "榮和：" + 4800 + "點";
                result2Eleent.innerText = "自摸：" + 1600 + " ALL";
                break;
            case 4:
                result1Eleent.innerText = "榮和：" + 7700 + "點";
                result2Eleent.innerText = "自摸：" + 2600 + " ALL";
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
                    result2Eleent.innerText = "重新輸入";
                }
                break;
        }//25符
    }else if (fuNumber === 25){
        switch (fanNumber) {
            case 1:
                result1Eleent.innerText = "重新輸入";
                result2Eleent.innerText = "重新輸入";
                break;
            case 2:
                result1Eleent.innerText = "榮和：" + 2400 + "點";
                result2Eleent.innerText = "自摸：" + 800 + " ALL";
                break;
            case 3:
                result1Eleent.innerText = "榮和：" + 4800 + "點";
                result2Eleent.innerText = "自摸：" + 1600 + " ALL";
                break;
            case 4:
                result1Eleent.innerText = "榮和：" + 9600 + "點";
                result2Eleent.innerText = "自摸：" + 3200 + " ALL";
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
                    result2Eleent.innerText = "重新輸入";
                }
                break;
        }//30符
    }else if (fuNumber === 30){
        switch (fanNumber) {
            case 1:
                result1Eleent.innerText = "榮和：" + 1500 + "點";
                result2Eleent.innerText = "自摸：" + 500 + " ALL";
                break;
            case 2:
                result1Eleent.innerText = "榮和：" + 2900 + "點";
                result2Eleent.innerText = "自摸：" + 1000 + " ALL";
                break;
            case 3:
                result1Eleent.innerText = "榮和：" + 5800 + "點";
                result2Eleent.innerText = "自摸：" + 2000 + " ALL";
                break;
            case 4:
                result1Eleent.innerText = "榮和：" + 11600 + "點";
                result2Eleent.innerText = "自摸：" + 3900 + " ALL";
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
                    result2Eleent.innerText = "重新輸入";
                }
                break;
        }//40符
    }else if (fuNumber === 40){
        switch (fanNumber) {
            case 1:
                result1Eleent.innerText = "榮和：" + 2000 + "點";
                result2Eleent.innerText = "自摸：" + 700 + " ALL";
                break;
            case 2:
                result1Eleent.innerText = "榮和：" + 3900 + "點";
                result2Eleent.innerText = "自摸：" + 1300 + " ALL";
                break;
            case 3:
                result1Eleent.innerText = "榮和：" + 7700 + "點";
                result2Eleent.innerText = "自摸：" + 2600 + " ALL";
                break;
            case 4:
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
                    result2Eleent.innerText = "重新輸入";
                }
                break;
        }//50符
    }else if (fuNumber === 50){
        switch (fanNumber) {
            case 1:
                result1Eleent.innerText = "榮和：" + 2400 + "點";
                result2Eleent.innerText = "自摸：" + 800 + " ALL";
                break;
            case 2:
                result1Eleent.innerText = "榮和：" + 4800 + "點";
                result2Eleent.innerText = "自摸：" + 1600 + " ALL";
                break;
            case 3:
                result1Eleent.innerText = "榮和：" + 7700 + "點";
                result2Eleent.innerText = "自摸：" + 2600 + " ALL";
                break;
            case 4:
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
                    result2Eleent.innerText = "重新輸入";
                }
                break;
        }//60符
    }else if (fuNumber === 60){
        switch (fanNumber) {
            case 1:
                result1Eleent.innerText = "榮和：" + 2900 + "點";
                result2Eleent.innerText = "自摸：" + 1000 + " ALL";
                break;
            case 2:
                result1Eleent.innerText = "榮和：" + 5800 + "點";
                result2Eleent.innerText = "自摸：" + 2000 + " ALL";
                break;
            case 3:
                result1Eleent.innerText = "榮和：" + 11600 + "點";
                result2Eleent.innerText = "自摸：" + 3900 + " ALL";
                break;
            case 4:
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
                    result2Eleent.innerText = "重新輸入";
                }
                break;
        }//70符
    }else if (fuNumber === 70){
        switch (fanNumber) {
            case 1:
                result1Eleent.innerText = "榮和：" + 3400 + "點";
                result2Eleent.innerText = "自摸：" + 1200 + " ALL";
                break;
            case 2:
                result1Eleent.innerText = "榮和：" + 6800 + "點";
                result2Eleent.innerText = "自摸：" + 2300 + " ALL";
                break;
            case 3:
            case 4:
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
                    result2Eleent.innerText = "重新輸入";
                }
                break;
        }
    }
}