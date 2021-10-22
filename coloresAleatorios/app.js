// const changeColor = document.querySelector("#changeColor");
// const generateColor = document.querySelector("#generateColor");

hexadecimalColor=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");


function randomNumber(min,max){
    let randomPosition = Math.floor(Math.random()*(max-min))+min
    return randomPosition;
}

function createColor (){
    let color = "#";
    for (i=0; i<6; i++){
        let hexadecimalPosition=randomNumber(0,hexadecimalColor.length);
        color=color+hexadecimalColor[hexadecimalPosition];
    }
    return color;
}

