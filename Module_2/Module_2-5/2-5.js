let arr = [];
let number;

while (true) {
    number = Number(prompt("Enter number"));

    if (arr.includes(number)) {
        console.log("Already entered");
        break;
    }

    arr.push(number);
}

arr.sort(function(a, b) {
    return a - b;
});

console.log(arr);