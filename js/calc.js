// Calculator using JS //

//for the value 1 //
function addOne(){
    document.calculator.display.value+=1;  
}

//for the value 2 //
function addTwo(){
    document.calculator.display.value+=2;  
}

//for the value 3 //
function addThree(){
    document.calculator.display.value+=3;  
}

//for the value 4 //
function addFour(){
    document.calculator.display.value+=4;  
}

//for the value 5 //
function addFive(){
    document.calculator.display.value+=5;  
}

//for the value 6 //
function addSix(){
    document.calculator.display.value+=6;  
}

//for the value 7 //
function addSeven(){
    document.calculator.display.value+=7;  
}

//for the value 8 //
function addEight(){
    document.calculator.display.value+=8;  
}

//for the value 9 //
function addNine(){
    document.calculator.display.value+=9;  
}

//for the value 0 //
function addZero(){
    document.calculator.display.value+=0;  
}

//for the value + //
function addPlus(){
    document.calculator.display.value+="+";  
}

//for the value - //
function addMinus(){
    document.calculator.display.value+="-";  
}

//for the value x //
function addMultiply(){
    document.calculator.display.value+="*";   
}

//for the value "/" //
function addDivide(){
    document.calculator.display.value+="/";  
}

//Clean the display //
function addClear(){
    document.calculator.display.value="";    
}

//for the value ( //
function lBracket(){
    document.calculator.display.value+="(";   
}

//for the value ) //
function rBracket(){
    document.calculator.display.value+=")";   
}

//for the value . //
function addDot(){
    document.calculator.display.value+=".";    
}

//for the value % //
function addPercent(){
    document.calculator.display.value+="%";  
}

//for the value =. It will display the result //
function displayEqual(){
    var result=eval(document.calculator.display.value);    
    document.calculator.display.value=result;
}
