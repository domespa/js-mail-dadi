// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?



// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const rollDice = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
];
console.log(rollDice[0]) // INDICE 0
console.log(rollDice[1]) // INDICE 1

if (rollDice[0] > rollDice[1]) {
    console.log("giocatore ha vinto")
} else if (rollDice[0] < rollDice[1]) {
    console.log("cpu ha vinto")
} else {
    console.log("parità")
}
