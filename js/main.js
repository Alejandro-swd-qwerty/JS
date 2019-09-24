/*

// Capitalizing a phrase

var phrase = "Holi a todos";
//phrase[0].toUpperCase();

const capitalize = (phrase) => {
    
    for (index = 0; index < phrase.length; index++){
        if(phrase[index] === " "){
            phrase.split()
        }
    }    

*/

/*

// Determine wich word is the longer in the phrase

const largerWord = (phrase) => {
    let phraseArray = phrase.split(" ");
    let word = phraseArray[0];
    for (index = 0; index < phraseArray.length; index++){
        if (phraseArray[index].length >= word.length){
            word = phraseArray[index];
        }
    }
    return word;
}

*/


/*
// Counter of how many ones there are in the provided array 

var totalMatrix = [[0,0,1], [1,0,1], [0,9,1]];

const finder = (totalMatrix) => {
    let counter = 0;
    for (indexA = 0; indexA < totalMatrix.length; indexA++){
        for(indexB = 0; indexB < totalMatrix[indexA].length; indexB++){
            if(totalMatrix[indexA][indexB] === 1){
                counter++;
            }
        }
    
    }
    return counter;
}

*/

/*
//Fibonacci Serie 


const fibonacciSerie = (endOfSerie) => {
    let previousNumber = 0;
    let currentNumber = 1;
    let nextNumber;
    
    console.log(`${previousNumber}`);
    console.log(`${currentNumber}`);
    for(index = 3; index <= endOfSerie; index++){
        nextNumber = currentNumber + previousNumber;
        previousNumber = currentNumber;
        currentNumber = nextNumber;
        console.log(`${nextNumber}`);
    }
}

*/
/*
// Fibonacci Serie

const fibonacciSerie = (endOfSerie) => {
    let previousNumber = 0;
    let currentNumber = 1;
    let nextNumber;
    let finalSerie = [];

    // Verifying if the desired end of the Serie is between 0 and 2 
    if(endOfSerie <= 0){
        finalSerie = ["Please specify a number greater than 0"];
    }else if(endOfSerie === 1){
        finalSerie = [0];
    }else if(endOfSerie === 2){
        finalSerie = [0, 1];
    }else{
        // If the desired end of the Serie is equal or bigger than 3, then procceed to calculate the Serie till the last number (endOfSerie)
        finalSerie = [0, 1];
        for(index = 3; index <= endOfSerie; index++){
            nextNumber = currentNumber + previousNumber;
            previousNumber = currentNumber;
            currentNumber = nextNumber;
            finalSerie.push(nextNumber);
        }
    }
    return finalSerie;
}
*/


