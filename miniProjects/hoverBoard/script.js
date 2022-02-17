const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#fa5b0f', '#e67e22', '#2ecc71']
const SQUARES = 2618


for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

var color = '#ffffff'
function setColor(element) {
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}






var totalcolors=colors.length;
function setActiveStyle(cval){
    for(let i=0;i<totalcolors;i++)
    {
        if(cval==colors[i])
        {
            color=cval;
        }
    }
}