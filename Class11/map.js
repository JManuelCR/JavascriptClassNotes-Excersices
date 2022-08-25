Array.prototype.map()
Array.prototype.map()






const pokemones = ['picachu', 'squirtle', 'volvasaur' ];

const evolucionarPokemones = pokemon => {
        const evoluciones = {
        picachu: 'raychu',
        squirttle: 'wartle',
        volvasaur: 'ibasaur'
    }
    return evoluciones[pokemon]
}a

const pokemonesEvolucionados = pokemones.map(evolucionarPokemones);

console.log(pokemonesEvolucionados);