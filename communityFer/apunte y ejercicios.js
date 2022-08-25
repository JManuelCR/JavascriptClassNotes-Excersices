function saludar(name) {
     let saludo [] = console.log('Hola ' + name + ' como estas?');
    return saludo;
}

saludar('manu');


// console.log no es un retorno no regresa nada, en cambio si lo regreso con return
// lo regresamos opcionalmente a una variabble fuera de la funcion


//arrow function 
/** UNa arrow function es una funcion que tiene una sugar sintax
 * la funcion es como una funcion declarada
 * son exactamente lo mismo, que cosas puede tener un arrow function
 * como alguna condiciones
 * por ejemplo
 */

//si la arrow function recibe un unico parametro podemos omitir los parentesis

const formtted = word => {
    return word.toLowerCase();
}

//cuando se tiene mas de un parametro de entrada debemos porner poarentesis

// si lo que estamos ejecutando en la funcion se puede reducir a una sola linea
// podemos okomitir las llaves y el return
// ejemplo

const restar = (num1, num2) =>{
    return num1 - num2;
}

const restar2 = (num1, num2) => num1 - num2;

//CALLBACCKS

// un callback es la declaracion de una funsion que va a pasar como parametro a otra funcion para ser ejecutada posteriormente

/** ES DECIR aca se para la declaracion de una funcion como parametro de una fuuncion que en el caso de dos funciones prentado de la manera de pasar parametro seria la funsion principal */

function irAlSuperMercado(callback) {
    console.log('llendo al supermercado');
    console.log('llegando al mercado');
    callback();
}


function avisar() {
    console.log('Mamá, ya llegue al supermercado')
}

irAlSuperMercado(avisar);


function map(myArray, callBack) {
    let newArray = [];
    for(let i = 0; i < myArray.length; i++) {
        const elementCurrent = myArray[i];
        const newElement = callBack(elementCurrent);
        newArray.push(newElement);
    }
    return newArray;
}

const numbersArray = [2,5,8,8];

const numberDuplicated = (number) => {
    return number * 2;
}

const numbersDuplicated = map(numbersArray, numberDuplicated);
const numbersDuplicated2 = map(numbersArray, (number) => number * 2);

console.log(numbersDuplicated);
console.log(numbersDuplicated2);
console.log(map(numbersArray, (number) => number * 2));




//____________-___________________________-________________________-_________________________

function map(myArray, callBack) {
    let newArray = [];
    for(let i = 0; i < myArray.length; i++) {
        const elementCurrent = myArray[i];
        const newElement = callBack(elementCurrent);
        newArray.push(newElement);
    }
    return newArray;
}

const numbersArray = [2,5,8,8];

const numberLessOne = (number) => {
    return number - 1;
}

const numbersDuplicated = map(numbersArray, numberLessOne);
const numbersDuplicated2 = map(numbersArray, (number) => number - 1);

console.log(numbersDuplicated);
console.log(numbersDuplicated2);
console.log(map(numbersArray, (number) => number - 1));


// ['Jonatan', 'Manu', 'Annie', 'Cin'] -> ['J', 'M', 'A', 'C']
// ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva'] -> ['M. C. R.', 'C. R. V.', 'F. P. L.']


//___________________-_________________-___________________-_______________________-____________



function map(myArray, callBack) {
    let newArray = [];
    for(let i = 0; i < myArray.length; i++) {
        const elementCurrent = myArray[i];
        const newElement = callBack(elementCurrent);
        newArray.push(newElement);
    }
    return newArray;
}

const namesArray = ['Jonatan', 'Manu', 'Annie', 'Cin'];

const initCharacter = (name) => {
    return name [0];
}

const firstLetter = map(namesArray, initCharacter);
const firstLetter2 = map(namesArray, (name) =>  name [0]);

console.log(firstLetter);
console.log(firstLetter2);
console.log(map(namesArray, (name) => name [0]));


// _____________-____________________-__________________-___________________________-____________



function map(myArray, callBack) {
    let newArray = [];
    for(let i = 0; i < myArray.length; i++) {
        const elementCurrent = myArray[i];
        const newElement = callBack(elementCurrent);
        newArray.push(newElement);
    }
    return newArray;
}

const namesArray = ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva'];

const initCharacter = (name) => {
    let splitName=name.split(" "); 
    console.log(splitName);
    chartInit = splitName[0].charAt(0)+"." + "" +splitName[1].charAt(0)+"." + "" +splitName[2].charAt()+".";
    return chartInit;
}

const firstLetter = map(namesArray, initCharacter);
const firstLetter2 = map(namesArray, (name) =>  chartInit);

console.log(firstLetter);
console.log(firstLetter2);
console.log(map(namesArray, (name) => chartInit));
