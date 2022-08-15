//Crear una función que reciba un arreglo y la devuelva en orden invertida

function inverArray(array = [2, 3, 3, 6, 7, 8]) {
  invertedArray = array.reverse();
  console.log(
    `This is the original array:\n  ${array}  \nAnd this is the iverted array:\n  ${invertedArray} \n\nby Mcr, Thanks`
  );
  return;
}

inverArray();


/** Usando el metodo visto en clase */

function inverArray2(array2 = [2, 3, 3, 6, 7, 8]) {
  let invertedArray2 = [];
  for (let i = array2.length - 1; i >= 0; i--) {
    for (let j = array2.length - 1 - i; j < array2.length; j++) {
      invertedArray2[j] = array2[i];
    }
    // invertedArray2 = invertedArray2.concat(array2[i]);
  }
  console.log(
    `This is the original array:\n  ${array2}  \nAnd this is the iverted array:\n  ${invertedArray2} \n\nby Mcr, Thanks`
  );
  return invertedArray2;
}

inverArray2();

/**--------------------------------------------------------------------------------------- */
/** Crear una funcion que recibe un arreglo de números y devuelve el valor más grande que encuentra en el arreglo */

function selectHigherNumber(arrayToFilter = [2, 8, 6, 14, 7, 1]) {
  let higherNUm = 0;
  for (let i = 0; i <= arrayToFilter.length - 1; i++) {
    if (higherNUm <= arrayToFilter[i]) {
      higherNUm = arrayToFilter[i];
    }
  }
  console.log(`El numero mayor en el arreglo es: ${higherNUm}`);
  return;
}

selectHigherNumber();

/** Crear una funcion que pueda contar cuantos elemenetos de un arreglo son mayoyes a  X valor
 * dado en los parametros
 *  */

function howManyHigherArraysHas(arrayToCompare = [6, 4, 5, 16, 22, 24, 3, 16]) {
  let counterOfhigherNumbers = 0;
  for (let i = 0; i <= arrayToCompare.length - 1; i++) {
    if (numberToEvalute < arrayToCompare[i]) {
      counterOfhigherNumbers += 1;
    }
  }
  return;
}
howManyHigherArraysHas(7);
console.log(
  "En el arreglo, hay " +
    counterOfhigherNumbers +
    " elementos mayores que el número evaluado"
);

/** Crear una funcion que reciba un arreglo de números y  regrese la lista de números pares
 * que se encuentran en el arreglo
 */
let evenNumbersArray = 0;

function whatEvenNumbersHas(
  arrayToExtractEvens = [3, 3, 4, 20, 31, 25, 24, 52, 2]
) {
  console.log("Los números pares encontrados en el arreglo son:\n");
  for (let i = 0; i <= arrayToExtractEvens.length - 1; i++) {
    let evenTestNumber = arrayToExtractEvens[i] % 2;
    if (evenTestNumber == 0) {
      evenNumbersArray = arrayToExtractEvens[i];
      console.log(evenNumbersArray);
    }
  }
  return;
}

whatEvenNumbersHas([4, 2, 3, 48, 12, 9, 14]);

/** Crear una función que pueda contar cuantas veces aparece un elemento
 * dado en los parametros en un arreglo también dado en sus parámetros
 */

function howManyTimesElementApeear(inputArray = [], repeatElement) {
    let repeatElementCount = 0;
    for (let i = 0; i <= inputArray.length - 1; i++) {
        if (repeatElement == inputArray[i]) {
          repeatElementCount += 1;
        }
      }
      console.log(`El elemento ${repeatElement} se repite ${repeatElementCount} veces en el arreglo`);
      return;
}

howManyTimesElementApeear([4, 4, 2, 3, 4, 6, 5, 4],3);


/** Crear una función que recibe un arreglo de strings y um string, la funcion devuelve true si ese string 
 * se encuentra en el arreglo y false si no se encuentra
 */

 function findStringIntoTheArray(inputArray = ['Hola', 'soy', 'Manu', 'y', 'soy', 'koder'], stringToSearch = 'Hola') {
  let isTheStringIntoTheArray = false;
  for (let i = 0; i <= inputArray.length - 1; i++) {
      if (stringToSearch == inputArray[i]) {
        isTheStringIntoTheArray = true ;
      }
    }
    console.log(isTheStringIntoTheArray)
    return;
}

findStringIntoTheArray(['hola', 'como', 'estas', '?'], '?');



/**Crear un arreglo que parta un arrerglo por la mitad y retorne la segunda mitad del arreglo  */