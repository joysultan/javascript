var myComputer = {
    proccessor: 'amd ryzen 3',
    ram : 'ddr4 8 gb',
    color: 'silver',
    price : 55000
}
// console.log(myComputer.ram);
myComputer.proccessor= 'amd ryzen 5600g';
// console.log(myComputer);
    
myComputer['ram'] = 'ddr5 16gb';
// console.log(myComputer);

var properties = Object.keys(myComputer);
var value = Object.values(myComputer);
console.log(properties);
console.log(value);

var propertyName = 'ram';
var propertyValue = myComputer[propertyName];
console.log(propertyValue);

var myItems={
    books: 3,
    pen:10,
    bottle:3,
    coffeCup:2,
    mobile: 5,
    sunGlass: 5,
    laptop: 2,

}
var keys= Object.keys(myItems);
// console.log(keys);
var values = Object.values(myItems);
// console.log(values)


for(i=0;i<keys.length;i++){
    var propertyName= keys[i];
    var propertyValue = myItems[propertyName];
    console.log(propertyName,propertyValue);
    

}



