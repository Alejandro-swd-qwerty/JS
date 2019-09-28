/*
var bottle = {
    material: "plastic",
    volume: {
        caacity: 1000,
        unity: "ml",
    }
}
*/

/*
var hotel = {
    areas: {
        bar: {
            tables: 24,
            stages: 1,
        },
    },
    floors: 4,   
}

var {floors, areas, areas: {bar, bar: {tables, stages}}} = hotel
*/


// Dado un numero, sacar el factorial del mismo

//INPUT

function factorial = number => {
    let numbers = [];
    for(let index = 1; index <= number; index++){
        numbers.push(index);
    }
    return numbers.reduce((total, value) => total * value);   
}




