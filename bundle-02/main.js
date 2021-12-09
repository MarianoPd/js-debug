/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge(myAge) { //function checkAge() {
    //const myAge = 32;
    let message = '';  //const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;  //message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Sei maggiorenne!'; //message = 'Hai più di 18 anni!';
    }
    console.log(message);
}
checkAge(32);
//la funzione verifica se myAge è minore di 18 e printa un messaggio altrimenti ne printa un'altro
// err_1: logico. se message è costante non si può modificare
// err_2: logico. manca il log
// err_3: logico. il secondo messaggio è sbagliato in quanto potrebbe avere 18 anni 
// err_4: logico. per essere una funzione riutilizzabile myAge dovrebbe essere un parametro

// ESERCIZIO 2
const colors = ['blue', 'red', 'yellow', 'green', 'black'];
function printColorsNumber(colors) {
    //const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber(colors);  //printColorsNumber();

//printa il numero di colori in colors
//err_1: sintattico. length è scritto sbagliato
//err_2: logico. per rendere riutilizzabile la funzione inizializiamo la variabile fuori dalla funzione e la richiamiamo come parametro


// ESERCIZIO 3
function addNumbers(num) {  //function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = parseInt(userNumber) + num;  //const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers(12); //addNumbers();
//restituisce il numero inserito con prompt piu' 12
//err_1: logico. userNumber è una stringa, non un numero. Dobbiamo usare il parseInt
//err_2: logico. possiamo renderla riutilizzabile con l'uso di un parametro

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    let userEmail = prompt('Inserisci il tuo indirizzo email');
    
    let grantAccess = 'false';
    
    if (addresses.includes(userEmail)) {
        grantAccess = true; //grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

//manda un prompt per un'email e verifica se presente nell'elenco che ha già. In entrambi i casi stampa un messaggio con il risultato

// err_1: logico. true è un valore non va scritto come stringa con apici



// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;
    if (userEmail.length > 5) { 
        for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];
            
        //if (userEmail.length > 5) {
                
            if (email === userEmail) {
                grantAccess = true;            
                
            }
        
        }   // mancava
    }
    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}

checkAccessImproved();

//riceve da prompt una stinga e verifica che sia piu' grande di 5 char e scorre un array di stringhe per verificare se e presente. In entrambi i casi stampa un messaggio con il risultato
//err_1: sintattico. manca una parentesi graffa
//err_2: logico. true è scitto come stringa
//err_3: se vogliamo verificare la lunghezza della stringa in input possiamo farlo senza fare n cicli



























