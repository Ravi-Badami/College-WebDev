"use strict";
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");
const hour = document.querySelector(".hour");

function setDate() {
  const now = new Date();
  const secDegreeSec = now.getSeconds();
  const secDegreeMin = now.getMinutes();
  const secDegreeHour = now.getHours();
  hr_rotation = 30 * secDegreeHour + secDegreeMin / 2;
  min_rotation = 6 * secDegreeMin;
  sec_rotation = 6 * secDegreeSec;

  //   console.log(secDegreeSec);
  sec.style.transform = `rotate(${sec_rotation}deg)`;
  min.style.transform = `rotate(${min_rotation}deg)`;
  hour.style.transform = `rotate(${hr_rotation}deg)`;
}

setInterval(setDate(), 1000);
