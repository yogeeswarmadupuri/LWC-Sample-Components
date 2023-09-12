function welcomeMessage(userName){
    console.log(`${userName}, Welcome to Javascript learning Class`);
}

let sumodValue = add(1,2);
console.log('sum of value '+sumodValue);

//Function Declaration
function add(...number){
    let sum = 0;
    if(number){
        for(let no of number){
            sum += Number(no);
        }
    }
    return sum;
}

//Function Expression
let addition = function(...number){
    let sum = 0;
    if(number){
        for(let no of number){
            sum += Number(no);
        }
    }
    return sum;
}

//Arrow Function
let addWithArrow = (...number) => {
    let sum = 0;
    if(number){
        for(let no of number){
            sum += Number(no);
        }
    }
    return sum;
}

let addNumWithArrow = addWithArrow(1,2,3,4,5,6);
console.log('addNumWithArrow '+addNumWithArrow);

let sumOfVal = addition(1,2,3,4);
console.log('Sum Of Val '+sumOfVal);


welcomeMessage('Yogeeswar');

//Arrow function without param and single line
let greet = () => `Welcome to Javascript Learning`;
console.log('Greet With Arrow '+greet())

//Arrow Function with Parameter and single line
let greetwithParam = (username,course) => `${username}, Welcome to ${course} learning`;
console.log(greetwithParam('Yogeeswar','Java'));

//Arrow Function with Multi Line and with out Params
let arrowWithOutParam = () => {
    console.log('Arrow Function With out Param');
    console.log('Arrow Function');
}

arrowWithOutParam();


//Arrow Function with Multi Line and with Params
let arrowWithParam = (userName,courseName) => {
    console.log('Arrow Function with Parameter');
    console.log(`${userName}, Welcome to ${courseName} learning`);
    
}

arrowWithParam('Yogeeswar','Java');


let callbackFunctions = (userName,callMe) => {
    console.log(`Hello ${userName},`);
    callMe();
}

function welcomeNote(){
    console.log(`Welcome to the Javascript learning`);
}

function goodByeNote(courseName){
    console.log(`Sad to leave you from ${courseName} course`);
}

callbackFunctions('Yogeeswar',welcomeNote);


