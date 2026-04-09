function rollDice(side) {
    return Math.floor(Math.random() * side) + 1;
}

let side = Number(prompt("Enter dice sides"));
let result;

document.write("<ul>");

do {
    result = rollDice(side);
    document.write("<li>" + result + "</li>");
} while (result != side);

document.write("</ul>");