let namedetails = {
    firstName:"Yogeeswar",
    lastname:"Madupuri"
}

let sportPersonDetails = {
    firstName :"Sachin",
    lastname : "Tendulkar"
}

let fullname = function(city,state){
    console.log(this.firstName + " "+ this.lastname +" From "+city +" in the state "+state);
}

fullname.apply(namedetails,["Tirupati","Andhra Pradesh"]);
fullname.call(sportPersonDetails,"Mumbai","Maharastra");

let mynameDetails = fullname.bind(namedetails,"Tirupati","Andhra Pradesh");
console.log(mynameDetails);
mynameDetails();



let userName = {
    firstName :"Sachin",
    lastname : "Tendulkar"
}

let printUserDetails = function(city,state){
    console.log(this.firstName + " "+ this.lastname +" From "+city +" in the state "+state);
}

Function.prototype.mybind = function(...args){
    let callignObj = this;
    let param = args.slice(1);
    return function(...parms){
        callignObj.apply(args[0],[...param,...parms]);
    }
}

let mybindFunc = printUserDetails.mybind(userName,"Mumbai");
console.log(mybindFunc);
mybindFunc("Maharastra");
