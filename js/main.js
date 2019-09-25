/*
//imprimir palabras que comiencen con a o A

var array = ["alligator", "cat", "dog", "Alejandro"];

var finder = array.forEach((element) => {
    if (element[0] === "a" || element[0] === "A"){
    console.log(element);
    }
})

*/

var phrase = "hola amigos";

var phraseInverter = (phrase) => phrase.split(" ").reverse().join(" ")