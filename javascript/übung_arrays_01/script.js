

function dna(s) {
    let countA = 0, countC = 0, countG = 0, countT = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'A') {
            countA++;
        } else if (s[i] == 'C') {
            countC++;
        } else if (s[i] == 'G') {
            countG++;
        } else if (s[i] == 'T') {
            countT++;
        }
    }

    return countA + " " + countC + " " + countG + " " + countT;
}

let input = "AACT";
console.log(dna(input));