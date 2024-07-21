// Creating Objects
const book ={
    title: "1984",
    author: "George Orwell",
    year: "1949"
};

// adding Methods
book.getDetails = function () {
    let details = book.author + ", " + book.title;
    return details;
}

book.updateYear = (year) => {
    book.year = year;
}

// logging properties
console.log(book);
console.log(Object.keys(book));

// logging Methods()
console.log(book.getDetails());
console.log(book.updateYear(1955));
console.log(book);
