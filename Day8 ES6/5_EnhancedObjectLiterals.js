// --------------------------> Feature 5 <--------------------------------
// Enhanced Object Literals
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

// Computed Obj property name
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
