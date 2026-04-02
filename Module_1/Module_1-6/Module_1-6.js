if (confirm("Should I calculate the square root?")) {

    let n = prompt("Number?");

    if (n < 0)
        document.getElementById("b").innerHTML = "Not defined";
    else
        document.getElementById("b").innerHTML = Math.sqrt(n);

} else {
    document.getElementById("b").innerHTML = "Not calculated";
}

