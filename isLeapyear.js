function isLeapYear (year){
    const remainder= year%4;
    if(remainder===0){
        return true;
    }
    return false;
}
const myYear = isLeapYear(1991);
console.log(myYear)
const herYear = isLeapYear(2024);
console.log(herYear);