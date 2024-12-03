// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.

const emails = [
    'email@gmail.com',
    'golia@msn.com',
    'mouse@virgilio.it',
    'casse@libero.it',
    'tastiera@hotmail.com',
    'js@live.it',
    'bootstrap@alice.it'
];

// Chiedi all’utente la sua email,

let urEmail = prompt("Inserisci la tua email");

// controlla che sia nella lista di chi può accedere,

let isThere = false

for (let i = 0; i < emails.length && isThere === false; i++) {
    if (emails[i] === urEmail) {
        isThere = true
    }
}

if (isThere) {
    alert("SEI NELLA LISTA")
} else {
    alert("NON SEI NELLA LISTA")
}