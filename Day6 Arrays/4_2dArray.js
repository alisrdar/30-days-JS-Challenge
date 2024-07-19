// the 2d-Array
const matrix = [[1,2,3], 
                [4,5,6],
                [7,8,9]
                ];
console.log(matrix);

// manipulation
// a specific element
let a22 = matrix[1][1];
console.log(a22);

// all elements
matrix.forEach((row) => {
    row.forEach((element) => {
        console.log(element);
    })
});
