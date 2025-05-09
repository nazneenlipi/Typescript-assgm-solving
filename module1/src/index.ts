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

// type GenericArray<T> = Array<T>

// function concatenateArrays<T>(...arrays: T[][]): T[]{
//   // return GenericArray <string>=["a", "b", "c", "d"]
// }

// concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]


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
