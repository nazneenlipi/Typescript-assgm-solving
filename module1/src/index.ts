// num 1
function formattingString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}
// formattingString("Hello");         // "HELLO"
console.log(formattingString("Hello")); // "HELLO"
console.log(formattingString("Hello", true)); // "HELLO"
console.log(formattingString("Hello", false)); // "hello"


// num 2
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating > 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
filterByRating(books);
console.log(filterByRating(books));


// num 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, cur) => acc.concat(cur), []);
}
concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
console.log(concatenateArrays(["a", "b"], ["c"]));
concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
console.log(concatenateArrays([1, 2], [3, 4], [5]));


// num 4

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    console.log(`This car was made by ${this.make} in ${this.year}`);
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
 getModel() {
    console.log(`This is the ${this.model} model`);
  }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
myCar.getModel(); // Output: "Model: Corolla"


// num 5
function processValue(value: string | number): number {
  if(typeof value === "string"){
    return value.length
  }
  if(typeof value === "number"){
    return value*2
  }
  return 0
}
processValue("hello"); // Output: 5
console.log(processValue("hello"))
processValue(10);      // Output: 20
console.log(processValue(10))

// num 6
// Description: Define an interface Product and create a function to find the product with the highest price in an array. If the array is empty, return null.

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if(products.length === 0){
    return null
  }
  return products.reduce((max, product) => (
    product.price > max.price ? product : max
  ))
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];

getMostExpensiveProduct(products);  
console.log(getMostExpensiveProduct(products));  
// Output: { name: "Bag", price: 50 }