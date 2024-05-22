function numbers (num1,num2,num3){
    if(num1< num2 && num1< num3){
       return num1;
    }
    else if(num2< num1 &&num2< num3){
        return num2;
    }
    else{
        return num3;
    }
  
}
let firstNumber = 1000;
let secondNumber = 200;
let thirdNumber = 300;
const lowestNumber = numbers(firstNumber,secondNumber,thirdNumber);
console.log(lowestNumber);

function maxOfThree (a,b,c){
    return Math.min(a,b,c);
}
let num1= 1000;
let num2 = 200;
let num3 = 300;
const maxNumber = maxOfThree(num1,num2,num3);
console.log(maxNumber);