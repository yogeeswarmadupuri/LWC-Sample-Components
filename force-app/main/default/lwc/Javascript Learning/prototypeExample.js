let userDetails = {
    firstname: "Yogeeswar",
    lastname:"M",
    age:"31",
    degree:"B.tech",
    percentage:"80"
}

let addressDetails = {
    street:"1159, venkataramana colony",
    city:"Hyderabad",
    state:"Telangana",
    postalCode:"500085",
    country:"India"
}


Object.prototype.addressDetails = addressDetails;
userDetails.addressDetails;
//Output :- {street: '1159, venkataramana colony', city: 'Hyderabad', state: 'Telangana', postalCode: '500085', country: 'India'}
userDetails.addressDetails.city;
//output :- Hyderabad

addressDetails.city = "Tirupati";
userDetails.addressDetails;
//Output :- {street: '1159, venkataramana colony', city: 'Tirupati', state: 'Telangana', postalCode: '500085', country: 'India'}
userDetails.addressDetails.city;
//Output :- Tirupati

function fun(){

}
fun.addressDetails;
//Output :- {street: '1159, venkataramana colony', city: 'Tirupati', state: 'Telangana', postalCode: '500085', country: 'India'}

let fullname = "Yogeeswar M";
console.log(fullname);
fullname.addressDetails;
//Output :- {street: '1159, venkataramana colony', city: 'Tirupati', state: 'Telangana', postalCode: '500085', country: 'India'}

fullname.__proto__;
//String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …} is equivalent to String.Prototype
String.prototype;
//String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}

fullname.__proto__.__proto__;
//{addressDetails: {…}, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}

fun.__proto__;
//ƒ () { [native code] }

fun.__proto__.__proto__;
//{addressDetails: {…}, constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}

//As you can observe the prototype chain of the function and the Variable is same end with an Object
//Any function prototyping chain will be ended with the Object
//Object Prototype chain will be null



