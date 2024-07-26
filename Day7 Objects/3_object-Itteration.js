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

