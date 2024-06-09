function paperRequirements (book1,book2,book3){
    const firstBookPerPaper = 100;
    const secondBookPerPaper = 200;
    const thirdBookPerPaper = 300;


    const firstBookCost = book1 * firstBookPerPaper;
    const secondBookCost = book2 * secondBookPerPaper;
    const thirdBookCost = book3 * thirdBookPerPaper;
    const totalBookCost = firstBookCost + secondBookCost + thirdBookCost;
    return totalBookCost;
}
const myBookCost = paperRequirements(10,15,20);
console.log(myBookCost);
