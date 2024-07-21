// Task 5
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

// --------------------------> Activity 3 / another simpler interpretation <--------------------------------
// Task 5
const library3 = {
    name : "National Library3",
    books : {
        book1 : "1984",
        book2 : "Harry Potter & the philosopher's stone",
        book3 : "Lord of the Rings : Fellowship of the Ring"
    }
}
console.log(library3);

// Task 6
console.log(library3.name); 
console.log(Object.values(library2.books));


console.log(libraryName) 
console.log(bookTitles);

// Another way / interpretation
let library2 = {
    name : "National Library",
    books :{
        book1 : {
            title: "1984",
            author: "George Orwell",
            year: "1949"
        },
        book2 : {
            title: "Harry Potter & the philosopher's stone",
            author: "JK Rowling",
            year: "1994"
        },
        book3 : {
            title: "Lord of the Rings : Fellowship of the Ring",
            author: "J.R.R Tolken",
            year: "1954"
        }
    }
}
let titles =[]
 for (const key in library.books) {
    if (Object.hasOwnProperty.call(library.books, key)) {   
        titles.push(library.books[key].title)
    } 
}

console.log(libraryName, titles);
