let y = prompt("Year?");

if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)
    document.getElementById("a").innerHTML = "Leap year";
else
    document.getElementById("a").innerHTML = "Not leap year";

