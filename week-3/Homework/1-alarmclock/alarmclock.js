function twoDigitsNumber (num) {
  return ('0' + num).slice(-2);
};

function formatTimeInMinutes (time) {
    const minutes =  twoDigitsNumber(Math.trunc(time / 60));
    const seconds = twoDigitsNumber(time % 60);
    return (minutes + ":" + seconds);
}

function setAlarm() {
  let alarmSet = document.getElementById("alarmSet").value;
  const timeRemaining = document.getElementById("timeRemaining");
  const timerId = setInterval(() => {
    if (alarmSet >= 0) 
      timeRemaining.innerText = `Time Remaining: ${formatTimeInMinutes(alarmSet--)}`;
    else {
      playAlarm();
      clearInterval(timerId);
    }
  }, 1000 );


}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
