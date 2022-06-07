
setInterval(setClock, 1000);
const hourNeedle = document.querySelector("#hr");
const minuteNeedle = document.querySelector("#mn");
const secondNeedle = document.querySelector("#sc");

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondNeedle, secondsRatio);
    setRotation(minuteNeedle, minutesRatio);
    setRotation(hourNeedle, hoursRatio);
}
setClock();