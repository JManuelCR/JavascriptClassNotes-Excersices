//Crear una función que reciba un arreglo y la devuelva en orden invertida

function inverArray(array = [2, 3, 3, 6, 7, 8]) { 
    invertedArray = array.reverse ();
    return invertedArray;
}

inverArray();
console.log(`This is the original array:\n  ${array}  \nAnd this is the iverted array:\n  ${invertedArray} \n\nby Mcr, Thanks`);

/** Usando el metodo visto en clase */

let invertedArray2 = [];

function inverArray2(array2 = [2, 3, 3, 6, 7, 8]) {   

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


let higherNUm = 0;

function selectHigherNumber(arrayToFilter = [2, 8, 6, 14, 7, 1]) {    
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

let counterOfhigherNumbers = 0;


function howManyHigherArraysHas(arrayToCompare = [6, 4, 5, 16, 22, 24, 3, 16]) {
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
let evenNumbersArray = [];

function whatEvenNumbersHas(arrayToExtractEvens = [3, 3, 4, 20, 31, 25, 24, 52, 2] ) {
    for(let i = 0; i <= arrayToExtractEvens.length - 1; i ++) {  
        let evenTestNumber = arrayToExtractEvens[i] % 2      
        if(evenTestNumber == 0){
            evenNumbersArray = evenNumbersArray.concat(arrayToExtractEvens[i]);
        }
    }
    return evenNumbersArray;
}

whatEvenNumbersHas([4, 2, 3, 48, 12, 9, 14]);
console.log('Los números pares encontrados en el arreglo son:\n' + evenNumbersArray);