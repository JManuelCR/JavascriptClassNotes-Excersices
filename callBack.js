/**
* Funciones pasadas como argumentos de otras funciones
* Podemos trabajar con funciones como si fueran cualquier otro tipo de valor
* 
*/ 

function calculadora(num1, num2, callback) {
    return callback(num1, num2);
}