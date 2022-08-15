//Crear una función que reciba un arreglo y la devuelva en orden invertida
let array = [2, 3, 3, 6, 7, 8];

function inverArray() { 
    invertedArray = array.reverse ();
    return invertedArray;
}

inverArray();
console.log(`This is the original array:\n  ${array}  \nAnd this is the iverted array:\n  ${invertedArray} \n\nby Mcr, Thanks`);

/** Usando el metodo visto en clase */

let array2 = [2, 3, 3, 6, 7, 8];
let invertedArray2 = [];

function inverArray2() {   

        for(let i = array2.length - 1; i >= 0; i --) {
            for(let j = array2.length-1-i; j < array2.length; j ++){
                invertedArray2 [j] = array2[i] ;
            }
           // invertedArray2 = invertedArray2.concat(array2[i]);
        }
   
   // console.log(invertedArray2);
    return invertedArray2;
 
}
inverArray2();
console.log(`This is the original array:\n  ${array2}  \nAnd this is the iverted array:\n  ${invertedArray2} \n\nby Mcr, Thanks`);


/**--------------------------------------------------------------------------------------- */
/** Crear una funcion que recibe un arreglo de números y devuelve el valor más grande que encuentra en el arreglo */


let arrayToFilter = [2, 8, 6, 14, 7, 1];
let higherNUm = 0;

function selectHigherNumber() {    
    for(let i = 0; i <= arrayToFilter.length - 1; i ++) {        
        if(higherNUm <= arrayToFilter[i]){
            higherNUm = arrayToFilter[i];   
        }
    }
    return higherNUm;
}

selectHigherNumber();
console.log(`El numero mayor en el arreglo es: ${higherNUm}`);

/** Crear una funcion que pueda contar cuantos elemenetos de un arreglo son mayoyes a  X valor
 * dado en los parametros
 *  */

let arrayToCompare = [6, 4, 5, 16, 22, 24, 3, 16];
let counterOfhigherNumbers = 0;


function howManyHigherArraysHas(numberToEvalute) {
    for(let i = 0; i <= arrayToCompare.length - 1; i ++) {        
        if(numberToEvalute < arrayToCompare[i]){
            counterOfhigherNumbers += 1;   
        }
    }
    return counterOfhigherNumbers;
}
howManyHigherArraysHas(7);
console.log('En el arreglo, hay ' + counterOfhigherNumbers + ' elementos mayores que el número evaluado');

/** Crear una funcion que reciba un arreglo de números y  regrese la lista de números pares
 * que se encuentran en el arreglo
  */

function howManyEvenNumbersHas() {
    
}