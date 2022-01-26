const buttons = document.querySelector(".buttons__section").children;
const timer = document.querySelector(".timer");
const seconds = document.querySelector(".seconds");
const milliseconds = document.querySelector(".milliseconds");
const minutes = document.querySelector(".minutes");

let Id = null;
let milliSecondsValue = 0;
let secondsValue = 0;
let minutesValue = 0;

function initiater() {
  if (milliSecondsValue < 10) {
    milliseconds.innerHTML = milliSecondsValue;
    ++milliSecondsValue;
  } else {
    if (secondsValue < 10) {
      seconds.innerHTML = "0" + secondsValue;
    } else {
      if (secondsValue == 60) {
        secondsValue = 0;
        ++minutesValue;
        if (minutesValue < 10) {
          minutes.innerHTML = "0" + minutesValue;
        } else {
          minutes.innerHTML = minutesValue;
        }
      }
      seconds.innerHTML = secondsValue;
    }
    ++secondsValue;
    milliSecondsValue = 0;
  }
}

function handleButtonCLick(type) {
  if (type === "Start") {
    if (Id === null) Id = setInterval(initiater, 100);
  } else if (type == "Stop") {
    clearInterval(Id);
    Id = null;
    secondsValue = secondsValue;
    minutesValue = minutesValue;
    milliSecondsValue = milliSecondsValue;
  } else {
    clearInterval(Id);
    Id = null;
    milliseconds.innerHTML = "0";
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    milliSecondsValue = 0;
    secondsValue = 0;
    minutesValue = 0;
  }
}

for (let btn of buttons) {
  btn.addEventListener("click", () => {
    handleButtonCLick(btn.innerHTML);
  });
}
