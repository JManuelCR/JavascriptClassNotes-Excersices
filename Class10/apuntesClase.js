//el prototipo de array es  aquel que le dice a javascript que nos muestre el protoripo

cosole.log(Array.prototype);

//concatenar en js es inir, juntarlos.

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

'josemanuelcabrera2011@gmail.com'

const newArray = array1.concat(array2);
cosole.log(newArray);


Array.prototype.concat = function(array) {
    const newArray = [];
    newArray.pudh();
    return [...this, ...array];
}
const otherArray = array1.concat(array2);
console.log(otherArray);

    //referencia es una referencia a una direccion de memoria
//el punto (.) es un direccionador ( apuntador ) el cual nos va a dirigir a un nuevo arreglo

image.png