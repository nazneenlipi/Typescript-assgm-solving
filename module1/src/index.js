// let dev: string = "hii"
// console.log(dev)
function formattingString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
console.log(formattingString("Hello")); // "HELLO"
console.log(formattingString("Hello", true)); // "HELLO"
console.log(formattingString("Hello", false)); // "hello"
