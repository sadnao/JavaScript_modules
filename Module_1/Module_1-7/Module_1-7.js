let rolls = prompt("How many dice rolls?");
let sum = 0;

for (let i = 0; i < rolls; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
}

document.getElementById("result").innerHTML = "Sum = " + sum;