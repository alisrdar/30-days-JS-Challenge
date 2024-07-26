// --------------------------> Activity 1 <--------------------------------
// Task1
const book ={
    title: "1984",
    author: "George Orwell",
    year: "1949"
};
console.log(book);

//Task 2
let title = book.title;
console.log(title);

// --------------------------> Activity 2 <--------------------------------
//Task 3
book.getDetails = function () {
    let details = book.author + ", " + book.title;
    return details;
}

console.log(book.getDetails());

// Task 4
book.updateYear = (year) => {
    book.year = year;
}
console.log(book.updateYear(1955));
console.log(book);

// --------------------------> Activity 3 <--------------------------------
const library = {
    name : "National Library",
    books : [
        {
            title: "1984",
            author: "George Orwell",
            year: "1949"
        },
        {
            title: "Harry Potter & the philosopher's stone",
            author: "JK Rowling",
            year: "1994"
        },
        {
            title: "Lord of the Rings : Fellowship of the Ring",
            author: "J.R.R Tolken",
            year: "1954"
        }
    ]
};

console.log(library);

// Task 6
const libraryName = library.name; /*book object*/
let bookTitles = library.books.map (( myBooks ) => {
    return myBooks.title;
});

// --------------------------> Activity 4 <--------------------------------
// Task 7
book.publishing = function (){
    return `The Book '${this.title}' was published in the year: ${this["year"]}`
}

console.log(book.publishing());

// --------------------------> Activity 5 <--------------------------------
// Task 8
const property= [];
const value= [];
for (const val in book) {
  if (book.hasOwnProperty(val)) {
    property.push(val);
    value.push(book[val])
  }
}
console.log(property);
console.log(value);

// Task 9
console.log(Object.keys(book));
console.log(Object.values(book));

