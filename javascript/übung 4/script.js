const ersteZahl = Math.floor(Math.random() * 101);
const zweiteZahl = Math.floor(Math.random() * 101);

console.log("hier sind zwei Zufallszahlen:");
console.log("Zahl 1:" + ersteZahl);
console.log("Zahl 2:" + zweiteZahl);

if (ersteZahl < zweiteZahl && ersteZahl < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und außerdem kleiner als 50");
}

if (ersteZahl < 30 || zweiteZahl < 30) {
    console.log("mindestens eine der beiden Zahlen ist kleiner als 30");
}

if (ersteZahl < 50 && zweiteZahl !== 50) {
    console.log("die erste Zahl ist klein, und die zweite ist nicht genau 50");
}
