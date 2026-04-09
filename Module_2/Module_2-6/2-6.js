function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let dice;

document.write("<ul>");

do {
    dice = rollDice();
    document.write("<li>" + dice + "</li>");
} while (dice != 6);

document.write("</ul>");