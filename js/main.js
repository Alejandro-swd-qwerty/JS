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

/*


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

*/
/*



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

    */
/*

    Dada un amatriz, traducir la matriz a un array de objetos
     obener los nombres completos de los Koders
     Sacar promedio
    

    var matriz = [
        ["Issac", "Mendoza", 5, 23, 7],
        ["Areli", "Santigo", 5, 27, 6],
        ["Mike", "Aceves", 5, 25, 6],
    ];

    var Koders = [];
 

    const addingNewKoder = (matriz) => {

        matriz.forEach((person, index) => {
            var firstName = index[0];
            var lastName = index[1];
            var generation = index[2];
            var age = index[3];
            var grade = index[4]
        })

        function Koder (firstName, lastName, generation, age, grade){
            this.firstName = firstName;
            this.lastName = lastName;
            this.generation = generation;
            this.age = age;
            this.grade = grade 
        }

        var koder = new Koder (firstName, lastName, generation, age, grade);
        Koders.push(koder);


    }

*/
/*
var style = [
    {
      height: '100px',
      width: '100px',
      backgroundColor: 'red'
    },
    {
      height: '100px',
      width: '100px',
      backgroundColor: 'blue'
    },
    {
      height: '100px',
      width: '100px',
      backgroundColor: 'yellow'
    },
    {
      height: '100px',
      width: '100px',
      backgroundColor: 'black'
    }
  ]



var colorize = (style) => {  
    let divArray = [];
    let divCollection = document.getElementsByTagName("div");

    for (let index = 0; index < divCollection.length; index++){
        divArray.push(divCollection[index]);
    }

    divArray.forEach((element, index) => {
        let [firstStyle, secondStyle, thirdStyle, forthStyle] = style;
        divArray[index].style.height = style[index].height;
        divArray[index].style.width = style[index].width;
        divArray[index].style.backgroundColor = style[index]. backgroundColor;
    })
}
*/