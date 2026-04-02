let start = prompt("Start year:");
let end = prompt("End year:");

for (let year = start; year <= end; year++) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById("list").innerHTML += "<li>" + year + "</li>";
    }

}