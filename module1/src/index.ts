function formattingString(input:string, toUpper?:boolean ) : string {
    if(toUpper === false){
        return input.toLowerCase()
    }else{
        return input.toUpperCase()
    }
}
// formattingString("Hello");         // "HELLO"
console.log(formattingString("Hello"));         // "HELLO"
console.log(formattingString("Hello", true));   // "HELLO"
console.log(formattingString("Hello", false));  // "hello"


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
   return items.filter((item) => item.rating > 4)
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

filterByRating(books); 
console.log(filterByRating(books));

