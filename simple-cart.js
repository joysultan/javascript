const shopping = [
    {name: 'sunglass', price: 4000, quantity: 5},
    {name: 'shirt', price: 2000, quantity: 3},
    {name: 'Hat', price: 1000, quantity: 2},
    {name: 't-Shirt', price: 1000, quantity: 4},
    {name: 'pant', price: 1500, quantity: 3},
    {name: 'belt', price: 1500, quantity: 1},
];
function totalCost(products){
    let sum = 0;
    for (let i = 0; i<products.length; i++){
        const product = products[i];
        const totalPrice = product.price * product.quantity;
        sum = sum + totalPrice;
    }
    return sum;
}
const totalExpense= totalCost(shopping);
console.log(totalExpense);
