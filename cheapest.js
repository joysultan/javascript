const Phones = [
    {Brand:'Samsung', camera: 20, storage: 64, price: 30000, color: 'white'},
    {Brand:'oppo', camera: 18, storage: 64, price: 20000, color: 'white'},
    {Brand:'Walton', camera: 12, storage: 64, price: 15000, color: 'white'},
    {Brand:'Iphone', camera: 22, storage: 64, price: 870000, color: 'white'},
    {Brand:'xaomi', camera: 17, storage: 64, price: 35000, color: 'white'},
];
function chepeastPhone(phones){
    let cheapPrice = Phones[0];
    for(let i= 0; i<phones.length; i++){
        const phone= Phones[i];
        if(phone.price < cheapPrice.price){
            cheapPrice = phone;
        }
    }
    return cheapPrice;
}
const mySelection = chepeastPhone(Phones);
console.log(mySelection);