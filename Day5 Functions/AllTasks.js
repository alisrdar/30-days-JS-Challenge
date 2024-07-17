//Activity 1
let a=7;
function checkEven(num){
    let res= num%2===0;
    return (res=== true)? "Even": "Odd"
}
function square(num) {
    return num*num;
}
console.log(checkEven(9));
console.log(square(a));

//Activity2
function maxNum(num1,num2) {
    // let res= (num1>num2)? num1: num2;
    if (num1 > num2) { 
        return num1
    }else return num2;
}
console.log("Maximum number is:",maxNum(4,12));

function concatStr(str1,str2) {
    // if (typeof str1==='string' && typeof str2=== 'string') {
    //   return str1+ str2;
    // }else{
    //     console.log("Not valid strings");
    // }
    return str1+""+ str2;
}
console.log(concatStr("Java","Script"));

//Activity 3
let sum=(num1, num2)=>{
    let sum= num1 +num2;
    return sum;
}
//simple version: 
// let sum= (num1, num2)=> num1 + num2
console.log("Arrow sum: ",sum(4,7));

//Task 6
let spChar='$'
let checkStr1=(str,spChar)=>{
    for (const letter of str) {
        if (letter == spChar) {
            return true
        }
    }
    return false;
}
let myStr="20 thousand dollars";
let myStr2="I have 20$ only!"
console.log(`The string ${myStr} contains: ${spChar}`, checkStr1(myStr));
console.log(`The string ${myStr} contains: ${spChar}`, checkStr1(myStr2));
//Task 6 simpler version
let char="$";
let checkStr=(str,spChar)=>{
    return str.includes(spChar);
}
console.log("the special character:"+char+" is present",checkStr("Jhon won 2 million $ lottery",char));
console.log("the special character:"+char+" is present",checkStr("Jhon won 2 million dollar lottery", char));

// Activity 4
function product(num1, num2=5) {
  return num1*num2;
}
function greetings(name,age=18) {
    let msg=`Hello ${name}, How are you doing! Congrats you'll turn ${age+1} this year`;
    return msg;
}
console.log("Product of numbers: ",product(4));
console.log(greetings("Ali"));

// Activty  5
function printName(name) {
    console.log(name);
}

function higherOrder(num,ftn) {
    for (let i = 0; i < num; i++) {
        ftn("Ali");
    }
    return `higher executed ${num} times`
}
console.log("higher Order sum: "+higherOrder(4,printName));

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
