// gib nur die Wörter aus, die kein e UND kein r enthalten

const data3 = ["Hans", "ist", "ein", "netter", "Kerl"];

for (let i = 0; i < data3.length; i++) {
  if (!data3[i].includes("e") && !data3[i].includes('r')) {
    console.log(data3[i]);
  }
}