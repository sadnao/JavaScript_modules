let candidates = [];

let candidateCount = Number(prompt("Enter number of candidates"));

for (let i = 0; i < candidateCount; i++) {
    let name = prompt("Name for candidate " + (i + 1));

    candidates.push({
        name: name,
        votes: 0
    });
}

let voterCount = Number(prompt("Enter number of voters"));

for (let i = 0; i < voterCount; i++) {
    let vote = prompt("Voter " + (i + 1) + ", who will you vote for?");

    if (vote !== "") {
        for (let j = 0; j < candidates.length; j++) {
            if (candidates[j].name === vote) {
                candidates[j].votes++;
            }
        }
    }
}

candidates.sort(function(a, b) {
    return b.votes - a.votes;
});

console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");

console.log("results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(candidates[i].name + ": " + candidates[i].votes + " votes");
}