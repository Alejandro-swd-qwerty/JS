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
var generationFinder;
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


function selection(generation, koders = objKoders) {
    
    koders.map(koder => {
        arrayKoders = `${koder.firstName} ${koder.lastName}`;
        console.log(arrayKoders);
        generationFinder = koders.filter(koders.generation === generation);
        console.log(generationFinder)
    })    
}


        if(koder.generation == generation){
            console.log(`${koder.firstName} ${koder.lastName}`);
        } else {
            console.log("No hay alumnos de esa generacion")
        }
    })
    //return `${koder.firstName} ${koder.lastName}`;
        
}





var car = 
    {
        brand: "Toyota",
        model: "Yaris",
        color: "Red",
        year: 2019,
        new: true,
    }

    for (const property in car) {
        console.log(`${property} = ${car[property]}`);
    }




    var objKoders = [
        {
            firstName: "Isaac",
            lastName: "Mendoza",
            grade: 8,
        },
    
        {
            firstName: "Jos",
            lastName: "Avalos",
            grade: 5,  
        },
    
        {
            firstName: "Alex",
            lastName: "Aguilar",
            grade: 6,
        }
    ];

    

    function groupAverage() {
        let gradeAddition = 0;
        let totalStudents = objKoders.length;
        let average;

        objKoders.forEach(koder => {
        gradeAddition += koder.grade;
        average = gradeAddition/totalStudents;

        })
    return average
    }


    
    




    
