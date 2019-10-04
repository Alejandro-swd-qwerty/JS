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

/*
var count = 0;

var counter = window.setInterval(function() {
    count++;
    document.getElementById('container').innerText = count;
    console.log(count);
}, 1000)

*/


const stopwatch = (hours, minutes, seconds) => {
  var CONTAINER_DIV = document.getElementbyId('container');

  if (hours > 0 && hours <= 23){
    //hoursCounter(hours);
  }
  if (minutes > 0 && minutes <= 59){
    minDiv = document.createElement('div').classList.add('minDiv');
    CONTAINER_DIV.appendChild(minDiv)    
    minutesCounter(minutes);
  }
  if (seconds > 0 && seconds <= 59){
    secondsCounter(seconds);
  }else if (seconds === 0){
    minutes--;
  }
}

const minutesCounter = (minutes) => {
  var minCounter = 0;
  let minInterval = window.setInterval(function() {
    minCounter = minutes--;
    if (minCounter > 0){
      document.getElementById('container').innerText = minCounter;
      console.log(minCounter);
      return minCounter;
    } else if (minCounter === 0) {
      window.clearInterval(minInterval)
    }
    

  }, 60000)
}





const secondsCounter = (seconds) => { 
  let secCounter= 0;
  let secInterval = window.setInterval(function() {
    secCounter = seconds--;
    if (secCounter>= 0){
      document.getElementById('container').innerText = secCounter;
      console.log(secCounter);
      return secCounter;
    } else {
      clearInterval(secInterval)
    }
    
  }, 1000)
}

const stop = () => clearInterval(secInterval)





