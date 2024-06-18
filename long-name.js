const bestFriends = ['hablu', 'chablu', 'jhanggir','mortaza','johnAbraham','adamGilGistt','dimbu'];

function longestName(names){

    let longName = names [0];
    for (let i= 0; i<names.length; i++){
        const name = names[i];
        if(name.length> longName.length){
            longName = name;
        }
    }
    return longName;
}


const longName = longestName(bestFriends);
console.log(longName);

