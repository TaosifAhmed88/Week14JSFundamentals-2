const productDetails = {
    name:"Apple 2020 MacBook Air Laptop",
    price:82000,
    color:"Grey",
    hardDisk:"256 GB",
};

console.log("Below are the product details.");
     for(let [key,values] of Object.entries(productDetails))
        {
        console.log(`${key} : ${values}`);
     }
