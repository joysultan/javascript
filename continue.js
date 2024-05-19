var numbers = [45, 55, 65, 75, 88, 75, 66,44, 140 ];
for(i=0;i<numbers.length;i++){
    var number = numbers[i];
   if(number>=60){
    continue;
   }            
   console.log(number)
}

var fruits = ["apple", "mango", "coconate"];
var elements = fruits.indexOf("mango");
console.log(elements);
