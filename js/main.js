
/* descuento de 2% diario acumulable

var employees = [["David",4], ["Jose",2], ["Alejandro",3]];
var salary;
for (let names = 0; names < employees.length; names++){
    if (employees[names][1] > 0){
        let discount;
        //console.log(employees[names][1]);
        discount = employees[names][1]*(450*.02);
        salary = (450 * 30) - discount;
        console.log(employees[names] + ": $" + salary + ".00")
        console.log(employees[0][1])
    }    
}*/

/*
Calculadora de 2 números

var total;

function calc(firstNumber, secondNumber, operation){

   
    if (operation === "a" || operation === "A"){
        addition(firstNumber,secondNumber);
    } else if(operation === "s"  || operation === "S"){
        substraction(firstNumber, secondNumber);
    } else if(operation === "m"  || operation === "M"){
        multiplication(firstNumber, secondNumber);
    } else if (operation === "d"  || operation === "D"){
        division(firstNumber,secondNumber);
    } else {
        let message;
        let message2;

        message = "Specify wich type of operation you wish to perform \n";
        message2 = "addition a, substraction s, multiplication m, division d";

        total = message + message2;

    } 

    return total;
}

function addition(firstNumber, secondNumber){
    total = firstNumber+secondNumber;
    return total;
}

function substraction(firstNumber, secondNumber){
    total = firstNumber - secondNumber;
    return total;
}

function multiplication(firstNumber, secondNumber){
    total = firstNumber * secondNumber;
    return total;
} 

function division(firstNumber, secondNumber){
    total = firstNumber / secondNumber;
    return total;
} 
*/

/*
1.- Dado un array de numeros, entregar el producto total
Ej -> [1,2,3,4,5]
El resultado seria 1 * 2 * 3 * 4 * 5 


var numbers = [1, 2, 3, 4, 5];
var total = 1;
var resultString = "";

for(index = 0; index < numbers.length; index++){
    resultString += numbers[index];
    if (index <= (numbers.length -2)){
        resultString += " * ";
    }
    total *= numbers[index];
    
}

console.log(resultString);
console.log(total);
*/

/*
2.- Dado un array de números (MXN), entregar los numeros en USD 
Ej -> [123,142.09,384]


var mxnToUsd = [123, 142.09, 384] 
var usdExchangeFactor = 0.051;
var total;

for (let index = 0; index < mxnToUsd.length; index++){
    exchange (mxnToUsd[index], usdExchangeFactor);
    console.log("$" + mxnToUsd[index] + " MXN equivalen a " + total + " U$D");
}

function exchange(mxn, usd){
    console.log(mxn + " " + usd);
    total =  mxn * usd;
    return total;
}

*/

/*
3.- Dados dos arrays ['Alex', 'Juan']  ['Lopez Hernandez','Navarro Osorio'], construir un nuevo array con los nombres completos según la position
Ej -> ['Alex Lopez Hernandez', 'Juan Navarro Osorio']


var names = ["Alex", "Juan"];
var lastNames = ["Lopez Hernandez", "Navarro Osorio"];
var fullNames = [];
var personName = "";


joinName();



function joinName(){

    for (let index = 0; index < names.length; index++){
     personName = names[index] + " " + lastNames[index];
        fullNames[index] = personName;
    }
    
    return fullNames;
}
*/
