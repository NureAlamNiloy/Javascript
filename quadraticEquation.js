var a = 1;
var b = 5;
var c = 2;
var d = (b*b) - (4*a*c)
if(d>0){
    var x1 = (-b+Math.sqrt(d))/(2*a);
    var x2 = (-b-Math.sqrt(d))/(2*a);
    console.log("The roots are: ",x1,"and",x2);
}
else if(d==0){
    var x = -b/(2*a);
    console.log("The Roots is = ", x);
}
else{
    console.log("The Roots is not possible");
}