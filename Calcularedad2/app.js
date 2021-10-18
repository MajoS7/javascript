const name1 =document.querySelector('#name');
const date_born =document.querySelector('#date_born');
const btn_calculate =document.querySelector('#btn_calculate'); 
const txt_vote =document.querySelector('#txt_vote');
btn_calculate.addEventListener('click', calculate_age)

function calculate_age(){
    
    let birthday = date_born.value.split('-');

    let current_date = new Date();
    let year = current_date.getFullYear();
    let month = current_date.getMonth()+1;
    let day= current_date.getDate();
   
    if (name1.value=='' || date_born.value==''){
        txt_vote.textContent='Por favor rellene todos los campos';
    }

    else if ((month -birthday[1]>=0 || day-birthday[2]>=0) && year -birthday[0]>=18){
        txt_vote.textContent=`${name1.value} puede votar`;
    }
    else if(year -birthday[0]-1>=18){
        txt_vote.textContent=`${name1.value} puede votar`;
    }
    else{
        txt_vote.textContent=`${name1.value} no puede votar`;
    }

    name1.value="";
    date_born.value="";

}


