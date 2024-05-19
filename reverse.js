function bringSinggara(money){
    var singGaraPrice = 10;
    var quantity = money /singGaraPrice;
    return quantity;
}
var myTaka = 150
var singgaras= bringSinggara(myTaka);
// console.log(singgaras);



function getAverage(assingmnet1, assingmnet2,assingmnet3){
    var total= assingmnet1 + assingmnet2+ assingmnet3;
    var average = total/3;
    return average;
}
var assingmnet1Marks = 60;
var assingmnet2Marks = 58;
var assingmnet3Marks = 59;
var myAverage = getAverage(assingmnet1Marks,assingmnet2Marks,assingmnet3Marks);
console.log(myAverage);


function add(num1,num2){
    var sum = num1+num2;
    return sum;
}
var result1 = add(33,45);
var result2= add(40,40);
var finalResult = add(result1,result2);
console.log(finalResult);