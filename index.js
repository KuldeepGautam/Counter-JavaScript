const endDate = "12 february 2024 10:00 AM";

document.getElementById("end-date").innerHTML = endDate;
const clock = () => {
  const end = new Date(endDate);
  const now = new Date();

  const difference = (now - end) / 1000;
  console.log("Difference: ", Math.floor(difference / 3600 / 24));

  console.log("End Date:", end);
  console.log("Current Date:", now);
};

clock();

// Note:
// 1 Day = 24 hrs
// 1 Hrs = 60 minute
// 1 Minute = 60 second
// 60 second = 3600 second
