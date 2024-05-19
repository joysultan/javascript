function isEven(number){
    const remainder = number%2;

    if(remainder===0){
      return true;
    }
    else {
        return false;
    }
}
const mynumber=isEven(307);
console.log(mynumber);
const herNumber = isEven(307);
console.log(herNumber);
