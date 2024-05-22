function lowest(numbers){
    let lowNumber = numbers [0];
    for(let i = 0; i< numbers.length; i++){
        const index = i;
        const elements = numbers[index];
        if(elements < lowNumber){
            lowNumber = elements;
        }
    }
    return lowNumber;
}

const heights = [167,299,120,165,222,323, 99];
const lowestNumber = lowest(heights);
console.log(lowestNumber); 