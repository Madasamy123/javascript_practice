
let obj={
    nam: "Madasamy",
    age: 22,
    Role: "Mechanical"
}


//  add element to obj
  obj.experiece=2;

// console.log(obj)


//  object la erunthu ethu thevaiyo atha yeduka

console.log(obj.age);
console.log(obj["nam"])


// update aguthu age
obj.age=25;

// console.log(obj)


//  delete

delete obj.Role;
// console.log(obj)

obj.Role="Mechanical"


console.log("Role" in obj)


//  element check  hasownproperty()

// console.log(obj.hasOwnProperty("Role"));


// for of..

// for(list of Object.keys(obj)){
//     console.log(list)

// }

// for in..

// for(list in obj){
//     console.log(obj[list])
// }



// merge objects

obj1={nam: "sudharsan"}
obj2={age: 20}

obj3={...obj1,...obj2};

console.log(obj3)


// object length

console.log("length: "+Object.keys(obj3).length)


// type and null

console.log(typeof(obj3) && obj3!==null);
