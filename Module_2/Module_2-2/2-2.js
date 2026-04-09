let amount = Number(prompt("How many participants?"));
let names = [];

for (let i = 0; i < amount; i++) {
    names[i] = prompt("Enter name");
}

names.sort();

document.write("<ol>");

for (let i = 0; i < names.length; i++) {
    document.write("<li>" + names[i] + "</li>");
}

document.write("</ol>");