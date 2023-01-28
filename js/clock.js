const date = document.querySelector("#today");
const clock = document.querySelector("#clock");

const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

function getClock() {
    const today = new Date();

    const year = today.getFullYear();
    const month = ("0" + (1 + today.getMonth())).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    const week = WEEKDAY[today.getDay()];

    date.innerHTML = `${year}-${month}-${day} ${week}`;

    const hours = today.getHours() % 12 ? today.getHours() % 12 : 12;
    const ampm = today.getHours() >= 12 ? "오후" : "오전";
    const minutes = String(today.getMinutes()).padStart("2", 0);
    clock.innerHTML = `${ampm} ${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
