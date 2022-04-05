const countDown = () => {
  const christmas = new Date("December 25, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = christmas - now;

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  // 1000 milliseconds = 1 second

  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;

  days.innerText = String(Math.floor(gap / day));
  hours.innerText = String(Math.floor((gap % day) / hour));
  minutes.innerText = String(Math.floor((gap % hour) / min));
  seconds.innerText = String(Math.floor((gap % min) / sec));
};

setInterval(countDown, 1000);
