// --------------------------> Activity 1 <--------------------------------
// Task 1
const prom1 = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve("Grinding: Day 11 of Javascript Coding Challenge")
    },2000)
});

prom1.then(function(response){
    console.log(response);
})

// Task 2
const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (error) {
            reject("Error: Big Brother doesn't want you to continue")
        } else {
            resolve()
        }
    }, 2000)
})

prom2.then()
.catch((error) => {
    console.log(error);
})
// --------------------------> Activity 2 <--------------------------------
// Task 3
const promiseChain = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let rand = Math.random();
        // it will resolve 70% of the time
        if(rand < 0.7){
            resolve({username: "alisrdar", password: "4561" })
        } else{
            reject("Error, something went wrong!")
    }}, 1000)
});
// Promise Chaining
promiseChain
.then(function(usr){
    console.log(usr);
    return usr.username
}).then(function(uName){
    console.log(uName);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("Promisee will either be resolved or get rejected!")
})

// --------------------------> Activity 3 <--------------------------------
// Task 4
const prom3 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve({name: "Ali", password: "123@gmail.com"})
    },2500)
});

async function consumePromise3() {
    const response = await prom3;
    console.log("Resolved via Async & await",response);
}
consumePromise3()

// Task 5

const prom4 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve()
        } else {
            reject("Big Brother has rejected your request!")
        }
    },3000)
});

async function consumePromise4() {
    try {
        const response = await prom4;
        console.log("Resolved via Async",response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise4()

// --------------------------> Activity 4 <--------------------------------
// Task 6 - Fetch returns a promise

fetch("https://api.github.com/users/alisrdar")
.then((result) => {
    return result.json();
})
.then((data) => {
    console.log("Data from the Server: ",data);
})
.catch((error) => {
    console.log(error);
})

// task 7 --- using Async Await
async function getGithubUser(){
    try {
        const response = fetch('https://api.github.com/users/hiteshchoudhary');
        const data = (await response).json()
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}
getGithubUser();

// --------------------------> Activity 5 <--------------------------------
// Task 8
let promises = Promise.all([prom1, prom2, prom3, prom4]);
promises.then((data) => {
    console.log("all the Promises: ",data);
})
.catch(error => console.log(error))

// Task 9
promises = Promise.race([prom1, prom2, prom3])
promises.then((data) => {
    console.log("data of the winnig promise is : ",data);
})
.catch(error => console.log(error));

