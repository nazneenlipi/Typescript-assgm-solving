var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// num 1
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
// num 2
function filterByRating(items) {
    return items.filter(function (item) { return item.rating > 4; });
}
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
filterByRating(books);
console.log(filterByRating(books));
// num 3
function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (acc, cur) { return acc.concat(cur); }, []);
}
concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
console.log(concatenateArrays(["a", "b"], ["c"]));
concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
console.log(concatenateArrays([1, 2], [3, 4], [5]));
// num 4
var Vehicle = /** @class */ (function () {
    function Vehicle(make, year) {
        this.make = make;
        this.year = year;
    }
    Vehicle.prototype.getInfo = function () {
        console.log("This car was made by ".concat(this.make, " in ").concat(this.year));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, year, model) {
        var _this = _super.call(this, make, year) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.getModel = function () {
        console.log("This is the ".concat(this.model, " model"));
    };
    return Car;
}(Vehicle));
var myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
myCar.getModel(); // Output: "Model: Corolla"
// num 5
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    if (typeof value === "number") {
        return value * 2;
    }
    return 0;
}
processValue("hello"); // Output: 5
console.log(processValue("hello"));
processValue(10); // Output: 20
console.log(processValue(10));
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    return products.reduce(function (max, product) { return (product.price > max.price ? product : max); });
}
var products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
getMostExpensiveProduct(products);
console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }
