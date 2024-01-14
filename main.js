
let getYear = document.querySelector('.year');
let resultBtn = document.querySelector('.btn');
let showResult = document.querySelector('.result');
let warningMessage = document.querySelector('.message');
let currentDate;
let inputYear;
let calculateYear;
let year;
let age;



resultBtn.addEventListener('click', () => {

// warning user when they don't fill the input
if(getYear.value == ''){
warningMessage.innerHTML = 'Please enter your year';
return false;
  } 
  



    currentDate = new Date(); // collect time from computer
    inputYear = new Date(getYear.value);
    // calculate user's age

    calculateYear = new Date(currentDate - inputYear);


    year = calculateYear.getFullYear() - 1;
age = Math.abs(year - 1970);


showResult.innerHTML = `You are ${age}  old`
})



