const calendarButton = document.querySelector(".calendar-button");
const calendar = document.querySelector("#calendar");
const calendarTitle = document.querySelector(".calendar-title");
const calendarWeekdays = document.querySelector(".calendar-weekdays");
const calendarDays = document.querySelector(".calendar-days");

let calendarVisible = false;
const date = new Date();

function printTitle() {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = date.getFullYear();
  const month = monthList[date.getMonth()];

  calendarTitle.innerText = `${year} ${month}`;
}

function printWeekdays() {
  const dayInfo = ["SUN", "MON", "TUE", "WEB", "THU", "FRI", "SAT"];
  for (let i of dayInfo) {
    const weekdayItem = document.createElement("li");
    weekdayItem.innerText = i;
    calendarWeekdays.appendChild(weekdayItem);
  }
}

function printDays() {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const firstWeekdayOfMonth = new Date(year, month, 1).getDay();
  const lastDayOfMonth = new Date(year, month, 0).getDate();

  let dayCounter = 1;
  // 요일에 맞는 날짜를 채우기 위해 달의 첫 날 요일을 더해줌
  for (let i = 0; i < firstWeekdayOfMonth + lastDayOfMonth; i++) {
    const dayItem = document.createElement("li");

    if (i >= firstWeekdayOfMonth) {
      if (dayCounter == day) dayItem.classList.add("today");
      dayItem.innerText = `${dayCounter++}`;
    }
    calendarDays.appendChild(dayItem);
  }
}
printTitle();
printWeekdays();
printDays();

function showCalendar() {
  if (!calendarVisible) {
    calendar.classList.remove("hidden");
    calendarButton.innerText = "Hide Calendar";

    calendarVisible = true;
  } else {
    calendarVisible = false;
    calendar.classList.add("hidden");
    calendarButton.innerText = "Show Calendar";
  }
}
calendarButton.addEventListener("click", showCalendar);
