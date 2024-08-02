// Using Promises
fetch("https://jsonplaceholder.typicode.com/users")
.then((result) => {
    return result.json();
})
.then((data) => {
    console.log("Data from the Server: ",data);
})
.catch((error) => {
    console.log(error);
})

// --- using Async Await

async function getGithubUser(){
    try {
        const response = fetch("https://api.github.com/users/alisrdar");
        const data = (await response).json();
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}
getGithubUser();
