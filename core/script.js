const days = document.querySelector(".days-timer");
const hours = document.querySelector(".hours-timer");
const minutes = document.querySelector(".minutes-timer");
const seconds = document.querySelector(".seconds-timer");

function getData() {
  let futureDate = new Date("2021-08-04 00:00"),
    nowDate = new Date(),
    timeSeconds = Math.abs(futureDate - nowDate) / 1000,
    timeDays = Math.floor(timeSeconds / 60 / 60 / 24),
    timeHours = Math.floor((timeSeconds / 60 / 60) % 24),
    timeMinutes = Math.floor((timeSeconds / 60) % 60),
    timeSecond = Math.floor(timeSeconds % 60),
    milliSeconds = Math.round((timeSeconds - Math.floor(timeSeconds)) * 1000);

  days.innerHTML = timeDays;
  hours.innerHTML = timeHours;
  minutes.innerHTML = timeMinutes;
  seconds.innerHTML = timeSecond;
}

const interval = setInterval(() => {
  getData();
}, 500);

document.addEventListener("DOMContentLoaded", interval);
