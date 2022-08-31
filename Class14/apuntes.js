/** Javascript en la web */

/** En javascript todo es un objeto pero no necesariamente, mas bien es una
 * cadena de prototipo,
 * 
 * Math y date
 * 
 * Date 
 * 
 * es basicamente un objeto que nos permute trabajar con fechas.
 * Como es un objeto tambien es un prototipo
 * 
 * date.prototype.getDate()
 * date.prototype.getDay()
 * date.prototype.getFullYear()
 * date.prototype.getHours()
 * date.prototype.getMillisecons()
 * date.prototype.getMinutes()
 * date.prototype.getMonth()
 * date.prototype.getSeconts()
 * date.prototype.getTime()
 * 
 * Pero existen otros metodos y vamos a ver dos que existen.
 * 
 * Date.now();
 * retornan fechas calculadas desde una fecha especifica en esta ocacion el 1 de enero de 1970
 * 
 * 
 * Math
 */

function areaCircle(radius) {
    let area = Math.PI * Math.pow(radius,2);
    console.log(area);
}

areaCircle(15);

const todayDate = () => {
    //obtenemos la fecha con el formato que lo arroja el método para dia
    const date = new Date();
    //le voy a dar formato al año
    const day = date.getDate();
    //Le voy a pedir mes
    const month = date.getMonth();
    //Le voy a pedir el año
    const year = date.getFullYear();

    console.log(`${year} ${month} ${day}`);

    return;
}

todayDate();

/** herramientas que nos ayudan a dar formato a las variables en camelCase o que 
 * un objeto tenga la mejor forma
 * vscode tiene opciones para instalar linters
 * los linters son como testers que verifican que esta bien el codigo
 * y que lo haz pensado de manera adecuada
 * 
 * Los linters no ayudan a verificar la estructura de codigo
 * y los pretier nos ayudan a darle formato
 * ESlint se puede configurar para que nos ayude a verificar
 * que se cumplan con las reglas de escritura del codigo
 * El principio solid
 * ojo: todas esas cosas de cleancode no se va a aprender
 * en 6 años no se metan en broncas
 */



/** Javascript en la web 
 * se puede ejecutar en el navegador y en el interprete
 * de node con con el motor V8 que esta instalado dentro
 * Vamos a utilizarlo para usar nuestras apis y correr servidores
 * por debajo cono node
 * ECMA script la estandarizacion de javascript en la web
 * 
 * javascript fue creado para darle dinamismo a nuestras 
 * paginas web
 * 
 * al inicio solo se podian utilizar js en dormato inline
 * o a travez de archivo externo
 * 
 * actualmente existe un achivo externo de tipo modulo
 * cuando trabajamos con js hay mucho codigo, por lo cual
 * usamos modulos par apoder importar y exportar 
 * es como Sass donde podemos reutilizar nuestro codigo
 * 
 * 
 * pero.... ¿Para qué sirve?
 * lo utilizamos para hacer cosas chidas en el navegador
 * pero hay que tener cuidado
 * 
 * JS en la web
 * 
 * DOM
 * document objet model
 * verificar el archivo de imagen
 * 
 * window es otro objeto podemos acceder de manera global
 * existe otro metodo llamado document el cual se encuentra
 * al inicio de del arbol
 * 
*/
