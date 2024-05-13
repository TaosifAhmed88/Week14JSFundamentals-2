const products = [
    {
        name:"Laptop",
        price: 120000
    },
    {
        name:"Mobile",
        price: 70000
    },
    {
        name:"Laptop Bag",
        price: 20000
    },
    {
        name:"Watch",
        price: 20000
    },
    {
        name:"Mobile Charger",
        price: 1500
    },
]

function findMaxAndMinProducts(products) {
    let maxProduct = products[0];
    let minProduct = products[0];

    for (let i = 1; i < products.length; i++) {
        if (products[i].price > maxProduct.price) {
            maxProduct = products[i];
        }
        if (products[i].price < minProduct.price) {
            minProduct = products[i];
        }
    }
    return {maxProduct,minProduct};
}
const {maxProduct,minProduct} = findMaxAndMinProducts(products);
console.log(`The product with maximum amount is ${maxProduct.name} which is priced at Rs.${maxProduct.price}`);
console.log(`The product with minimum amount is ${minProduct.name} which is priced at Rs.${minProduct.price}`);