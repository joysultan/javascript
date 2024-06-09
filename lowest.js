function lowestNumber(numbers){
    let lowNumber = numbers[0];
    for(let i =0; i< numbers.length; i++){
        const index = i;
        const elements = numbers[index];
        if(elements < lowNumber){
            lowNumber= elements;
        }
    }
    return lowNumber;
}
const heights = [12,77,88,99,77,55,65,33,9];
const myLowNumber = lowestNumber(heights);
console.log(myLowNumber);

