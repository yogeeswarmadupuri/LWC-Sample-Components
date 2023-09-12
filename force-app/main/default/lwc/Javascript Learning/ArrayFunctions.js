const arr = [5,1,3,7,9];

//double the array - [10,2,6,4,12]
const doublearr = arr.map(function(arrval){
    return arrval*2;
});
console.log(doublearr);

//triple the array - [15,3,9,6,18]
const triple = arr.map(function(arrVal){
    return arrVal*3;
});
console.log(triple);

//Binary Convertion
const binaryArray = arr.map((arrVal) => arrVal.toString(2));
console.log(binaryArray);

//filter even numbers
const evenNumbers = arr.filter(arrVal =>{ return arrVal%2 === 0});
console.log(evenNumbers);

//Filter Old Numbers
const oddNumbers = arr.filter(arrVal => arrVal%2 !== 0);
console.log(oddNumbers);

arr.forEach(item => console.log(item));
let copiedArray = [];
console.log(`copied Array before copiedWithIn Method ${copiedArray}`);
copiedArray = arr.copyWithin(copiedArray,0,arr.length);
console.log(`copied Array After copiedWithIn Method ${copiedArray}`);
for(const [key,value] of arr.entries()){
    console.log(`array entry key ${key} and the value is ${value}`);
}
let oddNum = function(currentValue){
    return currentValue%2 !==0;
}
const isBelowThreshold = (currentValue) => {return currentValue%2 !==0};

console.log(arr.every(isBelowThreshold));
console.log(arr.every(oddNum))
console.log(arr.every(function(currentValue){
    return currentValue%2 !==0;
}));
let flatArray = [1,2,3,[4,5,6],[7,8],[9,10]];
flatArray = flatArray.flat(3);
console.log(flatArray);

const flatEvenNum = flatArray.flatMap( x => x%2 ===0);
console.log(flatEvenNum);

mycars = ["Maruti","Tata","VW"];
//push ---> Will add element in the array at the end
mycars.push("BMW");
console.log(`MyCars List after Push function of BMW ====> ${mycars}`);
//Output :- ["Maruti","Tata","VW","BMW"]
//unshift ---> Will add an element in the array at start of the Array
mycars.unshift("Volvo");
console.log(`Mycars List after Unshift function of Volvo ====> ${mycars}`);
//Output :- ["Volvo","Maruti","Tata","VW","BMW"]
//spread operator---> have a flexibilty to add the element at the start or end of the Array
mycars = [...mycars,"Mahindra"];
console.log(`Mycars List after Spread function of Mahindra ====> ${mycars}`);
//output: - ["Volvo","Maruti","Tata","VW","BMW","Mahindra"];
mycars = ["Tata",...mycars];
console.log(`Mycars List after Spread function of TaTa ====> ${mycars}`);
//output:- ["TaTa","Volvo","Maruti","Tata","VW","BMW","Mahindra"];
//Pop ----> Element will be removed from the end
mycars.pop();
//Mahindra end value will be removed
console.log(`Mycars List after Pop of Mahindra ====> ${mycars}`);
//output:- Mycars List after Pop of Mahindra ====> Tata,Volvo,Maruti,Tata,VW,BMW
//shift ----> Element will be removed from the start
mycars.shift("Tata");
console.log(`Mycars List after Tata removed from start ====> ${mycars}`);
//Output :- Mycars List after Tata removed from start ====> Volvo,Maruti,Tata,VW,BMW

//Delete will used to remove the certain element from the array
delete mycars[mycars.length-2];
console.log(mycars);
//removed VM  ['Volvo', 'Maruti', 'Tata', empty, 'BMW']

//IndexOf will used to return the index of the array
//includes will used to return the True or false depends on the value
console.log("Index of Function "+mycars.indexOf("Tata"));
console.log("Is maruti Exists " +mycars.includes("Maruti"));

console.log(mycars.toString());// will convert the List as String with "," as a seperator
console.log(mycars.join(' ')); // Will used to convert the array as string with delimiter

//splice  ---> will accept 2 parameters 
//splice(param1,param2,rest)
//param1 ----> position where the new element will be added
//param2 ----> defines how many elements need to be removed
//rest ----> new elements you have to add and return the array of deleted elements

fruits = ["Mango","banana","Orange","Apple","Mango"];
fruits.splice(2,0,"Kiwi","Grapes");//adding the fruits at the index 2 and 0 elements to removed
console.log(fruits);
//output ['Mango', 'banana', 'Kiwi', 'Grapes', 'Orange', 'Apple', 'Mango']

fruits.splice(2,2,"Dragon");//adding Dragon fruit and removed 2 elements from the index 2
console.log(fruits);
//output:-['Mango', 'banana', 'Dragon', 'Orange', 'Apple', 'Mango']
fruits.splice(0,3); //3 elements will be removed from the 0 index
console.log(fruits);
//output:- ['Orange', 'Apple', 'Mango']

fruits.splice(fruits.length,3);
console.log(fruits);
//no operation from length there is no values

//slice --> return the elemnts between the starting and end of the elements and return the new array won't modify original array
//start element ---> start elemnt indexs
//end element ---> End element - 1

// The key difference between the slice and splice is as follows
//splice ---> will be used to add or remove the elements but modifieds original array
//slice ----> will be used to seperate the element between start and end of array and return the new array
let newFruitsarray = fruits.slice(0,2); //will return an array with 0,1 elements
console.log(newFruitsarray);
//output:- ['Orange', 'Apple']

bankingTransaction = [5000,-7000,9000,-4000,2000];

//divide all ways by 10
bankingTransaction.forEach(currElement => {return currElement/10});
console.log(bankingTransaction);

/*
Write a function that takes a string as input and returns a new string with the first letter of each word capitalized.

Example:
Input: "hello world"
Output: "Hello World

Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"

Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }

Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ

Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]

Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]

Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]
*/

/*Write a function that takes a string as input and returns the number of occurrences of each character in the string as an object.
Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }*/
let nameVar = "Yogeeswar";
let namemap = {};
for(i of nameVar){
    namemap[i] != undefined ? namemap[i] += 1 : namemap[i] = 1;
}
console.log(namemap);

/*Problem 2:
Write a function that takes a string as input and returns the reverse of the string, maintaining the case of each character.

Example:
Input: "Hello World"
Output: "dlroW olleH"*/
let reverseString = "Yogeeswar Madupuri";
let reverseTemp = '';
for(let i=reverseString.length-1;i>=0;i--){
    reverseTemp += reverseString[i];
}
console.log(reverseTemp);

/*Write a function that generate the username of the user based on Firstname, Middlename and Lastname
Input - ankit Dilipji Jain
Output - ADJ*/
let fullname = "ankit Dilipji Jain";
let fullNameList = fullname.split(" ");
console.log(fullNameList);

let tempVal = '';
fullname.split(" ").forEach(function(item){
    tempVal += item.slice(0,1).toUpperCase();
});
console.log(tempVal);

/*Write a function that takes an array of numbers as input and returns a new array with all the even numbers removed.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [1, 3, 5]*/
let numbers = [1, 2, 3, 4, 5, 6];
let oddNumber = numbers.filter(function(currItem){
    return currItem%2 !== 0;
});
console.log(oddNumber);

/*Problem :
Write a function that takes an array of strings as input and returns a new array with only the strings that have a 
length greater than or equal to 5.

Example:
Input: ["apple", "banana", "grape", "orange", "kiwi"]
Output: ["apple", "banana", "orange"]*/

let fruitsData = ["apple", "banana", "grape", "orange", "kiwi"];
let stringWithLength5 = fruitsData.filter(function(currItem){
    return currItem.length >= 5;
});
console.log(stringWithLength5);

/*Write a function that takes an array of numbers as input and returns a new array with only the unique elements (remove duplicates).

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]*/

let duplicateVal = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicate(duplicates){
    let accumelator = [];
    for(let i of duplicates){
        if(!accumelator.includes(i)){
            accumelator.push(i);
        }
    }
    return accumelator;
}
console.log("Accumulator ====> "+removeDuplicate(duplicateVal));

function removeDuplicateUsingreduce(arr){
    let unique = arr.reduce(function(acc,curr){
        if(!acc.includes(curr)){
            acc.push(curr);
        }
        return acc;
    },[]);
    return unique;
}

console.log(removeDuplicateUsingreduce(duplicateVal));













