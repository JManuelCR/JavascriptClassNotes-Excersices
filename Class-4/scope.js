//scope global
let variableGlobal = 15;


function saludar() {
    //sccope local
    let variableLocal = 10;
    console.log(variableGlobal, variableLocal);
}

saludar();

/* javascript tiene una funcion de stack, que genra una especie de enlace el cual crea un espacio de memoria en la pila de ejecucion */

