const changeColor = document.querySelector("#changeColor");
const generateColor = document.querySelector("#generateColor");
const bodyColor = document.querySelector("#bodyColor")
generateColor.addEventListener('click', createColor);

let max=255;
let min=0;

function createColor (){
    let numbers="";
    for (i=0; i<3; i++){
        let randomPosition = Math.floor(Math.random()*(max-min))+min
        numbers=numbers+" "+randomPosition;
    }
    let arraynumbers= numbers.split(' ');
    
    changeColor.style.backgroundColor = `rgb(${arraynumbers[1]}, ${arraynumbers[2]}, ${arraynumbers[3]})`;
    
    bodyColor.textContent ="El color es "+ `rgb(${arraynumbers[1]}, ${arraynumbers[2]}, ${arraynumbers[3]})`;
}




