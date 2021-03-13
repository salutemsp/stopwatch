const stopWatchEl = document.querySelector(".stopwatch");
const hrsEl = document.querySelector(".hrs");
const minsEl = document.querySelector(".mins");
const secsEl = document.querySelector(".secs");

const buttons = document.querySelector(".buttons");
const btnStart = document.querySelector(".start");
const btnReset = document.querySelector(".reset");

let sec = 0;
let min = 0;
let hr = 0;

let stopwatch;
const displayTime = function () {
  secsEl.textContent = String(sec).padStart(2, "0");
  minsEl.textContent = String(min).padStart(2, "0");
  hrsEl.textContent = String(hr).padStart(2, "0");
};
const startTimer = function () {
  stopWatch = setInterval(() => {
    sec += 1;
    if (sec === 60) {
      min += 1;
      sec = 0;
    }
    if (min === 60) {
      hr += 1;
      min = 0;
    }

    displayTime();
  }, 1000);
};
let isTimerRunning = false;
btnStart.addEventListener("click", function (e) {
  if (!isTimerRunning) {
    startTimer();
    btnStart.textContent = "Pause";
    isTimerRunning = true;
  } else {
    clearInterval(stopWatch);
    btnStart.textContent = "Start";
    isTimerRunning = false;
  }
});

btnReset.addEventListener("click", function () {
  btnStart.textContent = "Start";

  clearInterval(stopWatch);
  sec = 0;
  min = 0;
  hr = 0;
  isTimerRunning = false;
  displayTime();
});
