const number=document.querySelector('#number');
const message =document.querySelector('#message')


const numberRandom= Math.floor(Math.random()*(20-1))+1;

console.log(numberRandom);

number.addEventListener('keyup', function (tecla){
    
    if (tecla.keyCode==13){
        if (number.value==""){
            message.textContent="";
        }
        else if (number.value<numberRandom){
            message.textContent='Es menor que el numero magico';
        }
        else if (number.value>numberRandom){
            message.textContent='Es mayor que el numero magico';

        }
        else if (number.value==numberRandom){
            message.textContent='Usted advino el numero magico';
            
        }
        else{
            message.textContent="";
        }
    }
  
})



