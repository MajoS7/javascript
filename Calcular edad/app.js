const name1 =document.querySelector('#name');
const age =document.querySelector('#age');
const btn_calculate =document.querySelector('#btn_calculate');
const txt_vote =document.querySelector('#txt_vote');
btn_calculate.addEventListener('click', calculate_age)

function calculate_age(){

    const convert_age = parseInt(age.value);
    const capture_name =name1.value;

    if (capture_name=='' || convert_age==''){
        txt_vote.textContent='Por favor rellene todos los campos';
    }
    else if (convert_age<0){
        txt_vote.textContent='Por favor ingrese numeros positivos';
    }
    else if (convert_age>=18){
        txt_vote.textContent=`${capture_name} puede votar`;
    }
    else{
        txt_vote.textContent=`${capture_name} no puede votar`;
    }

    name1.value="";
    age.value="";
}


