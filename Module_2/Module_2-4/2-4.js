let numbers = [];
let num;

while (true) {
    num = Number(prompt("Enter number"));

    if (num === 0) {
        break;
    }

    numbers.push(num);
}

numbers.sort(function(a, b) {
    return b - a;
});

console.log(numbers);