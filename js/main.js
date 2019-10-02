
/*
var style = [
    {
      height: '100px',
      width: '100px',
      backgroundColor: 'red'
    },
    {
      height: '100px',
      width: '100px',
      backgroundColor: 'blue'
    },
    {
      height: '100px',
      width: '100px',
      backgroundColor: 'yellow'
    },
    {
      height: '100px',
      width: '100px',
      backgroundColor: 'black'
    }
  ]



var colorize = (style) => {  
    let divArray = [];
    let divCollection = document.getElementsByTagName("div");

    for (let index = 0; index < divCollection.length; index++){
        divArray.push(divCollection[index]);
    }

    divArray.forEach((element, index) => {
        let [firstStyle, secondStyle, thirdStyle, forthStyle] = style;
        divArray[index].style.height = style[index].height;
        divArray[index].style.width = style[index].width;
        divArray[index].style.backgroundColor = style[index]. backgroundColor;
    })
}

colorize(style)

*/

/*
const divsCollection = document.getElementsByTagName('div')
style.forEach(({ height, width, backgroundColor }, index) => {
  let divStyle = divsCollection[index].style
  divStyle.height = height
  divStyle.width = width
  divStyle.backgroundColor = backgroundColor
})
Contraer

*/

/*

var style = [
    {
      tag: 'p',
      id: 'red'
    },
    {
      tag: 'p',
      id: 'blue'
    },
    {
      tag: 'p',
      id: 'yellow'
    },
    {
      tag: 'p',
      id: 'white'
    }
  ]


  style.forEach( (object, index) => {
    let createNewElement = document.createElement(style[index].tag);
    createNewElement.id = style[index].id;
    document.getElementById("container").appendChild(createNewElement)
  }   )
*/


/*
  
var style = [
    {
      tag: 'p',
      styleClass: 'test',
      text: 'Holi'
    },
    {
      tag: 'p',
      styleClass: 'test',
      text: 'Holi'
    },
    {
      tag: 'p',
      styleClass: 'test',
      text: 'Holi'
    },
    {
      tag: 'p',
      styleClass: 'test',
      text: 'Perros'
    },
    {
      tag: 'h1',
      styleClass: 'test',
      text: 'Holi'
    },
  ]
  const generateTreeNodes = (arr, containerId) => {
    const parentNode = document.getElementById(containerId)
    arr.forEach(({ tag, styleClass, text }) => {
      let node = document.createElement(tag)
      node.classList.add(styleClass)
      node.innerText = text
      parentNode.appendChild(node)
    });
  }
  generateTreeNodes(style, 'container')

  */







