/* 1st excersice

var givenWord = "Mosaico";

if(givenWord.length < 8){
    console.log("La palabra tiene menos de 8 letras");
} else {
    console.log("la palabra tiene mas de 8 letras");
}
*/

/* 2nd excercise

var word = "ingeniero";

if(word.includes("ing")){
    console.log("La palabra contiene ing");
} else {
    console.log("La palabra no contiene ing");
}*/

/* 
3rd excersice

teniendo un numero 0 0contar hasta 100 y determinar cuales son los parseFloat
 
var number = 0;

while (number <= 100){
    if(number % 2 === 0){
        console.log("the number " + number + " is even")
    }
    number++;    
} */

/* 4th excercise

var pets = ["parrot", "cat", "bunny", "dog"]


for (let counter = 0; counter <= pets.length; counter++){
    console.log(pets[counter]);
}
*/

/*
Verificar la palabra {word} tiene al menos 3 vocales

var vowels = ["a", "e", "i", "o", "u"];
var word = "cantinplora";
var counter = 0;

for (index = 0; index < 5; index++){
    if (word.includes(vowels[index])){
        console.log("La palabra " + word + " contiene la vocal " + vowels[index]);
        counter ++;
    }
    if (counter === 3){
        index= 4; 
    }
}

*/

/*Cuantos multiplos de 8 hay dentro del rango {numberOne} - {numberTwo}
Se debe validar que numberOne sea menor que numberTwo 
Verificar que ambos son positivos

var numberOne = 0;
var numberTwo = 80;
var total = 0;


if (numberOne < numberTwo){
    if(numberOne >= 0){
        for (let counter = numberOne; counter <= numberTwo; counter++){
            if(counter % 8 === 0){
                console.log(counter);
                total++;
            }
        }
        console.log("Dentro del rango que va de " + numberOne + " a " + numberTwo);
        console.log(" existen " + total + " multiplos de 8");
    }
}
*/
