let index = 0;

function switchColor() {
  const color = ["#ffc107", "#198754", "#dc3545"]; //yellow, green, red;
  if (index < 3) {
    document.getElementsByClassName("btn")[0].style.background = color[index++];
  } else {
    index = 0;
    document.getElementsByClassName("btn")[0].style.background = color[index++];
  }
  document.getElementsByClassName("btn")[0].style.border = color[index];
}

//Bonus
setInterval(switchColor, 10000);
