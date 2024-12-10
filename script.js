// Funzione che restituisce la somma di due numeri
// function sum(num1, num2) {
//     return num1 + num2;
// }
const sum = (num1, num2) => num1 + num2;

// Funzione che restituisce true se il numero passato come argomento è pari
// altrimenti restituisce false
// function isEven(num) {
//     return num % 2 === 0;
// }
const isEven = (num) => num % 2 === 0;

// Funzione che dato un range di numeri, restituisca un numero randomico (compreso fra il range)
function getRandomNumber(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

// Funzione che data una parola in ingresso, restiuisce la parola capovolta
// function reverseWord(word) {
//     let wordReverse = "";
//     for(let i = word.length - 1; i >= 0; i--) {
//         wordReverse = wordReverse + word[i]
//     }
//     return wordReverse;
// }

const reverseWord = (word) => {
    let wordReverse = "";
    for(let i = word.length - 1; i >= 0; i--) {
        wordReverse = wordReverse + word[i]
    }
    return wordReverse;
}

// Funzione che cerca un elemento in un array e restiuisce true se è prensente altrimenti false
function isElementInArray(array, elementToFind) {
    let isElementInList = false;

    for(let i = 0; i < array.length && isElementInList === false; i++) {
        const currentElement = array[i];
        if(currentElement === elementToFind) {
            isElementInList = true;
        }
    }

    return isElementInList;
}

// PROGRAMMA PRINCIPALE



console.log(sum(3,5))