//5. Split String with Different Delimiter
//Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.
let array="HTML-CSS-JavaScript"
let a=array.split(", ")
console.log(a)







//. Joining Array Elements Without a Separator
//Create an array of 4 fruits. Use join() without any separator to combine the array elements 
//into a single string and print the result.

let fruits=["apple","banana","orange","mango"]
let abc=fruits.join(",")
console.log(abc)

//8. Object with Simple Properties
//Write a program to create an object car with properties make, model, and year. Print the model of the car.

const car={
    make: "mahendra",
    model: "Thar",
    year: 2024,
    }
    console.log("model of the car: "+car.model);

   // 9. Array of Objects (Books)
   // Create an array of 2 objects, where each object represents a book with properties title and author.
   // Print the title of the first book.

  let book=[{Tittle: "The blue umbrella",
    author:"Ruskin bond"},{
        Tittle: "Goat",
        author: "vijay"
    }
  ]
  console.log(book[0].Tittle)