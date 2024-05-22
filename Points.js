//飜數符數(親家
function calculate1(){
    // 取得HTML文件值
    var fanNumber = parseInt(document.getElementById("fanNumber").value);
    var fuNumber = parseInt(document.getElementById("fuNumber").value);
    var result1Eleent = document.getElementById("result1");
    var result2Eleent = document.getElementById("result2");
    
    // 計算點數(親家)
    switch (fuNumber) {
        case 20:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "重新選擇";
                    result2Eleent.innerText = "重新選擇";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：2000點";
                    result2Eleent.innerText = "自摸：700 ALL";
                    break;
                case 3:
                    result1Eleent.innerText = "榮和：4800點";
                    result2Eleent.innerText = "自摸：1600 ALL";
                    break;
                case 4:
                    result1Eleent.innerText = "榮和：7700點";
                    result2Eleent.innerText = "自摸：2600 ALL";
                    break;
                case 5:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：4000 ALL";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：18000點";
                    result2Eleent.innerText = "自摸：6000 ALL";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：8000 ALL";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：36000點";
                    result2Eleent.innerText = "自摸：12000 ALL";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：48000點";
                    result2Eleent.innerText = "自摸：16000 ALL";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：96000點";
                    result2Eleent.innerText = "自摸：32000 ALL";
                    break;
                }
            break;
        case 25:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "重新選擇";
                    result2Eleent.innerText = "重新選擇";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：2400點";
                    result2Eleent.innerText = "自摸：800 ALL";
                    break;
                case 3:
                    result1Eleent.innerText = "榮和：4800點";
                    result2Eleent.innerText = "自摸：1600 ALL";
                    break;
                case 4:
                    result1Eleent.innerText = "榮和：9600點";
                    result2Eleent.innerText = "自摸：3200 ALL";
                    break;
                case 5:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：4000 ALL";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：18000點";
                    result2Eleent.innerText = "自摸：6000 ALL";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：8000 ALL";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：36000點";
                    result2Eleent.innerText = "自摸：12000 ALL";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：48000點";
                    result2Eleent.innerText = "自摸：16000 ALL";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：96000點";
                    result2Eleent.innerText = "自摸：32000 ALL";
                    break;
                }
            break;
        case 30:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "榮和：1500點";
                    result2Eleent.innerText = "自摸：500 ALL";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：2900點";
                    result2Eleent.innerText = "自摸：1000 ALL";
                    break;
                case 3:
                    result1Eleent.innerText = "榮和：5800點";
                    result2Eleent.innerText = "自摸：2000 ALL";
                    break;
                case 4:
                    result1Eleent.innerText = "榮和：11600點";
                    result2Eleent.innerText = "自摸：3900 ALL";
                    break;
                case 5:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：4000 ALL";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：18000點";
                    result2Eleent.innerText = "自摸：6000 ALL";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：8000 ALL";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：36000點";
                    result2Eleent.innerText = "自摸：12000 ALL";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：48000點";
                    result2Eleent.innerText = "自摸：16000 ALL";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：96000點";
                    result2Eleent.innerText = "自摸：32000 ALL";
                    break;
                }
            break;
        case 40:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "榮和：2000點";
                    result2Eleent.innerText = "自摸：700 ALL";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：3900點";
                    result2Eleent.innerText = "自摸：1300 ALL";
                    break;
                case 3:
                    result1Eleent.innerText = "榮和：7700點";
                    result2Eleent.innerText = "自摸：2600 ALL";
                    break;
                case 4:
                case 5:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：4000 ALL";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：18000點";
                    result2Eleent.innerText = "自摸：6000 ALL";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：8000 ALL";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：36000點";
                    result2Eleent.innerText = "自摸：12000 ALL";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：48000點";
                    result2Eleent.innerText = "自摸：16000 ALL";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：96000點";
                    result2Eleent.innerText = "自摸：32000 ALL";
                    break;
                }
            break;
        case 50:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "榮和：2400點";
                    result2Eleent.innerText = "自摸：800 ALL";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：4800點";
                    result2Eleent.innerText = "自摸：1600 ALL";
                    break;
                case 3:
                    result1Eleent.innerText = "榮和：9600點";
                    result2Eleent.innerText = "自摸：3200 ALL";
                    break;
                case 4:
                case 5:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：4000 ALL";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：18000點";
                    result2Eleent.innerText = "自摸：6000 ALL";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：8000 ALL";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：36000點";
                    result2Eleent.innerText = "自摸：12000 ALL";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：48000點";
                    result2Eleent.innerText = "自摸：16000 ALL";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：96000點";
                    result2Eleent.innerText = "自摸：32000 ALL";
                    break;
                }
            break;
        case 60:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "榮和：2900點";
                    result2Eleent.innerText = "自摸：1000 ALL";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：5800點";
                    result2Eleent.innerText = "自摸：2000 ALL";
                    break;
                case 3:
                    result1Eleent.innerText = "榮和：11600點";
                    result2Eleent.innerText = "自摸：3900 ALL";
                    break;
                case 4:
                case 5:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：4000 ALL";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：18000點";
                    result2Eleent.innerText = "自摸：6000 ALL";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：8000 ALL";
                    break;
                case 11:
                case 12:
                     result1Eleent.innerText = "榮和：36000點";
                    result2Eleent.innerText = "自摸：12000 ALL";
                break;
                case 13:
                    result1Eleent.innerText = "榮和：48000點";
                    result2Eleent.innerText = "自摸：16000 ALL";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：96000點";
                    result2Eleent.innerText = "自摸：32000 ALL";
                    break;
                }
            break;
        case 70:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "榮和：3400點";
                    result2Eleent.innerText = "自摸：1200 ALL";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：6800點";
                    result2Eleent.innerText = "自摸：2300 ALL";
                    break;
                case 3:
                case 4:
                case 5:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：4000 ALL";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：18000點";
                    result2Eleent.innerText = "自摸：6000 ALL";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：8000 ALL";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：36000點";
                    result2Eleent.innerText = "自摸：12000 ALL";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：48000點";
                    result2Eleent.innerText = "自摸：16000 ALL";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：96000點";
                    result2Eleent.innerText = "自摸：32000 ALL";
                    break;
                }
            break;
        default:
            result1Eleent.innerText = "重新選擇";
            result2Eleent.innerText = "重新選擇";
            break;
    }
}
//飜數符數(子家
function calculate2(){
    // 取得HTML文件值
    var fanNumber = parseInt(document.getElementById("fanNumber").value);
    var fuNumber = parseInt(document.getElementById("fuNumber").value);
    var result1Eleent = document.getElementById("result1");
    var result2Eleent = document.getElementById("result2");
    
    // 計算點數(子家)
    switch (fuNumber) {
        case 20:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "重新選擇";
                    result2Eleent.innerText = "重新選擇";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：1300點";
                    result2Eleent.innerText = "自摸：子400點，親700點";
                    break;
                case 3:
                    result1Eleent.innerText = "榮和：2600點";
                    result2Eleent.innerText = "自摸：子700點，親1300點";
                    break;
                case 4:
                    result1Eleent.innerText = "榮和：5200點";
                    result2Eleent.innerText = "自摸：子1300點，親2600點";
                    break;
                case 5:
                    result1Eleent.innerText = "榮和：8000點";
                    result2Eleent.innerText = "自摸：子2000點，親4000點";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：子3000點，親6000點";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：16000點";
                    result2Eleent.innerText = "自摸：子4000點，親8000點";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：子6000點，親12000點";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：32000點";
                    result2Eleent.innerText = "自摸：子8000點，親16000點";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：64000點";
                    result2Eleent.innerText = "自摸：子16000點，親32000點";
                    break;
                }
            break;
        case 25:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "重新選擇";
                    result2Eleent.innerText = "重新選擇";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：1600點";
                    result2Eleent.innerText = "自摸：子400點，親800點";
                    break;
                case 3:
                    result1Eleent.innerText = "榮和：3200點";
                    result2Eleent.innerText = "自摸：子800點，親1600點";
                    break;
                case 4:
                    result1Eleent.innerText = "榮和：6400點";
                    result2Eleent.innerText = "自摸：子1600點，親3200點";
                    break;
                case 5:
                    result1Eleent.innerText = "榮和：8000點";
                    result2Eleent.innerText = "自摸：子2000點，親4000點";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：子3000點，親6000點";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：16000點";
                    result2Eleent.innerText = "自摸：子4000點，親8000點";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：子6000點，親12000點";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：32000點";
                    result2Eleent.innerText = "自摸：子8000點，親16000點";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：64000點";
                    result2Eleent.innerText = "自摸：子16000點，親32000點";
                    break;
                }
            break;
        case 30:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "榮和：1000點";
                    result2Eleent.innerText = "自摸：子300點，親500點";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：2000點";
                    result2Eleent.innerText = "自摸：子500點，親1000點";
                    break;
                case 3:
                    result1Eleent.innerText = "榮和：3900點";
                    result2Eleent.innerText = "自摸：子1000點，親2000點";
                    break;
                case 4:
                    result1Eleent.innerText = "榮和：7700點";
                    result2Eleent.innerText = "自摸：子2000點，親3900點";
                    break;
                case 5:
                    result1Eleent.innerText = "榮和：8000點";
                    result2Eleent.innerText = "自摸：子2000點，親4000點";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：子3000點，親6000點";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：16000點";
                    result2Eleent.innerText = "自摸：子4000點，親8000點";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：子6000點，親12000點";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：32000點";
                    result2Eleent.innerText = "自摸：子8000點，親16000點";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：64000點";
                    result2Eleent.innerText = "自摸：子16000點，親32000點";
                    break;
                }
            break;
        case 40:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "榮和：1300點";
                    result2Eleent.innerText = "自摸：子400點，親700點";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：2600點";
                    result2Eleent.innerText = "自摸：子700點，親1300點";
                    break;
                case 3:
                    result1Eleent.innerText = "榮和：5200點";
                    result2Eleent.innerText = "自摸：子1300點，親2600點";
                    break;
                case 4:
                case 5:
                    result1Eleent.innerText = "榮和：8000點";
                    result2Eleent.innerText = "自摸：子2000點，親4000點";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：子3000點，親6000點";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：16000點";
                    result2Eleent.innerText = "自摸：子4000點，親8000點";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：子6000點，親12000點";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：32000點";
                    result2Eleent.innerText = "自摸：子8000點，親16000點";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：64000點";
                    result2Eleent.innerText = "自摸：子16000點，親32000點";
                    break;
                }
            break;
        case 50:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "榮和：1600點";
                    result2Eleent.innerText = "自摸：子400點，親800點";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：3200點";
                    result2Eleent.innerText = "自摸：子800點，親1600點";
                    break;
                case 3:
                    result1Eleent.innerText = "榮和：6400點";
                    result2Eleent.innerText = "自摸：子1600點，親3200點";
                    break;
                case 4:
                case 5:
                    result1Eleent.innerText = "榮和：8000點";
                    result2Eleent.innerText = "自摸：子2000點，親4000點";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：子3000點，親6000點";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：16000點";
                    result2Eleent.innerText = "自摸：子4000點，親8000點";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：子6000點，親12000點";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：32000點";
                    result2Eleent.innerText = "自摸：子8000點，親16000點";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：64000點";
                    result2Eleent.innerText = "自摸：子16000點，親32000點";
                    break;
                }
            break;
        case 60:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "榮和：2000點";
                    result2Eleent.innerText = "自摸：子500點，親1000點";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：3900點";
                    result2Eleent.innerText = "自摸：子1000點，親2000點";
                    break;
                case 3:
                    result1Eleent.innerText = "榮和：7700點";
                    result2Eleent.innerText = "自摸：子2000點，親3900點";
                    break;
                case 4:
                case 5:
                    result1Eleent.innerText = "榮和：8000點";
                    result2Eleent.innerText = "自摸：子2000點，親4000點";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：子3000點，親6000點";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：16000點";
                    result2Eleent.innerText = "自摸：子4000點，親8000點";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：子6000點，親12000點";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：32000點";
                    result2Eleent.innerText = "自摸：子8000點，親16000點";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：64000點";
                    result2Eleent.innerText = "自摸：子16000點，親32000點";
                    break;
                }
            break;
        case 70:
            switch (fanNumber) {
                case 1:
                    result1Eleent.innerText = "榮和：2300點";
                    result2Eleent.innerText = "自摸：子600點，親1200點";
                    break;
                case 2:
                    result1Eleent.innerText = "榮和：4500點";
                    result2Eleent.innerText = "自摸：子1200點，親2300點";
                    break;
                case 3:
                case 4:
                case 5:
                    result1Eleent.innerText = "榮和：8000點";
                    result2Eleent.innerText = "自摸：子2000點，親4000點";
                    break;
                case 6:
                case 7:
                    result1Eleent.innerText = "榮和：12000點";
                    result2Eleent.innerText = "自摸：子3000點，親6000點";
                    break;
                case 8:
                case 9:
                case 10:
                    result1Eleent.innerText = "榮和：16000點";
                    result2Eleent.innerText = "自摸：子4000點，親8000點";
                    break;
                case 11:
                case 12:
                    result1Eleent.innerText = "榮和：24000點";
                    result2Eleent.innerText = "自摸：子6000點，親12000點";
                    break;
                case 13:
                    result1Eleent.innerText = "榮和：32000點";
                    result2Eleent.innerText = "自摸：子8000點，親16000點";
                    break;
                case 26:
                    result1Eleent.innerText = "榮和：64000點";
                    result2Eleent.innerText = "自摸：子16000點，親32000點";
                    break;
                }
            break;
        default:
            result1Eleent.innerText = "重新選擇";
            result2Eleent.innerText = "重新選擇";
            break;
    }
}