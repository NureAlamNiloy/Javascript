var num = 20;
var flag = true
for(var i = 2; i< num; i++){
    if(num%i == 0){
        flag = false;
    }
}

if(flag){
    console.log("Prime Number")
}
else{
    console.log("Not a Prime Number")
}