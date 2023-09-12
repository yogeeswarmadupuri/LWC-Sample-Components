let counter = 0;
function getData(){
    ++counter;
    console.log("Search get data function is called",counter);
}

function doSomeMagic(getdata, timeout){
    let timer;
    return function(){
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(function(){
            getdata.apply(context,arguments);
        },timeout);
    }
}
let deboundExample = doSomeMagic(getData,300);