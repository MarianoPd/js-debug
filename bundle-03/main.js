/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }, //mancava la virgola
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) => auto.type.toUpperCase() === 'BENZINA');  // >= al posto di =>

const dieselCars = cars.filter( (auto) => auto.type.toUpperCase() === 'DIESEL'); // tolte {} e ;

const otherCars = cars.filter( (auto) => {
    return auto.type.toUpperCase() !== 'BENZINA' && auto.type.toUpperCase() !== 'DIESEL'; // || al posto di &&
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log('*******************************'); // mi piace un'acpetto consistente
console.log(otherCars);

// il programma prende opera su un array di oggetti, lo filtra 3 volte con diversi parametri creadndo altri 3 array, dopo di che printa gli array

//err_1: sintattico. nell' array di oggetti mancava una virgola
//err_2: sintattico. >= al posto di => nell'inizializzazione di gasolineCars
//err_3: logico. nell'array di oggetti il type è inconsistente nell'uppercase. Conviene usare toUppercase e mettere in allCapps le stringhe cercate
//err_4: sintattico. nel filter di dieselCars non vanno messe le graffe e il punto e virgola. Oppure va messo come return.
//err_5: logico. nel filther di otherCars || (or) non va bene ci serve && (and) per indicare che deve soddisfare entrambe le condizioni
//err_6???: mancava il terzo log con gli asterischi?