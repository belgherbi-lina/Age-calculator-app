const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const button= document.querySelector('#btn-');
const resultday=document.querySelector('#result-day');
const resultmonth =document.querySelector('#result-month');
const resultyear=document.querySelector('#result-year');
const errorday = document.querySelector('#error-day');
const errormonth = document.querySelector('#error-month');
const erroryear= document.querySelector('#error-year');
function error_states_day(){
     if(day.value== ''){
        document.getElementById("day").classList.add("error");
        document.getElementById("error-label1").classList.add("label-error");
        errorday.textContent= 'error';
        return false ;
    }
    else if( day.value<1 || day.value > 31 || ( month.value==2 && day.value > 29)){
        document.getElementById("day").classList.add("error");
        document.getElementById("error-label1").classList.add("label-error");
        errorday.textContent= "Must be a valid date";
        return false;
    }
    else{
        errorday.innerHTML='';
        return true ;
    }
}   
function error_states_month(){
    if(month.value=== ''){
        document.getElementById("month").classList.add("error");
        document.getElementById("error-label2").classList.add("label-error");
       errormonth.textContent= 'error';
       return false ;
   }
   else if( month.value > 12){
       document.getElementById("month").classList.add("error");
       document.getElementById("error-label2").classList.add("label-error");
       errormonth.textContent= "Must be a valid month";
       return false;
   }
   else{
       errormonth.innerHTML='';
       return true ;
   }
}
function error_states_year(){
    if(year.value== ''){
       document.getElementById("year").classList.add("error");
       document.getElementById("error-label3").classList.add("label-error");
       erroryear.textContent= 'error';
       return false ;
   }else if( year.value >= new Date().getFullYear()){
       if(year.value > new Date().getFullYear()){
        document.getElementById("year").classList.add("error");
        document.getElementById("error-label3").classList.add("label-error");
        erroryear.innerHTML= "Must be in past";
        return false ;
       }else {
        if(day.value >= new Date().getDate() ||month.value >= new Date() .getMonth() ){
        document.getElementById("error-label3").classList.add("label-error");
        document.getElementById("year").classList.add("error");
        erroryear.innerHTML= "Must be in past";
        document.getElementById("error-label2").classList.add("label-error");
        document.getElementById("month").classList.add("error");
        document.getElementById("error-label1").classList.add("label-error");
        document.getElementById("day").classList.add("error");
        return false;
      }
    }
    }else{
        erroryear.innerHTML='';
        return true ;
    }
}
function calculateage(inputday) {
    if(day.value && month.value && year.value){
    let birthday = new Date(inputday);
    let today = new Date();
    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days= today.getDate() - birthday.getDate();
    if(months < 0 || (months===0 && days < 0)){
        years--;
        if(months===0){
            months=11;
        }else {
            months = 12 + months;
        }
        days=30+days;
    }
    if(days>=31){
        months++;
        days=days-31;
    }
    if(years>=0){
        if (months>=0){
            if(days>=0){
                resultyear.innerHTML=years;
                resultmonth.innerHTML=months;
                resultday.innerHTML=days;
            }
        }
    }
}
}
button.addEventListener('click' , error_states_year);
button.addEventListener('click' , error_states_day);
button.addEventListener('click' , error_states_month);
button.addEventListener('click' , function () {
        let inputday =`${year.value}/${month.value}/${day.value}`;
        calculateage(inputday);
})
