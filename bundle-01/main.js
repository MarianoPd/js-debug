/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
console.log('es_1');
for (let i = 0; i < 5; i++) { //for (let i = 0; i > 5; i++) {
    console.log(i);
}

//stampa su console i che va da 0 a 4
//c'è un errore logico perche avendo come condizione i > 5 non avremo neanche un ciclo


// ESERCIZIO 2
console.log('es_2');
function addIfEven(num) {
    if (num % 2 === 0) {  //if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
console.log(addIfEven(2));
console.log(addIfEven(3));

//se num è pari ritorna num + 5 altrimenti ritorna num
//l'errore è sintattico perché un solo uguale è simbolo di assegnazione e non di uguaglianza

// ESERCIZIO 3
console.log('es_3');
function loopToFive() {
    for (let i = 0; i < 5; i++) { //for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
loopToFive();
//la funzione stampa su console i numeri da 0 a 4
// errore sintattico: tra l'inizializazione della variabile, condizione e operazione vanno messi i punti e virgola. 



// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
console.log('es_4');
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length ; i++) {  //for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers[i] % 2 === 0) {  //if (numbers % 2 = 0); {
            evenNumbers.push(numbers[i]);  //evenNumbers.push(i);
        }        
    }
    return evenNumbers;
}
console.log(displayEvenNumbers());//displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

//la funzione crea un array di numeri e lo scorre, inserendo in un secondo array i numeri pari. Restituisce il secondo array.
// err_1: sintattico. punto e virgola in eccesso tra i parametri del for
// err_2: logico. fa il modulo dell'intero array e non di numbers[i]
// err_3: sintattico. punto e virgola in eccesso dopo la condizione if
// err_4: sintattico. un solo = per indicare uguaglianza
// err_5: logico. il return è all'interno del for, ritornerà alla fine del primo ciclo, il return va messo fuori dal for
// err_6: logico. senza consol.log non printa niente
// err_7: logico. se nella condizione del for si usa length-1 si esclude l'ultimo elemento
// err_8: logico. nell'if stiamo pushando l'indice e non l'elemento dell'array

