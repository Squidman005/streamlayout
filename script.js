function updateTime() {
  const now = new Date();
  document.getElementById("clock").innerText =
    now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();
