function add (num1, num2){
    if(typeof num1!== 'number' || typeof num2!== 'number'){
        return 'please enter a Number'
    }
    return num1 + num2;
}
const result = add(22, 33);
console.log(result);