// --------------------------> Activity 1 <--------------------------------
// Task 1
const Name = "Ali";
let age = 21;

let str = `Hello! my name is ${Name} & I'm ${age} years old!`;
console.log(str);

// Task 2
let multiStr = `Important topics covered so far in 30 challenge 
- loops 
- Functions  \n -Arrays 
- Objects 
- ES6+ fetures`;

console.log(multiStr);

// --------------------------> Activity 2 <--------------------------------
// Task 3
const arr = [1,2,3,4,5]
const [a,b] = arr;

console.log(a);
console.log(b);

//Task4
const book ={
    title: "1984",
    author: "George Orwell",
    year: "1949"
};

const {title : title, author : auth} = book;
console.log(title);
console.log(auth);

// --------------------------> Activity 3 <--------------------------------
// Task 5
let newArr =[...arr, 6,8,10]
console.log(newArr);

//Task 6
let sum=0;
function sumArr(...rest) {
    for (let i = 0; i < rest.length; i++) {
        sum = sum + rest[i];
    }
    return sum;
}

console.log("1st calling: ",sumArr(1,3,7,9));
console.log("2nd calling: ",sumArr(2,4,6,8,10,12));

// --------------------------> Activity 4 <--------------------------------
// Task 7
function product(num1, num2=1) {
    return num1 * num2;
}

console.log(product(4));
console.log(product(8,6));

// --------------------------> Activity 5 <--------------------------------
// Task 8
const userName = "Dolly";
let email = "chapriChaiWala@gmail.com";
let isLoggededIn = true;
let notifications = 2;

const fbUser ={userName, email, isLoggededIn, notifications,
    ShowNotification (){
        console.log(`Hey ${this.userName} you have ${notifications} messages`);
    }
}
console.log(fbUser);

// Task 5
const variable = "name";
age = 18;
const marks = 80;
const result1= "Passed";
const result2 = "Fail";
let var2 = "SSN"

const student ={
    [variable] : "Sokka",
    [marks >  50 ? result1 : result2] : true,
    [var2] : "12456789" 
}

console.log(student);
