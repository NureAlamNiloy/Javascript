var a = 0;
var b = 1;
console.log(a,b);
for(var i = 1; i<10; i++){
    var nextsum = a+b;
    console.log(nextsum);
    a = b;
    b = nextsum;
}