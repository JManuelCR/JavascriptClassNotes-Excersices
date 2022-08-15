/*             Arrow function   */

// Cuando un arrow funtion tiene un parametro puede no llevar ()

const arrowFunction = () => {

}


const saludar = (nombre)  => {
    console.log(`Hola ${nombre}`);
}
saludar('Manu');

//cuando agreamso arrow function las cosas cambian


const saludar = (prefijo, nombre)  => {
    console.log(`Hola ${nombre}`);
}
saludar('Manu');