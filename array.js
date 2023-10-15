/*
Note : You can change the value of constant array in javascript
*/

const arr = ["Niloy", 581567, "Siam", "Sabbir", "Arafat", "Jony"];
console.log(arr);
arr[2] = 581593;
console.log(arr);
console.log(arr.length);
// Sort The Array
console.log(arr.sort()); 
console.log(arr.join("*")); 
arr.pop();
arr.push("PushIt"); 
console.log(arr); 
// console.log(arr.shift("Siam")); 
// console.log(arr.unshift("Siam")); 
console.log(arr.reverse()); 

// Some others important array function => forEach, Filter, reduce, flatMap 

// Nasted Array in javascript

var nestedArr = [["Niloy", 581567],["Jony", 581593],["Arafat", 581533],["Shiam", 581538],];
console.log(nestedArr);
// It's work like pop function... it's remove the 1st element off array
nestedArr.shift(); 
console.log(nestedArr);
// It's work like push function... it's add the value in 1st element off array
nestedArr.unshift([ 'Niloy', 581567 ]); 
console.log(nestedArr);





