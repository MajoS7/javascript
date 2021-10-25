const user= document.querySelector("#user");
const message =document.querySelector("#message");


user.addEventListener('keyup', captureCharacter);

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
    }
    else if(user.value==""){
        message.textContent="";
    }
    else{
        message.textContent="Usuario Valido";
        message.style.color="#2aa649";
    }
    
}







    


