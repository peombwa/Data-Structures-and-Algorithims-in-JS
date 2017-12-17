

var num = 5;

function factorial(num) {
    var product = 1;
    for(var i = num; i >= 1; i --){
        product *= i;
    }

    return product;
}

function factorialRecursive(num){
    // stoping point
    if(num == 1){
        return num;
    }else{
        return num * factorialRecursive(num - 1);
    }
}

console.log("Factorial is : ", factorialRecursive(num));