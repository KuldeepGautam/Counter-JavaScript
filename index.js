const endDate = "14 February 2024 10:30 PM";

document.getElementById("end-date").innerHTML = endDate;

const inputs = document.querySelector("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const Diff = (end - now) / 1000;
  console.log(Diff);
  // Converted into days
  inputs[0].value = Math.floor(Diff / 3600 / 24);
  inputs[1].value = Math.floor(Diff / 3600) % 24;
  inputs[2].value = Math.floor(Diff / 60) % 60;
  inputs[3].value = Math.floor(Diff) % 60;

  //   console.log(result);
  //   console.log("End Date: ", end);
  //   console.log("Current Date: ", now);
}

clock();
