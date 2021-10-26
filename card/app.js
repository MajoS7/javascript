const user= document.querySelector("#user");
const message =document.querySelector("#message");
const generate = document.querySelector("#generate");
const card =document.querySelector("#card");

user.addEventListener('keyup', captureCharacter);

let cuadro=document.createElement('div');
let textuser= document.createElement('p');
let welcome =document.createElement('h2');

function captureCharacter() {
    let findCharacter=false;
    for (let i = 0; i < user.value.length; i++) {
        let character = user.value.charAt(i);
        if (character=="*" || character=="/" || character=="-" || character=="_" || character=="+"){
            findCharacter=true;
        }
        
    }
    if (findCharacter==true){
        message.textContent="El usuario no puede contener los siguientes caracteres: '*', '-', '/', '+', '_'";
        message.style.color="#F44336";
        findCharacter=false;
        generate.disabled =true;
    }
    else if(user.value==""){
        message.textContent="";
        cuadro.remove();
    }
    else{
        message.textContent="Usuario Valido";
        message.style.color="#2aa649";
        generate.disabled =false;
    }
    
}

generate.addEventListener('click',createCard);


function createCard() {
    
    if (user.value!=""){
        
        cuadro.style.width='80%';
        cuadro.style.height='90%';
        cuadro.style.borderRadius='30px';
        cuadro.style.boxShadow='0px 0px 20px rgb(230,18,18)'
        cuadro.style.display='flex';
        cuadro.style.flexDirection='column';
        
        cuadro.style.alignItems='center';
    
        card.appendChild(cuadro);

        
        textuser.style.width='55%';
        textuser.style.height='55%';
        textuser.style.marginTop='10%';
        textuser.style.boxShadow='rgb(0 0 0 / 60%) 0px -7px 7px';
        textuser.style.borderRadius='100%';
        textuser.textContent=user.value;
        textuser.style.display='flex';
        textuser.style.justifyContent='center';
        textuser.style.alignItems='center';
        textuser.style.fontSize='28px'
        cuadro.appendChild(textuser);


        welcome.textContent="Bienvenido al sistema";
        cuadro.appendChild(welcome);

    }
    else{
        message.textContent="Por favor digite un nombre de usuario";
        message.style.color="#F44336";
    }
    

}







    


