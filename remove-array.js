const names=['books', 'cafe', 'kitchen', 'software', 'photoshop', 'capcut', 'books', 'cafe', 'xd', 'photoshop', 'software', 'remote', 'capcut'];

function removeDuplicateData(names){
    const unique = [];
    for(let i =0; i< names.length; i++){
        const name = names[i];
        if(unique.includes(name)=== false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueData = removeDuplicateData(names);
console.log(uniqueData);




