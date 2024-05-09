const display = document.getElementById("calcDisplay");

function appendtoDisplay(input){
    display.value +=input;
}

function calculate(input){
    try{
      display.value = eval(display.value)  
    }
    catch(error){
        display.value = "Error";
    }
}