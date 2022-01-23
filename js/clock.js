const today = document.querySelector("#date");
const clock = document.querySelector("h2#clock");

function getClock() {
  const dayInfo = ["SUN", "MON", "TUE", "WEB", "THU", "FRI", "SAT"];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = dayInfo[date.getDay()];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  today.innerText = `${year}.${month}.${day} ${weekday}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
