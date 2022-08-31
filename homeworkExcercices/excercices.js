/**1. Crear una funsión que recibe un string y retorna true si es un palindromo y 
 * false si no lo es
 */

function isAPalindrom(word) {
    let stringReverse = word.split("").reverse().join("");
    let validation = true;
    if (word !== stringReverse) {
        validation = false;
    }

    console.log(validation);
    return;
}
isAPalindrom('ala');