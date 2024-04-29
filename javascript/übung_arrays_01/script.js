/* The program:
The nucleotides inside a DNA sequence can be represented by a string composed by A, C, G and T. A sample string representing a DNA sequence is "ATGCTTCAGAAAAGGTCAGCG".

Your task is to count how many times the symbols A, C, G and T appear in the string s.


INPUT:
A single line, composed of A, C, G and T.

OUTPUT:
The number of times A, C, G and T appear in the string s, separated by a space.

CONSTRAINTS:
0 < len(s) < 1000

EXAMPLE:
Input
AACT

Output
2 1 0 1 */


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