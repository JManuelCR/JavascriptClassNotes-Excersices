bmw => carro => objet // esto es una cadena de prototipos
/** La cadena de prototipos nos da una herencia, por ejemplo, arriba bmw hereda de carro,
 * carro hereda de object y asi podemos ver como se hace la cadena de prototipos
 */

const users = [
    {name:'aldo', age: 18},
    {name:'magaly', age: 30},
    {name:'alfonso', age: 20},
    {name:'jesus', age: 50},
    {name:'alberto', age: 10}
]

let callback = function(a,b) {
   if(a.age < b.age) {
    return 1;
   }
   if (a.age > b.age) {
    return -1;
   }
   return 0;
}

users.sort(callback);