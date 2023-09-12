let a = 20;

function x(){
    let a = 30;
    let b = 40;
    let c = 60;
    d();
    function d(){
        console.log("Function d is executed");
    }
    let temp = function y(){
        console.log(a);
        console.log(b);
    }
    
    console.log("Excuted Statement after return");
    return temp;
}

let z = x();
z();

//Printing 1,2,3,4,5, in a span of second difference
function callSetTimeOut(){

    function close(x){
        setTimeout(function printVal(){
            console.log(x);
        },x*1000);
    }

    for(let i=1;i<=5;i++){
        close(i);
    }
}

let callout = new callSetTimeOut();
window.addEventListener('click',function(){
    console.log("print event listener Execution");
});

document.getElementById('TryAnother').removeEventListener('click',function(){
    console.log('event removed');
});
