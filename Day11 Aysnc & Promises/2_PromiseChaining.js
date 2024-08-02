// Promise Chaining a better example
function simulateFetch(stop,delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log(`fetched data from ${stop}`)
            resolve(stop)
        }, delay)
    });
}

simulateFetch("Stop 1", 2000)
.then((data) => {
    console.log(`fetching data from ${data}`);
    return simulateFetch("stop 2", 1000)
})
.then((data) => {
    console.log(`fetching data from ${data}`);
    return simulateFetch("Stop 3", 3000)
})
.then((data) => {
    console.log(`fetching data from ${data}`);
    return simulateFetch("Stop 4", 1500)
})
.then(data => {
    console.log(`fetching data from ${data}`);
    return simulateFetch("Stop 5", 600)
})
.then((data) => {
    console.log(`fetching data from ${data}`);
    return simulateFetch("all Data Retrived Successfuly")
})
.catch((error) => {
    console.log("Error: ",error);
})