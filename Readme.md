# 📘 TypeScript Insights

##  Interface vs Type in TypeScript

TypeScript offers both `interface` and `type` for describing the structure of data, but they aren’t identical.

### Similarities
Both can define object shapes:

```ts
interface User {
  name: string;
  age: number;
}

type Product = {
  title: string;
  price: number;
};

### When to use what?
Use interface when working with objects and class-based structures.

Use type when working with complex types (unions, primitives, mapped types).








### 🔑 Understanding keyof in TypeScript — The Key to Safer Code

This project demonstrates the use of the keyof keyword in TypeScript. It helps you safely refer to the keys of an object as types, making your code more reliable.

Overview
The keyof operator extracts the keys of an object and gives you those keys as string literal types. It ensures that you only use valid keys from an object in your code.

Usage
The keyofoperator helps you create more reliable and type-safe functions that work with objects. It guarantees that only the actual keys of an object can be used in your functions.

Example
type Person = {
  name: string;
  age: number;
  email: string;
};

type PersonKeys = keyof Person; // "name" | "age" | "email"

function getPersonInfo(person: Person, key: PersonKeys): string | number {
  return person[key];
}

const person: Person = {
  name: 'Alice',
  age: 25,
  email: 'alice@example.com',
};

console.log(getPersonInfo(person, 'name')); // Alice
console.log(getPersonInfo(person, 'age')); // 25


Here, the keyof operator makes sure that getPersonInfo can only accept "name", "age", or "email", which are the valid keys of the Person object.

Conclusion
The keyof operator in TypeScript helps you work with object keys in a safe way, preventing mistakes and improving code reliability. It’s perfect for building functions that need to access properties dynamically while ensuring type safety.