const buttons = document.querySelector(".buttons__section").children;
const timer = document.querySelector(".timer");
const seconds = document.querySelector(".seconds");
const milliseconds = document.querySelector(".milliseconds");
const minutes = document.querySelector(".minutes");

let Id = null;
let milliSecondsValue = -1;
let secondsValue = 0;
let minutesValue = 0;

function initiater() {
  if (milliSecondsValue < 9) {
    ++milliSecondsValue;
    milliseconds.innerHTML = milliSecondsValue;
  } else {
    if (milliSecondsValue == 9) {
      milliSecondsValue = -1;

      if (secondsValue == 59) {
        secondsValue = -1;

        if (minutesValue < 9) {
          ++minutesValue;
          minutes.innerHTML = "0" + minutesValue;
        } else {
          ++minutesValue;
          minutes.innerHTML = minutesValue;
        }
      }

      if (secondsValue < 9) {
        ++secondsValue;
        seconds.innerHTML = "0" + secondsValue;
      } else {
        ++secondsValue;
        seconds.innerHTML = secondsValue;
      }
    }
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
