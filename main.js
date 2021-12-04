const countDown = () => {
  const christmas = new Date("December 25, 2021 00:00:00").getTime();
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

  days.innerText = Math.floor(gap / day);
  hours.innerText = Math.floor((gap % day) / hour);
  minutes.innerText = Math.floor((gap % hour) / min);
  seconds.innerText = Math.floor((gap % min) / sec);
};

setInterval(countDown, 1000);
