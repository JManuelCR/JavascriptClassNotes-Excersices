/** 1. Funcion que se encargue de parasear elementos
 * 2. Funcion que conatene los elementos arreglos
 * 3. QUe mande llamar las dos funciones anteriores
 * 4. el resultado debe ser algo  parecido a lo siguiente
 * // let array = ['Aldo sale a las 9:00]
 */

 let schedules = ['09:00', '10:00', '11:00', '12:00'];

 const flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney"
    },
    passengers: [{
    name: 'aldo',
    edad: 30
    }, {
    name: 'Juan',
    edad: 30
    },
    {
    name: 'Alberto',
    edad: 30
    },
    {
    name: 'Judith',
    edad: 30
    }]
    };


    function parseFLight(vuelo) {

        let newArray = []
        for(const passengers of vuelo.passengers) {
            newArray .push(passengers.name);
        }
        return newArray
    }

    function concatenarArregos() {
        return 
    }