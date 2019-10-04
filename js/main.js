/*
var node = document.getElementById("container");

node.addEventListener('click', function () {
    document.getElementById("test").style.backgroundColor = "green";
})

*/

/*
var node = document.getElementById('test')

node.addEventListener('click', () => {
    node.style.backgroundColor = "green";
})
*/
/*
var node = document.getElementById('container')
node.addEventListener('click', function ({ target }) {
  if (!target.className) {
    target.classList.add('active')
  } else {
    target.classList.remove('active')
  }
  console.log(target.className);
})
node.addEventListener('click', ({ target }) => target.classList.toggle('active'))
*/


/*
document.getElementById('add').addEventListener('click', () =>{
    let container = document.getElementById('container');
    let newDiv = document.createElement('div');
    newDiv.classList.add('test')
    container.appendChild(newDiv);
    newDiv.addEventListener('click', ({ target }) => target.classList.toggle('active'));
})

*/
var count = 0;

var counter = window.setInterval(function() {
    count++;
    document.getElementById('container').innerText = count;
    console.log(count);
}, 1000)








