function getColor() {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const hexaCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = hexaCode;
  document.getElementById("hexa-code").innerHTML = hexaCode;
  navigator.clipboard.writeText(hexaCode);
}

// const headingName = document.getElementById("hello-world").innerHTML;
// console.log(headingName);

document.getElementById("btn").addEventListener("click", getColor);

getColor();
