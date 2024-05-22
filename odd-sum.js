function getSumOfAnArray(numbers){
    sum = 0;
    for(let i=0; i<numbers.length; i++){
        const index = i;
        const elements = numbers[index];
        sum= sum+ elements;
        console.log(index,elements,sum);
    }
    return sum;
}
function getOddNumbersOfAnArray(numbers){
    const oddNumbers= [];
    for(let i =0; i<numbers.length; i++){
        const index = i;
        const elements = numbers[index];
        if(elements %2!==0){
            console.log(index,elements);
            oddNumbers.push(elements);
        }
        
    }
    return oddNumbers;
}
const myNumbers =[12,22,55,33,14,66,55,44,37];
const myOddNumbers =getOddNumbersOfAnArray(myNumbers);
console.log(myOddNumbers);
const oddNumberSum =getSumOfAnArray(myOddNumbers);
console.log(oddNumberSum);


