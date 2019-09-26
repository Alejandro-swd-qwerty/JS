/*
// Filter word where its length is even
var words = ["casa", "perro", "bosque", "pradera"];


var filtering = words.filter(word => (word.length % 2) === 0);

*/

var arrayKoders;
var objKoders = [
    {
        firstName: "Isaac",
        lastName: "Mendoza"
    },

    {
        firstName: "Isaac",
        lastName: "Mendoza"
        
    },

    {
        firstName: "Alex",
        lastName: "Aguilar"   
    }
]


objKoders.map((name) => arrayKoders = `${name.firstName} ${name.lastName}`






var arrayKoders;
var objKoders = [
    {
        firstName: "Isaac",
        lastName: "Mendoza",
        generation: 3
    },

    {
        firstName: "Jos",
        lastName: "Avalos",
        generation: 4
        
    },

    {
        firstName: "Alex",
        lastName: "Aguilar",
        generation: 1   
    }
]


const finder(generation, objKoders.map(name => {
    arrayKoders = `${name.firstName} ${name.lastName}`
    if(generation === name.generation){
        return name;
    } else {
        return "No hay alumnos de esa generacion"
    }
}))



