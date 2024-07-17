//Task9
function printAnything(str) {
    console.log(str);
}
function higherOrder(num,ftn) {
    for (let i = 0; i < num; i++) {
        ftn("Ali");
    }
    return `higher executed ${num} times`
}
console.log("higher Order sum: "+higherOrder(4,printAnything));
//Task 10
function square(num) {
    return num*num;
}
function checkEven(num){
    return num%2===0;
}
function higherOrderOp(operation1, operation2, val){
    let result=0;
    result= operation1(val)
    return operation2(result);
}
console.log(higherOrderOp(square,checkEven, 12));
