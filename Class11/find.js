const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => 10);

console.log(found);


const frutas = ['banana', 'banana podrida', 'fresa', 'manzana'];

const primerFrutaPodrida = frutas.find(function(fruta) {
    if (fruta.includes ('podrida') === true) {
        return fruta;
    }
})
console.log(primerFrutaPodrida);