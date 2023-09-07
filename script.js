const now = new Date();
const day = now.getDay();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const specificdate = days[day];
const milliseconds = now.getUTCMilliseconds();

document.getElementById("date").innerText = specificdate;
document.getElementById("Time").innerText = milliseconds;