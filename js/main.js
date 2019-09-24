/*
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




