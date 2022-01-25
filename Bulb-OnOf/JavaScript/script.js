//Light Status Function:
function lightStatus(match) {
  let lightStatus = document.getElementById("bulbstatus");
  let bulb, imgSrc;
  for (let i = 1; i <= 6; i++) {
    setTimeout(() => {
      if (match === 0) {
        imgSrc = "bulboff.gif";
        lightStatus.textContent = "bulb off";
      } else {
        imgSrc = "bulbon.gif";
        lightStatus.textContent = "bulb on";
      }
      bulb = document.getElementById(`light${i}`);
      bulb.src = imgSrc;
    }, i * 200);
  }
}
