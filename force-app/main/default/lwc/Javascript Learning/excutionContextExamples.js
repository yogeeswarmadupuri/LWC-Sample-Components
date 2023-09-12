console.log(`add number before intiallisation ${addnumber}`);


let x = 0;

var addnumber = 6;

//Function Declarative
function add(num1,num2){
    let temp = num1 + num2;
    return temp;
}

//Function Expression
let addasExpression = function(num3,num4,num5){
    let finaladd = num3+num4+num5;
    return finaladd;
}

//arrow function

let addasArrow = (num6,num7) =>{
    let temp = num6+num7;
    return temp;
}
console.log(`add number After intiallisation ${addnumber}`);
console.log(x);
console.log(add(2,3));
console.log(addasExpression(2,3,4));
console.log(addasArrow(5,6));

let addasDec = add(2,4);
let addasDec2 = add(5,6);



function a(){
    let x = 10;
    console.log(x);
    let y =20;
    c();
    function c(){
        let a = 20;
        console.log(x);
        console.log(y);
        d();
        function d(){
            let z = 30;
            console.log(a);
            console.log(z);
        }
    }
}

a();


