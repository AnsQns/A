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
    var result1Eleent = parseInt(document.getElementById("result1"));
    var result2Eleent = parseInt(document.getElementById("result2"));
    
    //顯示飜數符數
    result1Eleent.innerText = fanNumber + "翻" + fuNumber + "符";
    
    //計算飜數
    if (fanNumber === 1){
        calculate1();
    } else if (fanNumber === 2){
        calculate1();
    } else if (fanNumber === 3){
        calculate1();
    } else if (fanNumber === 4){
        calculate1();
    } else if (fanNumber === 5){
        result2Eleent.innerText ="滿貫";
    } else if (fanNumber === 6 || fanNumber === 7){
        result2Eleent.innerText = "倍滿";
    } else if (fanNumber === 8 || fanNumber === 10){
        result2Eleent.innerText = "跳滿";
    } else if (fanNumber === 11 || fanNumber === 12){
        result2Eleent.innerText = "三倍滿";
    } else if (fanNumber >=13){
        result2Eleent.innerText = "役滿";
    }else{
        result2Eleent.innerText = "重新輸入";
    }
        function calculate1(){
        //取得html文件值
         var fanNumber =parseInt(document.getElementById("fanNumber").value);
         var fuNumber = parseInt(document.getElementById("fuNumber").value);

        //定義符數計算
         var FU1 = 6 * fuNumber * Math.pow(2, fanNumber + 2);
         var FU2 = 4 * fuNumber * Math.pow(2, fanNumber + 2);

        //顯示點數
         var result2Eleent = document.getElementById("result2");
         result2Eleent.innerText = FU1 + "點" + FU2 +"點";
        }
    
}