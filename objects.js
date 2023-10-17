/*
JavaScript ee Objects onekta variable er moto
but variable single value assign kora jay 
On The other hand objects ee multiple value assign kora jay 

Objects er value kee 2 vabe access kora jay:
1. objectName.propertyName
2. objectName["propertyName"]
*/

var info = {name:"Niloy", roll:581567, dapartment: "Computer", role: "Captain"}

console.log(info.name) // Dot Notation
console.log(info["roll"]) //Bracket Notation
console.log(info.dapartment)
console.log(info["role"])

// Update objects value
info.name = "Nure Alam Niloy";
console.log(info);

// Add New Property in objects
info.n = 100;
console.log(info); 

// Delete  property from objects
delete info.n
console.log(info); 

// Check a property is avilable or not in the objects using hasOwnProperty() finction 
console.log(info.hasOwnProperty("name"))

// Complex object
var niloy = [
    {
      "nam": "Niloy",  
      "roll": 3489207,
      "fevTeacher": [
        "Wadud Sir",
        "Azmul Sir",
        "Foysal Sir",
        "Tanvir Sir"
      ] ,
      "department":"Computer"
    }
]
console.log(niloy)


//  Nasted Object

var niloy2 = {
    "Student":{
        "std1":{
            "name":"Niloy",
            "Roll":581567
        },
        "std2":{
            "name":"Arafat",
            "Roll":581533
        },
        "std3":{
            "name":"Jony",
            "Roll":581593
        }
    },
    "teacher":{
        "t1":{"Name":"Wadud Sir"},
        "t2":{"Name":"Tanvir Sir"},
        "t3":{"Name":"Azmul Sir"},
    }
}
console.log(niloy2);
