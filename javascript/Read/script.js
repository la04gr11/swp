import { createInterface } from "readline";

const readline = createInterfacel({
input: process.stdin, 
output: process.stdout,
});

const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve (userRes);
      readline. close ();
    });
    });
};

console.log("enter your name");
let inputOfUser = await readlineAsync();
console.log(inputOfUser);