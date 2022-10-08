const hourE1 = document.querySelectorAll("#hour");
const minuteE1 = document.querySelectorAll("#minutes");
const secondE1 = document.querySelectorAll("#seconds");
const ampmE1 = document.querySelectorAll("#ampm");

function updateClock() {
  let h = new Date().getHours();
  let s = new Date().getSeconds();
  let m = new Date().getMinutes();
  let ampm = "AM";
  if (h === 12) {
    h = 12;
    ampm = "PM";
  } else if (h > 12) {
    h = h - 1;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hourE1.textContent = h;
  minuteE1.textContent = m;
  secondE1.textContent = s;
  ampmE1.textContent = ampm;
  setTimeout(function () {
    updateClock();
  }, 1000);
}
updateClock();
