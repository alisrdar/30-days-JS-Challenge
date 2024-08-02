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

prom2
.catch((error) => {
    console.log(error);
})
