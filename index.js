const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function (accumulator, current) {
    return accumulator + current;
});



// for (let i = 0; i < batteryBatches.length; i++) {
//     totalBatteries += batteryBatches[i];
// }

// const products = [
//     {name: 'Shampoo', price:4.99},
//     { name: 'Donuts', price: 7.99 },
//     { name: 'Cookies', price: 6.49 },
//     { name: 'Bath Gel', price: 13.99 }
// ];

// function ourReduce(arr, reducer, init) {
//     let accum = init;
//     for (const element of arr) {
//         accum = recuver(accum, element);
//     };
//     return accum;
// }

// function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;
// }




// function getTotalAmountForProducts(products) {
//     let totalPrice = 0;

//     for(const product of products) {
//         totalPrice += product.price;
//     }

//     return totalPrice;
// }