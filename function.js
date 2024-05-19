function bar() {
    console.log("bar");
}

function foo() {
    console.log("foo");
    bar();
}

foo();

function make_Avg (num1, num2,num3){
    var sum = num1+num2+num3;
    var totalAvg = sum/3;
    return totalAvg;
}
var getAvg = make_Avg(10,15,20);
// console.log(getAvg);


var signal = 'green';
switch (signal){
    case 'red':
    console.log('dont cross the road now there is a red signal');
    break;
    case 'yellow':
        console.log('dont go towards the road there is a yellow signal');
        break;
        default:
            console.log('Now go and cross the road there is green signal for road cross')
}

var color = 'purple';
if(color=== 'red'){
    console.log('you are my red friend');

}
else if (color=== "green"){
    console.log('you are my green friend');

}
else if (color=== "black"){
    console.log('you are my kala kala friend');

}
else if (color=== "white"){
    console.log('you are my white friend');

}
else if (color=== "purple"){
    console.log('you are my beguni friend');

}
else{
    console.log('you are my himu friend')
}