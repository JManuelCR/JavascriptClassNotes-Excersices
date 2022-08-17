/**Un objeto tiene atributos y metodos, en javascript se maneja todo con 
 * objetos ya que es un lenguaje basado en objetos*/


/**Los atributos son las propiedades de los objetos, por ejemplo, en el objeto
 *carro los atributos son puestas, color, electrico o gasolina y estos son primitivos
 */

/**Los metodos son propiedades que almacenan propiedades */

/**funcion del primer orden que se le puede pasar un valor, que puede retornar un valor. */


let carro = {
    puertas: 4,
    color: 'gris',
    electrcio: false,
    acelerar: () => {
        console.log('Estoy avanzado');
    }
}
function Carro() {
    this.puertas = 0;
    this.color = 'gris';
    this.electrcio = false;
    this.aceleraar = () => {
        console.log(this);
    }
}