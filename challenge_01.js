
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

let zahl1, zahl2;
let summe, differenz;

zahl1 = prompt("Bitte die Zahl eingeben");
zahl2 = prompt("Bitte die andere Zahl eingeben");
parseInt(zahl1); // parseInt = Als Zahl erkennen, ohne Komma
parseInt(zahl2);

summe = parseInt(zahl1) + parseInt(zahl2);
console.log("Das Ergebnis ist: " + summe);

// differenz = parseInt(zahl1) - parseInt(zahl2);
// console.log("Das Ergebnis ist: " + differenz);