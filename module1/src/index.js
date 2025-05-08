function formattingString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
// formattingString("Hello");         // "HELLO"
console.log(formattingString("Hello")); // "HELLO"
console.log(formattingString("Hello", true)); // "HELLO"
console.log(formattingString("Hello", false)); // "hello"
function filterByRating(items) {
    return items.filter(function (item) { return item.rating > 4; });
}
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
filterByRating(books);
console.log(filterByRating(books));
