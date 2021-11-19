
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

let Zahl1, Zahl2, summe, differenz;

Zahl1 = prompt("Bitte die Zahl eingeben");
Zahl2 = prompt("Bitte die andere Zahl eingeben");
parseInt(Zahl1);
parseInt(Zahl2);

// summe = parseInt(Zahl1) + parseInt(Zahl2);
// console.log("Das Ergebnis ist: " + summe);

differenz = parseInt(Zahl1) - parseInt(Zahl2);
console.log("Das Ergebnis ist: " + differenz);