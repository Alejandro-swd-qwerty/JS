/*
//imprimir palabras que comiencen con a o A

var array = ["alligator", "cat", "dog", "Alejandro"];

var finder = array.forEach((element) => {
    if (element[0] === "a" || element[0] === "A"){
    console.log(element);
    }
})

*/

/*
// Inverting a phrase

var phrase = "hola amigos";

var phraseInverter = (phrase) => phrase.split(" ").reverse().join(" ")
*/


var phrase = "anita lava la tina";

var palindrome = phrase => {
    let reversedPhrase;
    let originalPhrase;
   
    originalPhrase = phrase.split(" ").join("");
    reversedPhrase = originalPhrase.split("").reverse().join("");
      
    if (reversedPhrase === originalPhrase){
        return "Es palindromo";
    } else {
        return "No es palindromo";
    }

}



