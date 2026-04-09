function even(arr) {
    let evenArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenArr.push(arr[i]);
        }
    }

    return evenArr;
}

let nums2 = [2, 7, 4];

let answer = even(nums2);

console.log(nums2);
console.log(answer);