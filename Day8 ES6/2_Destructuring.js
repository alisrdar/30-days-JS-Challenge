// --------------------------> Feature 2 : destructuring <--------------------------------
// arrays
const arr = [1,2,3,4,5]
const [a,b] = arr;

console.log(a);
console.log(b);

// object
const book ={
    title: "1984",
    author: "George Orwell",
    year: "1949"
};

const {title : title, author : auth} = book;
console.log(title);
console.log(auth);
