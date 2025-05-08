function formattingString(input:string, toUpper?:boolean ) : string {
    if(toUpper === false){
        return input.toLowerCase()
    }else{
        return input.toUpperCase()
    }
}
console.log(formattingString("Hello"));         // "HELLO"
console.log(formattingString("Hello", true));   // "HELLO"
console.log(formattingString("Hello", false));  // "hello"


