document.getElementById("send").onclick = function() {
    let name = document.getElementById("name");
    let month = document.getElementById("selectMonth");
    let day = document.getElementById("selectDay");

    console.log(name.value);
    console.log(month.value);
    console.log(day.value);

    zodiac(month.value, day.value);
}

function zodiac (month, day) {
    // let zodiac = seiza;

    // zodiacMonth = parseInt(month);
    // zodiacDay = parseInt(day);

    zodiacDay = month + day;
    console.log(zodiacDay);

    if (zodiacDay >= 120 && zodiacDay <= 218) {
        console.log("水瓶座（みずがめ座）");
    } else if (zodiacDay >= 219 && zodiacDay <= 320) {
        console.log("魚座（うお座）");
    } else if (zodiacDay >= 321 && zodiacDay <= 419) {
        console.log("牡羊座（おひつじ座）です。");
    } else if (zodiacDay >= 420 && zodiacDay <= 520) {
        console.log("牡牛座（おうし座）です。");
    } else if (zodiacDay >= 521 && zodiacDay <= 621) {
        console.log("双子座（ふたご座）です。");
    } else if (zodiacDay >= 622 && zodiacDay <= 722) {
        console.log("蟹座（かに座）です。");
    } else if (zodiacDay >= 723 && zodiacDay <= 822) {
        console.log("獅子座（しし座）です。");
    } else if (zodiacDay >= 823 && zodiacDay <= 922) {
        console.log("乙女座（おとめ座）です。");
    } else if (zodiacDay >= 923 && zodiacDay <= 1023) {
        console.log("天秤座（てんびん座）です。");
    } else if (zodiacDay >= 1024 && zodiacDay <= 1122) {
        console.log("蠍座（さそり座）です。");
    } else if (zodiacDay >= 1123 && zodiacDay <= 1221) {
        console.log("射手座（いて座）です。");
    } else {
        console.log("山羊座（やぎ座）です。");
    }
}