const friends = ['abul, kalam, rakib, jahid, arik, emon, dipu'];
const age = [12, 34, 44, 33, 22, 55, 35];
const isIndependence = true;
const config = ['name:core i3', 'ram: 4gb', 'motherboard: tuf gaming', 'ssd: 1tb nvmem.2'];
function add(num1,num2){
    return num1+ num2;
}
const year = 2007;
console.log(Array.isArray(add));
console.log(friends.includes('kamal'));
if(age.indexOf(34)!== -1){
    console.log(age);
}
else{
    console.log('can not find the number');
}


const newFriends = ['jamal, yeamin, shahed, mortaza, shakib, tamim'];
const allFriends = newFriends.concat(friends);
console.log(allFriends);