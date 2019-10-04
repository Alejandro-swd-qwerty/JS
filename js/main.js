console.log('Hola');

var xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {
    console.log('state', this.readyState, xhttp.status);
    if (this.readyState === 4 && this.status === 200){
        let objRes = JSON.parse(this.response)
        //handlerResponse(objRes);
        console.log(objRes);
    }
}

xhttp.open("POST", "https://ajaxkode.firebaseio.com/.json ");

var koder = {
    firstName: "Alejandro",
    lastName: "Aguilar",
    generation: 5,
    hobbies: [
        "Listen Music",
        "Ride Motorcycle",
    ],

}

xhttp.send(JSON.stringify(koder));

/*

const handlerResponse = (obj) => {
    console.log(obj)
  }

  cont domConst = (response) => {
    forEach(({element, text}) => {
    let newNode = document.createElement(element);
    newNode.
    document.getElementById("container").appendChild(newNode)
    })
  }




/*

var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let objRes = JSON.parse(this.response)
    handlerResponse(objRes)
  }
}
xhttp.open('GET', "data/hello_world.json")
xhttp.send()
const handlerResponse = (obj) => {
  console.log(obj)
}

*/



