let multiply = function(a,b){
     console.log(a *b);
}

//Function Currying by Bind Function
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(10);

let multiplyBythree = multiply.bind(this,3);
multiplyBythree(10);

function multiplyNumber(x){
    return function(y){
        console.log(x * y);
    }
}

let multipliedBytwo = multiplyNumber(2);
multipliedBytwo(10);

let multipliedByThree = multiplyNumber(3);
multipliedByThree(10);

// Non-curried function
function add(a, b, c) {
  return a + b + c;
}

// Curried version of the add function
function curriedAdd(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
    };
  };
}

// Using the curried function
const addCurried = curriedAdd(2); // Supply the first argument
const addWithTwo = addCurried(3); // Supply the second argument
const result = addWithTwo(4); // Supply the final argument and get the result

console.log(result); // Output: 9


