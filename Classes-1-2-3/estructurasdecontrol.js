// ejecutar el login
let logueado = true;
let tdc = true;

if (logueado && tdc) {
  console.log("Puede revisar su detalle dela tarjeta");
} else if (logueado == false && tdc) {
  console.log("El usuario no esta loggeado o no tiene tarjeta de credito");
} else {
  console.log("no hay nada aca");
}

switch (paso) {
  case 1:
    console.log("Datos Personales}");
    break;
  case 2:
    console.log("Datos academicos");
    brake;
  default:
    console.log("Aun no hay datos que llenar");
}

//Un codigo con muchas bifurcaciones tiene mucha complejidad, no se recomienda usar el switch para no generar este tipo de problemas.

let numero1 = 20;
let numero2 = 3;

if (numero1 > numero2) {
  console.log("El numero1 " + numero1 + ", es mayor ");
} else if (numero1 < numero2) {
  console.log("El numero2 " + numero2 + ", es mayor ");
} else {
  console.log("Los numeros son iguales");
}
