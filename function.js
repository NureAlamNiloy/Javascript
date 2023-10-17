/*
Keywork(function) functionName(Parameters){
    statements;
    return value;
}

**function ee 1st brackets er moddhe jeigula thake oigula hoto perameter
** Ar main function theke amra function ee jee value gula pass kori oigula holo Arguments
*/
function add(a,b){ // Perameters
    return a+b;
}

console.log(add(4,5)) // Arguments



// Arrow Function
var n = (arr1, arr2) => arr1.concat(arr2);
console.log(n([1,2,3], [4,5,6]));


// Here (...args) called rest operator
function add(...args){
        return args.reduce((a,b) => a+b,0)
    }
console.log(add(1,2,3,4,5,6))



