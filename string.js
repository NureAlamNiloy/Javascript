/*
strings can also be defined as objects with the keyword new:
let y = new String("John");

*/

var text = "Niloy tomi \"Javascript\" paron naa Chiii aita koto easy";
var text2 = new String("Jaw sikhe Felo ekhoneee"); 
console.log(text);
console.log(text +"____" + text2);

var a = "Niloy";
var b = new String("Niloy");
console.log(a==b);
console.log(a===b);


//  Some String Function
var str = "Niloy Hard Work na korle kii Job hove??";

// Note: Javascript er built in fuction call korle jodi argument na lage taile first braket dite hoy na jodi argument pass kora lage taile bracket use kora hoy

console.log(str.length);
// if slice value is negative its count from end
console.log(str.slice(0, 15)) ;
console.log(str.slice(-39, -1));
console.log(str.replace("Niloy", "Nure Alam Niloy"));
//  if I want to replace same multiple values user /g flag  Also Do this using replaceAll metnod
console.log(str.replace(/o/g, "AAA"));
console.log(str.replaceAll("o", "NNNNN"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
var num = 5;
// convert a int value to string
console.log(num.toString());

// Sring Search Function
var search = "Niloy Jony Arafat Siam"
console.log(search.indexOf("y"))
console.log(search.lastIndexOf("y"))
console.log(search.search("Siam"))
console.log(search.match("Siam"))

let name1 = `He's my best friend "Jony"`;
console.log(name1);
let name2 = `My name is ${a} and Only ${b}`;
console.log(name2);
console.log(3+true);

let c = BigInt(1234567890123456789012345);
console.log(c);

// Change the string
var freeCode = "hiloy";
freeCode = "Niloy";
console.log(freeCode)


// Add in string
function strfun(n1,n2,n3,n4){
    var str = "";
    str+=" "+n1+", "+n2+", "+n3+", "+n4;
    return str;
}
console.log(strfun("Niloy", "Jony", "Arafat", "Siam"));


