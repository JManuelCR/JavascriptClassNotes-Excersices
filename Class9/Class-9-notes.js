esto significa que podemos manejar todo como un objeto
/**
 * // Notas del dia jueves 18 de agosto del 2022

// con JSON.parse conviertes un JSON a un objeto
// se usa para enviar y recibir información entre clientes y servidores
//javascripo es un lenguaje multiparadigma y aca podemos implementar el paradigma de programacion orientada a objetos
//en javascrip no se puede implementar todo lo de preogramacion  pero 
//la programaccion orientada a objetos es una forma de abstraer algo de la realidad un algoritmo
//En javascrip podemos implementar algunas caracteristicas de programacion orientada a objetos
 * Aca se puede usar la porpiedad de la herencia
la herencia es poder obtener ciertas caracteristicas al algo cederlos y podemos tener hijos a los que podemos heredad cosas
en javascript se puede hacer pero funciona diferente a lpos demas leguajes de programacion
javascript lo basa en prototipo
el cual tiene un objeto padre el cual va a heredar caracteristicas a los hijos
por ejemplo:
un producto puede tener caracteristicas, nombre,precio,stock, marca
los hijos propiamente como zapatillas, alimento, monitor. todos estos atributus y metodos son heredables
cada hijo puede tener caracteristicas particulares, 

javascript trabaja con prototipos y la herencia es cuando le delegas alf¿go a otro apartado o funsion
y le heredas las los atributos
 */
const cheff = {
    tipo: 'cocina basica',
    cocinar: function(platillo){
        console.log(`Cocinando el ${paltillo}`)

    }
}

const manu = {
    nombre: 'Manu',
    edad: 30,
    profesion: 'mecatronico',
}

manu.__proto__=cheff; // esto nunca lo hagan
/**en java todos son objetos con propiedades es decir no solo hereda los atributos si no que mas bien concatena
 * las clases en las que se le pide al nuevo objeto todo lo de un oobjeto padre pero con todo y el obejeto
 * no solo las caracteristicas
 * 
 * contexto y scope son practicamente lo mismo
 * 
 * en javascript se puede encadenar los prototipos con PROTO pero tambien se puede hacer con un metodo
 * el metodo setPrototypeOf(el objeto que quiero encadenar, el objeto al que quiero encadenarme)
 * lo que hace javascript es una estructura de datos  es unidireccional no es bi direccional solo se pueden traer propiedades de los objetos padre a los objetos hijo
 * pero no se puede traer al objeto hijo a desde el objeto padre
 * estructuras de datos se deben de saber cpar atrabajar en google y se deben de aplicar con js
 * la manera correcta de hacer el enlace de prototipos
 */

const me = Objet.create(person);

/**literal objets son las que se crean como una vartiable
 * es decir se pone el 
 */


/** Veremos el prototipo de string, el cual es un tipo de dato primitivo */

const string = 'HOLA';
console.log(string.charAt(0));

//Hay cierto tipo de entrar a las funciones constructoras
//como acceder a los prototipos
//cual es la diferencia entre proto y las demas es que proto es una propiedad
//privada y las otras son publicas proto seran entonces lo que javascript genera atras de los 
/** La diferencia entonces es que prototipe es publica y proto es privada
 * a ver genera un metodo que recorra un arreglo de la forma mas rapida
 * genrerar una funcion map que recibe un callback
 * 
 */

console.log(string.prototype);
// metodo es una funsion y atributo es un valor esa es la diferencia 
// en un scrip sonde se usen los metodos que se usan en string
//