console.log("Today practice is String Methods");
let userName = "Yogeeswar Madupuri";
//Length Method
console.log(userName.length);

//Slice Method In slice Starting index will be consider and end number will be ommited
console.log(userName.slice(0,3));
console.log('slice after reverse the start and end index '+userName.slice(3,0));

//Include method is equivalent to Contains in Apex
console.log(userName.toLowerCase().includes('yog'));

//ToLowerCase method is used to convert the string in lower case
console.log(userName.toLowerCase());

//CharAt method
let vowels = 'aeiouAEIOU';
let vowelConstant = {
    "a" : 0,
    "e": 0,
    "i":0,
    "o":0,
    "u":0,
}
for(let usrName in userName){
    let characterVal = userName.charAt(usrName).toLowerCase();
    if(vowels.includes(characterVal)){
        vowelConstant[characterVal] = vowelConstant[characterVal]+1;
    }
}
console.log('vowel constant '+JSON.stringify(vowelConstant));

//Substring method
console.log(userName.substring(3,0));

//The diff between slice and substring is substring can do the swap between 
//start and end number if it's greater.  Slice will return rmpty string

//Replace Method
console.log(userName.replace('e','y'));

//replace All Method
console.log(userName.replaceAll('a','z'));

//PadStart Method
let updatedVal = userName.padStart(userName.length+4,'*');
console.log(updatedVal);

//PadEnd Mehod
let endUpdateval = userName.padEnd(userName.length+2,"-");
console.log(endUpdateval);

let userNameSplit = userName.split(" ");
console.log(userNameSplit);
let userNameJoin = userNameSplit.join(" ");
console.log(userNameJoin)