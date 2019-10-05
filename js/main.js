/*

var xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function() {
    console.log('state', this.readyState, xhttp.status);
    if (this.readyState === 4 && this.status === 200){
        let objRes = JSON.parse(this.response)
        //handlerResponse(objRes);
        console.log(objRes);
    }
}

xhttp.open("POST", "https://ajaxkode.firebaseio.com/posts.json ");

var posts = {
  title: "Good Morning",
  description: "yellow flower",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdBhTY9XD_KJgfJDHAcvcWSA0FBWzNnPhGo9Xr-VD6UewAYfNQw",
  author: "Areli S."
}

xhttp.send(JSON.stringify(posts));
*/

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
  console.log('state', this.readyState, xhttp.status);
  if (this.readyState === 4 && this.status === 200){
      let objRes = JSON.parse(this.response)
      //console.log(objRes);
      for(i in objRes){
        //console.log(objRes[i])
        handlerResponse(objRes[i]);
        console.log(card)
        document.getElementById("wall").innerHTML += card
      }
  }
}


xhttp.open("GET", "https://ajaxkode.firebaseio.com/posts.json");
xhttp.send();


const handlerResponse = (response) => {

  card = `<div class="card col-lg-6 col-md-6 col-12 justify-content-center">
  <img class="card-img-top" src=${response.img} alt="Card image cap">
  <div class="card-body">
  <h5 class="card-title">${response.title}</h5>
  <p class="card-text">${response.description}</p>
  </div>
  </div>`
  return card;
}