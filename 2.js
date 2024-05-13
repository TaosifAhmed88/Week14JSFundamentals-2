function calculateTotalCartValue(){
    let sum = 0;
    for(i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
console.log(`The total cart value is ${sum}`);
}
calculateTotalCartValue(125,20,30);


// function calculateTotalCartValue(...numbers){

//     let sum = numbers.reduce(function (acc,curr){
//         return acc + curr;
//     },0)
//     console.log(`The totalcart value is ${sum}`);
// }
// calculateTotalCartValue(125,20,30)

