const products = [
    {
        id: 1, name: 'xaomi smart Phone', price: 14000
    },
    {
        id: 2, name: 'lenovo laptop', price: 14000
    },
    {
        id: 3, name: 'samsung note 8 phone', price: 14000
    },
    {
        id: 4, name: 'Asus smart Laptop', price: 14000
    },
    {
        id: 5, name: 'symphony new ultra Phone', price: 14000
    },
    {
        id: 6, name: 'inter core i 9th Dekshtop', price: 14000
    },
    {
        id: 7, name: 'mechanical zebrand keyboard', price: 14000
    },
    
]
function matchProducts(product, search){
    const matched = [];
    for(const product of products){
      if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product);
      }
    }
    return matched;
}
const result = matchProducts(products, 'phone');
console.log(result);