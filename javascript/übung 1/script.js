let banana = "Banane";
let apple = "Apple";

const bananaPricePerKilo = 2.14;
const applePricePerKilo = 3.43;

const bananenGewicht = 0.22;
const äpfelGewicht = 0.34;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel 
console.log("Anzahl Bananen pro Kilo: " + (1 / bananaPricePerKilo));
console.log("Anzahl Äpfel pro Kilo: " + (1 / applePricePerKilo));
console.log("Preis pro Banane: " + bananaPricePerKilo);
console.log("Preis pro Apfel: " + applePricePerKilo);

// Preis von 8 Äpfeln 
const Äpfelanzahl = 8;
let preisVonÄpfel = Äpfelanzahl * applePricePerKilo * äpfelGewicht;
console.log("8 Äpfel kosten " + Math.round(preisVonÄpfel) + " Euro");

// Preis von 17 Bananen 
const BananenAnzahl = 17;
let preisVonBananen = BananenAnzahl * bananaPricePerKilo * bananenGewicht;
console.log("17 Bananen kosten " + Math.round(preisVonBananen) + " Euro");

// Preis von 1 Tonne Äpfel
const weightInApples = 1000;
let totalPriceApple = weightInApples * äpfelGewicht * applePricePerKilo;
console.log("1 Tonne Äpfel kosten " + totalPriceApple + " Euro");


// Preis von 1 Tonne Bananen 
const weightInBananas = 1000;
let totalPriceBananas = weightInBananas * bananenGewicht * bananaPricePerKilo;
console.log("1 Tonne Bananen kosten " + totalPriceBananas + " Euro");









