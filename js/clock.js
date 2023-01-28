const date = document.querySelector("#today");
const clock = document.querySelector("#clock");

const WEEKDAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getClock() {
    const today = new Date();

    const year = today.getFullYear();
    const month = ("0" + (1 + today.getMonth())).slice(-2);
    const day = ("0" + today.getDate()).slice(-2);
    const week = WEEKDAY[today.getDay()];

    date.innerHTML = `${year}-${month}-${day} ${week}`;

    const hours = today.getHours() % 12 ? today.getHours() % 12 : 12;
    const ampm = today.getHours() >= 12 ? "PM" : "AM";
    const minutes = String(today.getMinutes()).padStart("2", 0);
    clock.innerHTML = `${hours}:${minutes} ${ampm}`;
}

getClock();
setInterval(getClock, 1000);
