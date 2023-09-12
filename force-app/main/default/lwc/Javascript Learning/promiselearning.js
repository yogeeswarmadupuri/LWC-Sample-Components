/* let MOVIES_JSON_API = "http://example.com/movies.json";
const movieList = fetch(MOVIES_JSON_API);
console.log(movieList);
movieList.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
}) */

let cart = ["Shoes","fashion","Electronics"];
createOrder(cart).then(function(orderId){
    console.log(`Order Id is ${orderId}`);
}).catch(function(error){
    console.log(`Error Value is ${error}`);
});

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(validateCart(cart)){
            setTimeout(function(){resolve("12345")},5000);
        }else{
            const error = new Error("The cart is Empty");
            reject(error);
        }
    });
    return pr;
}

function validateCart(cart){
    return false;
}

function proceedToPayment(orderId){
    if(orderId){

    }
}





const cart1= ['shoes', 'pants', 'kurta'];
createOrder(cart1)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function (orderID) {
        return proceedToPayment(orderID)
    })
    .then(function ({ message, amt }) {
        console.log(message, 'of amount:', amt);
        return showOrderSummary(message, amt);
    })
    .then(function ({ message, amt }) {
        console.log('Your wallet has beed debited by:', amt);
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function () {
        console.log('No matter what happens, I will get executed');
    });

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error('Cart is not valid!');
            reject(err);
        }
        const orderId = '12345';
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000)
        }
    });
    return pr;
}
function proceedToPayment(orderID) {
    return new Promise(function (resolve, reject) {
        resolve({ message: `Payment Successful for order id: ${orderID}`, amt: 2500 });
    })
}

function showOrderSummary(paymentInfo, amt) {
    return new Promise(function (resolve, reject) {
        if (amt >= 2000) {
            resolve({ message: 'You have ordered items that cost ${amt} RS', amt });
        } else {
            reject(new Error('Please buy more for discount'));
        }
    })
}

function validateCart(cart) {
    return true;
}



