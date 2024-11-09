// const user={
//     "name": "John Doe",
//     "age": 30,
//     "isStudent": false,
//     "skills": ["JavaScript", "HTML", "CSS"],
//     "address": {
//       "city": "New York",
//       "zipcode": "10001"
//     }
//   }
  
//   console.log(user.address)
  




//   const user = {
//     "name": "John Doe",
//     "age": 30,
//     "skills": ["JavaScript", "HTML", "CSS"]
//   };
//   console.log(user.name); // dot mehtod
//   console.log(user['age'])//bracket
//   console.log(user.skills[1])

//   // Converting JSON text to a JavaScript object
  
//   // Converting JSON text to a JavaScript object
const jsonString = '{"name": "Jane Doe", "age": 25}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData);  // Output: Jane Doe

// // Converting a JavaScript object to a JSON string
// const userObject = { name: "John Doe", age: 30 };
// const jsonStringified = JSON.stringify(userObject);
// console.log(jsonStringified);  // Output: {"name":"John Doe","age":30}
  