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

