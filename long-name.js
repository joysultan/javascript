const bestFriends = ['hablu', 'chablu', 'jhanggir','mortaza','johnAbraham','adamGilGistt'];
function FindLongName(names){


    let longest = names[0];
    for(let i= 0; i<names.length; i++){
        const name = names[i];
        if(name.length > longest.length){
            longest = name;
        }
    }
    return longest;
 
}

const longName = FindLongName(bestFriends);
console.log(longName);

