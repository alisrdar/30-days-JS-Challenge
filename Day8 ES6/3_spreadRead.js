// --------------------------> Feature 3 <--------------------------------
// Spread
let newArr =[...arr, 6,8,10]
console.log(newArr);

// Read
let sum=0;
function sumArr(...rest) {
    for (let i = 0; i < rest.length; i++) {
        sum = sum + rest[i];
    }
    return sum;
}

console.log("1st calling: ",sumArr(1,3,7,9));
console.log("2nd calling: ",sumArr(2,4,6,8,10,12));

