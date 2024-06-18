
// function negativeNumbers(numbers){
//     let positiveNumber = [];
//     for(let i=0; i<numbers.length;i++){
//         const number = numbers[i];
//         if(number<=0){
//             break;
//         }
//        positiveNumber.push(number);

//     }
//     return positiveNumber;
    
    
// }


// const numbers = [43,55,66,-58,90,77,89,-56];
// const myNumber = negativeNumbers(numbers);
// console.log(myNumber);



function negativeNumbers(numbers){
    let positiveNumber = [];
    for(let i = 0; i<numbers.length; i++){
        const number = numbers[i];
        if(number<0){
            break;
        }
        positiveNumber.push(number);
    }
    return positiveNumber;
}
const numbers = [45,77,90,76,44,66,-90,-77,-80];
const myNumber = negativeNumbers(numbers);
console.log(myNumber);





