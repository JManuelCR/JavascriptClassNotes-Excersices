const frutas =  ['banana', 'manzna', 'fresa'];

function callback(itemActual) {
    return itemActualActual === 'banana';
}

let arregloResultante = frutas.filter(callback);

function filter(array, callback) {ds
    let arreglo = [];
    // va recorriendo el arreglo
    if(callback(array[0]) == true) {
        arreglo.push(array[0]);
    }
    return arreglo;
}

