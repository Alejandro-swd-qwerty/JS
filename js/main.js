/*
// Filter word where its length is even
var words = ["casa", "perro", "bosque", "pradera"];


var filtering = words.filter(word => (word.length % 2) === 0);

*/
/*
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


objKoders.map((name) => arrayKoders = `${name.firstName} ${name.lastName}`)

*/




var arrayKoders ;
var objKoders = [
    {
        firstName: "Isaac",
        lastName: "Mendoza",
        generation: 3
    },

    {
        firstName: "Jos",
        lastName: "Avalos",
        generation: 1
        
    },

    {
        firstName: "Alex",
        lastName: "Aguilar",
        generation: 4   
    }
];


function selection(generation, Koders = objKoders) {
    
    Koders.map(name => {
        //arrayKoders = `${name.firstName} ${name.lastName}`;
        //console.log(arrayKoders);
        if(name.generation === generation){
            console.log(`${name.firstName} ${name.lastName}`);
        } else {
            console.log("No hay alumnos de esa generacion")
        }
    })
    //return `${name.firstName} ${name.lastName}`;
        
}



