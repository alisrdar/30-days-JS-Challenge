// The array
let arr = [1,2,3,4,5];
console.log(arr);

// Transformations
// Map
const newArr = arr.map((val) => {
    return val*2;
});
console.log("Map", newArr);     // all old array elements * 2

// Filter
const filteredArr = arr.filter((val) => {
    return val % 2 ===0;
});
console.log(filteredArr);
 
// Reduce 
let initialVal = 0;
const sum = arr.reduce((result, curVal) => 
    result + curVal,initialVal 
);
console.log(arr, "Reduce: " , sum);
