
const n = parseInt(prompt());

const temperatures = prompt().split("  ").map(x => parseInt(x));

let closestTemp = null;

for (let temp of temperatures) {
    
    if (closestTemp === null || Math.abs(temp) < Math.abs(closestTemp)) {
        closestTemp = temp;
    }
}


console.log(closestTemp);