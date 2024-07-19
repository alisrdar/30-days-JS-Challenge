// Activity 1
// Task 1
let arr = [1,2,3,4,5];
console.log(arr);

// Task 2
const firstElement =arr[0];
// const lastElement =arr[4];
const lastElement =arr[arr.length - 1];

console.log(firstElement, lastElement);

// Task 3
arr.push(6);
console.log("Push", arr);

// Task 4
arr.pop();
console.log("Pop", arr);

// Task 5
arr.shift();
console.log("Shift", arr);

// Task 6
arr.unshift(7)
console.log("Unshift", arr);

// ---- Activity 3
// Task 7
const newArr = arr.map((val) => {
    return val*2;
});
console.log("Map", newArr);     // all old array elements * 2

// Task 8
const filteredArr = arr.filter((val) => {
    return val % 2 ===0;
});
console.log(filteredArr);
 
// Task 9
let initialVal = 0;
const sum = arr.reduce((result, curVal) => 
    result + curVal,initialVal 
);
console.log(arr, "Reduce: " , sum);

// -------------------------------- Activity 4 ------------------------------
// Task 10
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i])
}

//Task 11
const array2 =["Chai", "Aur", "Code", "Day6"]
array2.forEach((val) => {
    console.log(val);
}
)
// -------------------------------- Activity 5 ------------------------------
// Task 12
let matrix =[[1,2,3], [4,5,6], [7,8,9]];
console.log(matrix);

// Task 13
const matrix = [[1,2,3], 
                [4,5,6],
                [7,8,9]
                ];
console.log(matrix);

// Task 13
let a22 = matrix[1][1];
console.log(a22);
