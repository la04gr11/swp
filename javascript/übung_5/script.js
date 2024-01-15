let Zahl = Math.random() * 100;
let Random = Math.random() * 100;

if ((Zahl<Random)&&(Zahl<50)){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini" )
}

if ((Zahl<30)||(Random<30)){
    console.log("Eine der beiden ist kleiner als 30")
}

if ((Zahl<50)||(Random!=50)){
    console.log("Erste Zahl klein, zweite kein 50iger")
}