const events = {
    "07:45": "Niet vroeger douchen",
    "08:15": "Wekken",
    "08:30": "Ontbijt",
    "09:15": "Verzamelen arena - lesmoment 1",
    "10:45": "Pauze - bar",
    "11:05": "Lesmoment 2",
    "12:30": "Middageten en vrij",
    "13:45": "Verzamelen arena - lesmoment 3",
    "15:15": "Pauze - verzamelen",
    "15:20": "Verzamelen Bronne - start namiddagactiviteit",
    "17:45": "Vrij",
    "18:30": "Avondeten - vrij",
    "19:30": "Verzamelen arena - start avondactiviteiten",
    "21:30": "Vrij - bar",
    "22:00": "Niet meer douchen",
    "22:00": "Slapen gaan 1e graad blauwe bandjes",
    "22:30": "Slapen gaan 2e graad groene bandjes",
    "22:45": "Slapen gaan 3e graad rode bandjes"
}
const tijden = [745, 815, 830, 915, 1045, 1105, 1230, 1345, 1515, 1520, 1745, 1830, 1930, 2130, 2200, 2230, 2245];
function displayTime() {
    const date = new Date();
    let time;
    if (date.getHours() < 10 && date.getMinutes() < 10) {
        time = "0" + String(date.getHours()) + ":" + "0" + String(date.getMinutes());
    } else if (date.getHours() < 10 && date.getMinutes() >= 10) {
        time = "0" + String(date.getHours()) + ":" + String(date.getMinutes());
    } else if (date.getHours() >= 10 && date.getMinutes() < 10) {
        time = String(date.getHours()) + ":" + "0" + String(date.getMinutes());
    } else {
        time = String(date.getHours()) + ":" + String(date.getMinutes());
    }
    document.querySelector("#klok").innerHTML = time;
    showActivity(time);
}
let lageTijden = [];
let hogeTijden = [];

function showActivity(actualDate) {
    let actualDateNum = Number(actualDate.charAt(0) + actualDate.charAt(1) + actualDate.charAt(3) + actualDate.charAt(4));
    for (let i = 0; i < tijden.length; i++) {
        if (tijden[i] <= actualDateNum) {
            lageTijden.push(tijden[i]);
        } else {
            hogeTijden.push(tijden[i]);
        }
    }
    let num = lageTijden[lageTijden.length - 1];
    let nextNum = tijden[tijden.indexOf(num) + 1];
    num = String(num);
    nextNum = String(nextNum);
    console.log(num);
    console.log(num.length);
    if (num.length != 4) {
        num = "0" + num[0] + ":" + num[1] + num[2];
    } else {
        num = num[0] + num[1] + ":" + num[2] + num[3];
    }
    if (nextNum.length != 4) {
        nextNum = "0" + nextNum[0] + ":" + nextNum[1] + nextNum[2];
    } else {
        nextNum = nextNum[0] + nextNum[1] + ":" + nextNum[2] + nextNum[3];
    }

    document.querySelector("#Activiteit").innerHTML = events[num];
    document.querySelector("#urenBegin").innerHTML = num;
    document.querySelector("#urenEinde").innerHTML = nextNum;
}
setInterval(displayTime, 1000);
